import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Cube = () => {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

const Box = () => {
  const boxRef = useRef(null);

  useFrame(({ clock }) => {
    // Rotate the box in the x direction
    if (boxRef.current) {
      boxRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      //   boxRef.current.rotation.x = clock.getElapsedTime() * 0.01;
      //   textRef.current.rotation.y = -clock.getElapsedTime();
      //   textRef.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[6, 1, 6]} /> {/* Increased size of the box */}
      <meshStandardMaterial color="hotpink" />
      <Text
        position={[0, 0, 3]}
        fontSize={0.5}
        color="#fff"
        anchorX="center"
        anchorY="middle"
      >
        Front
      </Text>
      <Text
        position={[0, 0, -3.1]}
        fontSize={0.5}
        rotation={[0, -3.1, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Back
      </Text>
      <Text
        position={[3.1, 0, 0]}
        fontSize={0.5}
        rotation={[0, 1.5, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Right
      </Text>
      <Text
        position={[-3.1, 0, 0]}
        fontSize={0.5}
        color="white"
        rotation={[0, -1.5, 0]}
        anchorX="center"
        anchorY="middle"
      >
        Left
      </Text>
    </mesh>
  );
};

export default Cube;
