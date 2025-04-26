import { Flex } from "@chakra-ui/react";
import { Suspense, useRef } from "react";
import Stars from "./Stars";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import BeeModel from "../../public/Bee";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";
import { Loader } from "./LoaderThreeFuntion";
import useInView from "Services/CustomHooks/useInView";
import { motion } from "framer-motion";

// Wrapper component to animate the Earth model
const AnimatedEarth = () => {
  const earthRef = useRef(null);
  const { isDesktop } = useDeviceType();

  // This hook runs on every frame
  useFrame(({ clock }) => {
    // Rotate the earth model based on elapsed time
  });

  return <BeeModel ref={earthRef} scale={isDesktop ? 2 : 3} />;
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
      w={{ lg: "500px", md: "500px", sm: "300px", xs: "300px" }}
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
        camera={{ position: [50, 50, 50] }}
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          // autoRotate={false}
        />
        <ambientLight intensity={10} />
        {/* <directionalLight position={[20, 20, 20]} intensity={10} /> */}
        <Suspense fallback={<Loader />}>
          <AnimatedEarth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </Flex>
  );
};

export default GlobeScene;
