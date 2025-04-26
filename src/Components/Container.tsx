import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface IContainerProps extends FlexProps {
  children: React.ReactNode;
}

const defaultPadding = {
  base: "1rem",
  sm: "1rem 2rem",
  md: "1rem 3rem",
  lg: "1rem 5rem",
};

const Container = (props: IContainerProps) => {
  const { children, padding = defaultPadding, ...rest } = props;

  return (
    <Flex
      w="100%"
      minH={"100vh"}
      justifyContent="start"
      alignItems="start"
      position="relative"
      h="100%"
      padding={padding}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Container;
