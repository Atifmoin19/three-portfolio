import { Box, Flex, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useRef } from "react";
import useInView from "Services/CustomHooks/useInView";
import IceBox from "./IceBox";
import Stars from "./Stars";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";

import { FontSizeHeading, FontSizeBody } from "Consts";

const WorkExperience = () => {
  const { isMobile } = useDeviceType();
  const data = [
    {
      role: "Software Engineer - Frontend",
      company: "Zopper",
      Exp: "2.4 years",
      logo: "https://assets.entrepreneur.com/content/3x2/2000/1663656290-Untitleddesign96.jpg",
    },
  ];
  return (
    <Flex
      w={"100%"}
      position="relative"
      gap={"1rem"}
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      color={"#fff"}
      m={"auto"}
    >
      <Stars />
      <Text
        zIndex={2}
        fontSize={FontSizeBody}
        className="uppercase"
        color={"secondary.500"}
      >
        What I have done so far
      </Text>
      <Text zIndex={2} fontSize={FontSizeHeading} className="maintext">
        Work Experience.
      </Text>
      <Flex w={"100%"} direction={"column"} py={"2rem"} zIndex={2}>
        {data.map((item, idx) => {
          const jobRef = useRef(null);
          const isInViewJob = useInView({ targetRef: jobRef, offset: "100px" });
          return (
            <Flex
              key={idx}
              py={"2rem"}
              w={"100%"}
              minH={"400px"}
              position={"relative"}
              ref={jobRef}
              px={{ lg: "1rem", md: "1rem", sm: "1rem", xs: "1rem" }}
              justifyContent={
                isMobile ? "end" : idx % 2 === 0 ? "start" : "end"
              }
              _before={{
                content: "''",
                position: "absolute",
                top: "20%",
                left: isMobile ? "2%" : "50%",
                transform: isMobile
                  ? "translate(0%, 0%)"
                  : "translate(-50%, 0%)",
                w: isMobile ? "45px" : "60px",
                rounded: "full",
                bg: "#fff",
                zIndex: 2,
                height: isMobile ? "45px" : "60px",
                backgroundImage: item.logo,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              _after={{
                content: "''",
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: isMobile ? "6%" : "50%",
                transform: isMobile
                  ? "translate(0%, 0%)"
                  : "translate(-50%, 0%)",
                w: "10px",
                bg: "#fff",
                height: "100%",
              }}
            >
              <Box
                as={motion.div}
                initial={{
                  x: !isMobile ? (idx % 2 === 0 ? -10 : 10) : 10,
                  opacity: 0,
                }}
                animate={
                  isInViewJob
                    ? { x: "0%", opacity: 1, transition: { duration: 0.4 } }
                    : {}
                }
              >
                <IceBox
                  width={{
                    lg: "400px",
                    md: "300px",
                    sm: "300px",
                    xs: "300px",
                  }}
                  height={"auto"}
                  intensity={0.1}
                  justifyContent={"start"}
                  alignItems={"start"}
                  backgroundColor={"primary.800"}
                  gap={2}
                  direction={"column"}
                  p={{ lg: "2rem", md: "1rem", sm: "1rem", xs: "1rem" }}
                >
                  <Text
                    textTransform={"uppercase"}
                    className="maintext"
                    fontWeight={"bold"}
                    letterSpacing={"2px"}
                    color={"primary.400"}
                    fontSize={FontSizeBody}
                  >
                    {item.role}
                  </Text>
                  <Text
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"secondary.400"}
                    fontSize={FontSizeBody}
                  >
                    {item.company}
                  </Text>

                  <Flex
                    direction={"column"}
                    fontSize={"md"}
                    gap={2}
                    overflow={"auto"}
                  >
                    <Text
                      position={"relative"}
                      pl={"1rem"}
                      _after={{
                        content: "''",
                        width: "7px",
                        position: "absolute",
                        top: ".4rem",
                        left: "0",
                        height: "7px",
                        bg: "#fff",
                        borderRadius: "100%",
                      }}
                    >
                      Built UI components for BOB Life Insurance, including
                      draggable/droppable features and a Stepper Component with
                      98.10% code quality.
                    </Text>
                    <Text
                      position={"relative"}
                      pl={"1rem"}
                      _after={{
                        content: "''",
                        width: "7px",
                        position: "absolute",
                        top: ".4rem",
                        left: "0",
                        height: "7px",
                        bg: "#fff",
                        borderRadius: "100%",
                      }}
                    >
                      Developed SAAS modules for Bank of Baroda and implemented
                      scrollable table interfaces for Indian Bank and Bank of
                      Maharashtra, ensuring 92% code quality.
                    </Text>
                    <Text
                      position={"relative"}
                      pl={"1rem"}
                      _after={{
                        content: "''",
                        width: "7px",
                        position: "absolute",
                        top: ".4rem",
                        left: "0",
                        height: "7px",
                        bg: "#fff",
                        borderRadius: "100%",
                      }}
                    >
                      Created responsive interfaces for Payworld insurance
                      products and delivered a Progressive Web Application (PWA)
                      with high device compatibility.
                    </Text>
                    <Text
                      position={"relative"}
                      pl={"1rem"}
                      _after={{
                        content: "''",
                        width: "7px",
                        position: "absolute",
                        top: ".4rem",
                        left: "0",
                        height: "7px",
                        bg: "#fff",
                        borderRadius: "100%",
                      }}
                    >
                      Improved performance on low-end devices with a custom
                      modal and integrated AXIOS for efficient API management.
                    </Text>
                    <Text
                      position={"relative"}
                      pl={"1rem"}
                      _after={{
                        content: "''",
                        width: "7px",
                        position: "absolute",
                        top: ".4rem",
                        left: "0",
                        height: "7px",
                        bg: "#fff",
                        borderRadius: "100%",
                      }}
                    >
                      Gained proficiency in TypeScript, AngularJS, and Flutter
                      through online courses.
                    </Text>
                  </Flex>
                </IceBox>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default WorkExperience;
