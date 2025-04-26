import { Flex, Center, Text } from "@chakra-ui/react";
import {
  Suspense,
  useRef,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import Stars from "./Stars";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import SystemModel from "../../public/System";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { DirectionalLight } from "three";
import { Loader } from "./LoaderThreeFuntion";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";

// Wrapper component to animate the system model
const AnimatedSystem = () => {
  const systemRef = useRef(null);

  // This hook runs on every frame
  // useFrame(({ clock }) => {
  //   // Rotate the system model based on elapsed time
  //   if (systemRef.current) {
  //     systemRef.current.rotation.y = clock.getElapsedTime() * 0.4;
  //     systemRef.current.rotation.x = clock.getElapsedTime() * 0.01;
  //   }
  // });

  return <SystemModel ref={systemRef} />; // Scale down the model to make it viewable
};

const SystemScene = () => {
  const { isDesktop } = useDeviceType();
  return (
    <Flex w={"100%"} h={"100%"}>
      <Canvas camera={{ position: isDesktop ? [10, 5, 3] : [17, 7, 3] }}>
        {/* Adjust camera position to see the model better */}
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          // enablePan={true}

          // autoRotate={false}
        />
        {/* <directionalLight /> */}

        {/* <directionalLight position={[10, 10, 5]} intensity={2} /> */}
        <Suspense fallback={<Loader />}>
          <AnimatedSystem />
        </Suspense>
      </Canvas>
    </Flex>
  );
};

export default SystemScene;
