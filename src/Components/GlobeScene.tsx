import { Flex } from "@chakra-ui/react";
import { Suspense, useRef } from "react";
import Stars from "./Stars";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import EarthModel from "../../public/Earth";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";
import { Loader } from "./LoaderThreeFuntion";
import useInView from "Services/CustomHooks/useInView";
import { motion } from "framer-motion";

// Wrapper component to animate the Earth model
const AnimatedEarth = () => {
  const earthRef = useRef(null);
  const { isDesktop } = useDeviceType();

  return <EarthModel ref={earthRef} scale={isDesktop ? 2 : 3} />;
};

const GlobeScene = () => {
  const { isDesktop } = useDeviceType();
  const ref = useRef(null);
  const inView = useInView({ targetRef: ref });
  return (
    <Flex
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={
        inView
          ? { x: 0, opacity: 1, transition: { ease: "easeIn", duration: 0.2 } }
          : {}
      }
      as={motion.div}
      w={{ lg: "500px", md: "500px", sm: "auto", xs: "auto" }}
      h={"100%"}
      minH={{ lg: "80vh", md: "300px", xs: "auto", sm: "auto" }}
      position={"relative"}
      mx={"auto"}
    >
      <Canvas
        style={{
          position: "relative",
          height: isDesktop ? "80vh" : "40vh",
        }}
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 3}
          enableZoom={false}
          enableRotate={true}
          autoRotate
        />
        <ambientLight intensity={1} />
        {inView && (
          <Suspense fallback={<Loader />}>
            <AnimatedEarth />
          </Suspense>
        )}
        <Environment preset="sunset" />
      </Canvas>
    </Flex>
  );
};

export default GlobeScene;
