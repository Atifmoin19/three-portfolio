import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
interface IContainerProps extends FlexProps {
  children: React.ReactNode;
}
const Container = (props: IContainerProps) => {
  const { children, ...rest } = props;

  return (
    <Flex
      w={"100%"}
      justifyContent={"start"}
      alignItems={"start"}
      h={"100%"}
      padding={{
        base: "1rem",
        md: "1rem 3rem",
        sm: "1rem 2rem",
        lg: "1rem 5rem",
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Container;
