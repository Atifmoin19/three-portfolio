import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import useInView from "Services/CustomHooks/useInView";
import SystemScene from "./SystemScene";

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView({ targetRef: ref });

  return (
    <Flex
      zIndex={2}
      w={"100%"}
      h={"100%"}
      position={"relative"}
      mt={{ lg: "0rem", md: "0rem", sm: "4rem", xs: "4rem" }}
      gap={{ lg: "4rem", md: "3rem", sm: "2rem", xs: "1rem" }}
      px={{ lg: "4rem", md: "3rem", sm: "2rem", xs: "1rem" }}
      alignItems={"start"}
      ref={ref}
    >
      <Flex justifyContent={"start"} alignItems={"center"} direction={"column"}>
        <Flex
          w={"20px"}
          h={"20px"}
          aspectRatio={"1/1"}
          rounded={"full"}
          bg={"primary.500"}
        ></Flex>
        <Flex
          mt={"-2px"}
          w={"5px"}
          h={"300px"}
          bg={"linear-gradient(to bottom, var(--bg1), transparent)"}
        ></Flex>
      </Flex>
      <Flex color={"#fff"} direction={"column"} justifyContent={"start"}>
        <Text
          as={motion.div}
          className="maintext"
          lineHeight={"1em"}
          initial={{ transform: "translateY(100%)", opacity: 0 }}
          animate={
            inView
              ? {
                  transform: "translateY(0%)",
                  opacity: 1,
                  transition: { duration: 0.5 },
                }
              : {}
          }
          fontSize={"6em"}
        >
          {" "}
          Hi, I'm{" "}
          <Text as={"span"} color={"primary.500"}>
            Atif
          </Text>
        </Text>
        <Text
          as={motion.div}
          initial={{ transform: "translateY(100%)", opacity: 0 }}
          animate={
            inView
              ? {
                  transform: "translateY(0%)",
                  opacity: 1,
                  transition: { duration: 0.5 },
                }
              : {}
          }
          className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100"
        >
          I develop modern, user <br />
          interfaces and web applications
        </Text>
        <Flex
          p={"1rem"}
          w={{ lg: "600px", md: "600px", sm: "100%", xs: "100%" }}
          h={"400px"}
        >
          <SystemScene />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
