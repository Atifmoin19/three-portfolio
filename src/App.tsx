import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import MainLayout from "./Layouts/MainLayout";
import Container from "Components/Container";
import bg from "assets/wall.png";
import HeroSection from "Components/HeroSection";
import AboutSection from "Components/AboutSection";
import IceBox from "Components/IceBox";
import { motion } from "framer-motion";

import { useRef, Suspense, useEffect } from "react";

import useInView from "Services/CustomHooks/useInView";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";
import ParallaxExample from "Components/ParallaxExample";
import WorkExperience from "Components/WorkExperience";
import GlobeScene from "Components/GlobeScene";
import SystemScene from "Components/SystemScene";
import Cube from "Components/Cube";
import Contact from "Components/contact";
import Stars from "Components/Stars";

import ComingSoon from "Components/ComingSoon";
import { FontSizeBody, FontSizeHeading } from "Constants";

function App() {
  const ref = useRef(null);
  const iceRef = useRef(null);
  const inView = useInView({ targetRef: ref });
  const { isMobile } = useDeviceType();
  const inViewIceRef = useInView({ targetRef: iceRef });
  const count = !isMobile ? 16 : 8;

  // useEffect(() => {
  //   let grid = document.getElementById("grid");

  //   grid?.addEventListener("mousemove", (e) => {
  //     let cells = grid.querySelectorAll(".grid-cell");
  //     let rect = grid.getBoundingClientRect();
  //     let mouseX = e.clientX - rect.left;
  //     let mouseY = e.clientY - rect.top;

  //     cells.forEach((cell) => {
  //       let cellRect = cell.getBoundingClientRect();
  //       let cellX = cellRect.left - rect.left + cellRect.width / 2;
  //       let cellY = cellRect.top - rect.top + cellRect.height / 2;
  //       let distance = Math.hypot(mouseX - cellX, mouseY - cellY);
  //       if (distance < 200) {
  //         cell.classList.add("active");
  //         let angle =
  //           (Math.atan2(mouseY - cellY, mouseX - cellX) * 180) / Math.PI;
  //         // Limit rotation to -90deg to 90deg

  //         cell.style.transform = `rotate(${angle}deg)`;
  //       } else {
  //         cell.classList.remove("active");
  //         cell.style.transform = "";
  //       }
  //     });
  //   });
  // }, []);

  return (
    <>
      <MainLayout bgColor={"primary.900"}>
        {/* <Container
          minH={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          zIndex={999999}
          bg={"teal"}
        >
          <Grid id="grid" gridTemplateColumns={"repeat(10,50px)"} gap={"5px"}>
            {new Array(100).fill(1).map((item, idx) => {
              return (
                <Flex
                  bg={"yellow"}
                  key={idx}
                  className="grid-cell"
                  justifyContent={"center"}
                  direction={"column"}
                  transition={".4s ease"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Flex gap={2}>
                    <Flex
                      w={"10px"}
                      h={"10px"}
                      bg="#000"
                      rounded={"full"}
                      alignItems={"end"}
                      justifyContent={"center"}
                    >
                      <Flex
                        w={"5px"}
                        h={"5px"}
                        bg={"#fff"}
                        rounded={"full"}
                      ></Flex>
                    </Flex>
                    <Flex
                      w={"10px"}
                      h={"10px"}
                      bg="#000"
                      rounded={"full"}
                      alignItems={"end"}
                      justifyContent={"center"}
                    >
                      {" "}
                      <Flex
                        w={"5px"}
                        h={"5px"}
                        bg={"#fff"}
                        rounded={"full"}
                      ></Flex>
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
          </Grid>
        </Container> */}

        <Container
          bgImage={bg}
          position={"relative"}
          backgroundSize={"cover"}
          backgroundPosition={"start"}
          backgroundRepeat={"no-repeat"}
          overflow={"hidden"}
        >
          <Flex
            position={"absolute"}
            zIndex={1}
            h={"100vh"}
            w={"100%"}
            overflow={"hidden"}
            alignItems={"center"}
            justifyContent={"end"}
            top={0}
            left={0}
          >
            <Grid
              gridTemplateColumns={{
                lg: "repeat(4,150px)",
                md: "repeat(4,150px)",
                sm: "repeat(2,150px)",
                xs: "repeat(2,150px)",
              }}
              ref={iceRef}
            >
              {new Array(count).fill(1).map((item, idx) => {
                return (
                  <Box
                    as={motion.div}
                    key={idx}
                    initial={{ opacity: 0, translateY: "20%" }}
                    animate={
                      inViewIceRef
                        ? {
                            opacity: 1,
                            translateY: "0%",
                            transition: {
                              duration: 0.1,
                              delay: idx * 0.05,
                              ease: "easeOut",
                            },
                          }
                        : {}
                    }
                  >
                    <IceBox />
                  </Box>
                );
              })}
            </Grid>
          </Flex>
          <HeroSection />
        </Container>

        <Container minH={"100vh"} justifyContent={"start"} alignItems={"start"}>
          <AboutSection />
        </Container>
        <Container minH={"100vh"}>
          <WorkExperience />
        </Container>
        <Container
          minH={"100vh"}
          justifyContent={"center"}
          direction={"column"}
          alignItems={"center"}
          color={"#fff"}
        >
          <Text className="maintext" fontSize={FontSizeHeading}>
            Projects
          </Text>
          <Text fontSize={FontSizeBody} color={"secondary.500"}>
            Project will be listed soon..
          </Text>
          <ComingSoon />
          {/* <AboutSection /> */}
        </Container>
        <Container
          minH={"100vh"}
          // overflow={"visible"}
          overflowX={"hidden"}
          // overflowY={"auto"}
          alignItems={"start"}
          direction={{
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            xs: "column-reverse",
          }}
        >
          <Stars />
          <Contact />

          <GlobeScene />
        </Container>
      </MainLayout>
    </>
  );
}

export default App;
