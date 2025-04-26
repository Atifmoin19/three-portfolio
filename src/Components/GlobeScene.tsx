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

  // This hook runs on every frame
  useFrame(({ clock }) => {
    // Rotate the earth model based on elapsed time
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      earthRef.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return <EarthModel scale={2} ref={earthRef} />;
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
      w={"100%"}
      minW={{ lg: "500px", md: "500px", sm: "100%", xs: "100%" }}
      h={"100%"}
      minH={"80vh"}
      position={"relative"}
      zIndex={99999}
    >
      <Canvas
        style={{
          minHeight: "80vh",
          position: isDesktop ? "absolute" : "relative",
          background: "transparent",
          top: "0%",
          right: "0",
        }}
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          // autoRotate={false}
        />
        <ambientLight intensity={10} />
        <Suspense fallback={<Loader />}>
          <AnimatedEarth />
        </Suspense>
        <Environment preset="sunset" />
        {/* <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.8}
          scale={10}
          blur={2}
          far={10}
          color={"purple"}
        /> */}
      </Canvas>
    </Flex>
  );
};

export default GlobeScene;
