import { Flex, Center, Text } from "@chakra-ui/react";
import { Suspense, useRef } from "react";
import Stars from "./Stars";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SystemModel from "../../public/System";

import { Loader } from "./LoaderThreeFuntion";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";

// Wrapper component to animate the system model
const AnimatedSystem = () => {
  const systemRef = useRef(null);
  const { isDesktop } = useDeviceType();
  return <SystemModel ref={systemRef} scale={isDesktop ? 0.3 : 0.3} />;
};

const SystemScene = () => {
  const { isDesktop } = useDeviceType();

  return (
    <Flex
      w={"100%"}
      h={{ lg: "70vh", md: "70vh", sm: "30vh", xs: "30vh" }}
      position={"absolute"}
      zIndex={9}
      bottom={isDesktop ? 0 : "50%"}
      transform={isDesktop ? "" : "translate(0,50%)"}
      left={0}
    >
      <Canvas
        style={{ minHeight: "auto", minWidth: "100%" }}
        camera={{ position: [200, 300, 10] }}
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 3.5}
          minPolarAngle={Math.PI / 3.5}
          enablePan={false}
        />
        <Suspense fallback={<Loader />}>
          <AnimatedSystem />
        </Suspense>
        <ambientLight intensity={0.04} />
        <pointLight intensity={1} />
      </Canvas>
    </Flex>
  );
};

export default SystemScene;
