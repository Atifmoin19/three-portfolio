import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import logo from "assets/logo.png";

const Navbar = () => {
  return (
    <Flex
      position={"fixed"}
      top={0}
      w={"100%"}
      left={0}
      h={"5rem"}
      bg={"rgba(0,0,0,0.2)"}
      backdropFilter={"blur(4px)"}
      zIndex={9999}
      p={{ lg: "0rem 6rem", md: "0rem 4rem", sm: "0rem 2rem", xs: "0rem" }}
      boxShadow={"md"}
      alignItems={"center"}
    >
      <Flex
        gap={2}
        alignItems={"center"}
        userSelect={"none"}
        cursor={"pointer"}
      >
        <Image
          draggable={false}
          src={logo}
          w={"50px"}
          aspectRatio={"1/1"}
          h={"50px"}
        />{" "}
        <Flex
          fontSize={"1.2em"}
          className="maintext"
          color={"#fff"}
          alignItems={"center"}
          gap={2}
        >
          <Text> Atif</Text>
          <Divider
            h={"15px"}
            opacity={1}
            border={"2px solid #fff !important"}
            orientation="vertical"
          />
          <Text>SE - Frontend</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
