import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import useInView from "Services/CustomHooks/useInView";
import SystemScene from "./SystemScene";
import { FontSizeHeading } from "Consts";

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView({ targetRef: ref });

  return (
    <Flex direction={"column"}>
      <Flex
        as={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={
          inView
            ? {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }
            : {}
        }
        position={"absolute"}
        bottom={"10%"}
        border={"2px solid #fff"}
        rounded={"full"}
        w={"30px"}
        height={"60px"}
        left={"50%"}
        zIndex={9999}
        cursor={"pointer"}
        justifyContent={"center"}
        alignItems={"end"}
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        p={".1rem"}
        transform={"translate(50%,0)"}
      >
        <Flex
          w={"20px"}
          h={"20px"}
          className="scroller"
          bg={"#fff"}
          rounded={"full"}
        ></Flex>
      </Flex>

      <Flex
        zIndex={2}
        w={"100%"}
        h={"100%"}
        position={"relative"}
        mt={{ lg: "8rem", md: "8rem", sm: "8rem", xs: "8rem" }}
        gap={{ lg: "4rem", md: "3rem", sm: "2rem", xs: "1rem" }}
        px={{ lg: "4rem", md: "3rem", sm: "2rem", xs: "1rem" }}
        alignItems={"start"}
        ref={ref}
      >
        <Flex
          justifyContent={"start"}
          alignItems={"center"}
          direction={"column"}
        >
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
            h={{ lg: "300px", md: "300px", sm: "150px", xs: "150px" }}
            bg={"linear-gradient(to bottom, var(--bg1), transparent)"}
          ></Flex>
        </Flex>
        <Flex color={"#fff"} direction={"column"} justifyContent={"start"}>
          <Text
            as={motion.div}
            className="maintext"
            lineHeight={"1em"}
            initial={{ x: 40, opacity: 0 }}
            animate={
              inView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }
                : {}
            }
            fontSize={FontSizeHeading}
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
        </Flex>
      </Flex>
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        <SystemScene />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
