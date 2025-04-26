import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import useInView from "Services/CustomHooks/useInView";
import TiltCard from "./TiltCard";
import { FontSizeBody, FontSizeHeading } from "Constants";

const AboutSection = () => {
  const developmentData = [
    {
      title: "Frontend Developer",
      Image: "",
    },
    {
      title: "UI/UX Designer",
      Image: "",
    },
    {
      title: "Photographer",
      Image: "",
    },
  ];
  const mainRef = useRef(null);
  const cardRef = useRef(null);
  const inView = useInView({ targetRef: mainRef });
  const inViewCardRef = useInView({ targetRef: cardRef });
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      justifyContent={"start"}
      alignItems={"start"}
      textAlign={"start"}
    >
      <Flex
        direction={"column"}
        maxW={{ lg: "60%", md: "70%", sm: "100%", xs: "100%" }}
        p={{ lg: "0%", md: "0%", sm: "1rem", xs: "1rem" }}
        ref={mainRef}
      >
        <Text
          as={motion.div}
          initial={{ transform: "translateX(-10%)", opacity: 0 }}
          animate={
            inView
              ? {
                  transform: "translateX(0%)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.1 },
                }
              : {}
          }
          color={"secondary.300"}
          fontSize={"fontStyle"}
          className="uppercase tracking-wider"
        >
          Introduction
        </Text>

        <Text
          as={motion.div}
          initial={{ transform: "translateX(-10%)", opacity: 0 }}
          animate={
            inView
              ? {
                  transform: "translateX(0%)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }
              : {}
          }
          color={"#fff"}
          className="maintext"
          fontSize={FontSizeHeading}
        >
          Overview.
        </Text>
        <Text
          as={motion.div}
          initial={{ transform: "translateX(-10%)", opacity: 0 }}
          animate={
            inView
              ? {
                  transform: "translateX(0%)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.3 },
                }
              : {}
          }
          color={"secondary.300"}
          fontSize={FontSizeBody}
        >
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like React, and Next.js. I'm a quick learner
          and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </Text>
      </Flex>
      <Flex
        w={"100%"}
        p={"2rem 1rem"}
        gap={"2rem"}
        ref={cardRef}
        minH={"60vh"}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
      >
        {developmentData.map((item, idx) => {
          return (
            <Box
              key={idx}
              as={motion.div}
              initial={{ y: "60%", opacity: 0 }}
              animate={
                inViewCardRef
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }
                  : {
                      y: "20%",
                      opacity: 0,
                      transition: { ease: "easeInOut" },
                    }
              }
            >
              <TiltCard>
                <Flex
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#fff"}
                    fontSize={"2em"}
                    className="maintext"
                  >
                    {" "}
                    {item.title}
                  </Text>
                </Flex>
              </TiltCard>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AboutSection;
