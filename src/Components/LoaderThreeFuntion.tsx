import { Flex } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <Flex>{progress.toFixed(2)}&nbsp;% loaded</Flex>
    </Html>
  );
}
