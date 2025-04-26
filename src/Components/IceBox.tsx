import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface IIceBoxProps extends FlexProps {
  children?: React.ReactNode;
  intensity?: number;
}
const IceBox = (props: IIceBoxProps) => {
  const { children, intensity, ...rest } = props;
  return (
    <Flex
      h={"150px"}
      width={"150px"}
      bg={`rgba(255, 255, 255,${intensity ? intensity : 0})`}
      backdropFilter={"blur(5px)"}
      borderRadius={"10px"}
      border={`1px solid rgba(255, 255, 255, 0.2)`}
      boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
      overflow={"hidden"}
      position={"relative"}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)",
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "20%",
        right: "20%",
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)",
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default IceBox;
