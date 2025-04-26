import { Flex, Spinner } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <Flex color={"#fff"} gap={"2"} direction={"column"} alignItems={"center"}>
        <Spinner w={"20px"} h={"20px"} />
        loaded
      </Flex>
    </Html>
  );
}
