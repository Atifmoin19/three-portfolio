import React, { useRef } from "react";

import p0 from "assets/Webprojects/p0.png";
import p1 from "assets/Webprojects/p1.png";
import p2 from "assets/Webprojects/p2.png";
import p3 from "assets/Webprojects/p3.png";
import p4 from "assets/Webprojects/p4.png";
import p5 from "assets/Webprojects/p5.png";
import p6 from "assets/Webprojects/p6.png";
import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import useInView from "Services/CustomHooks/useInView";
import ProjectCard from "Components/ProjectCard";

// import photo1 from "../../../Assets/Clicks/1.jpeg";
// import photo2 from "../../../Assets/Clicks/2.jpeg";
// import photo3 from "../../../Assets/Clicks/3.jpeg";
// import photo4 from "../../../Assets/Clicks/4.jpeg";
// import photo5 from "../../../Assets/Clicks/5.jpeg";

// import photo7 from "../../../Assets/Clicks/7.jpeg";
// import photo8 from "../../../Assets/Clicks/8.jpeg";
// import photo9 from "../../../Assets/Clicks/9.jpeg";
// import photo10 from "../../../Assets/Clicks/10.jpeg";
// import photo11 from "../../../Assets/Clicks/11.jpeg";
// import photo12 from "../../../Assets/Clicks/6.jpeg";
// import photo13 from "../../../Assets/Clicks/13.jpeg";
// import photo14 from "../../../Assets/Clicks/14.jpeg";
// import photo15 from "../../../Assets/Clicks/15.jpeg";
// import photo16 from "../../../Assets/Clicks/16.jpeg";
// import photo17 from "../../../Assets/Clicks/17.jpeg";
// import photo18 from "../../../Assets/Clicks/18.jpeg";
// import photo19 from "../../../Assets/Clicks/19.jpeg";
// import photo20 from "../../../Assets/Clicks/20.jpeg";
// import photo21 from "../../../Assets/Clicks/21.jpeg";
// import useInView from "Services/CustomHooks/useInView";

// const photoData = [
//   { image: photo1 },
//   { image: photo2 },
//   { image: photo3 },
//   { image: photo4 },
//   { image: photo5 },
//   { image: photo7 },
//   { image: photo8 },
//   { image: photo9 },
//   { image: photo10 },
//   { image: photo11 },
//   { image: photo12 },
//   { image: photo13 },
//   { image: photo14 },
//   { image: photo15 },
//   { image: photo16 },
//   { image: photo17 },
//   { image: photo18 },
//   { image: photo19 },
//   { image: photo20 },
//   { image: photo21 },
// ];

const ProjectMain = () => {
  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  const flipcardData = [
    {
      image: p0,
      projectName: "Nested Comment and Reply",
      projectType: "Machine Coding Round Question Solution.",
      link: {
        code: "",
        project: "https://react-zgw1gz.stackblitz.io",
      },
    },

    {
      image: p1,
      projectName: "Techicious",
      projectType: "A Freelancing Project (Work under Process.)",
      link: {
        code: "",
        project: "https://techicious.github.io/Techicious-Web/",
      },
    },
    {
      image: p2,
      projectName: "Count ME",
      projectType: "Live Character Counter",
      link: {
        code: "",
        project: "https://atifmoin19.github.io/Live-char-counter/",
      },
    },
    {
      image: p3,
      projectName: "Play Me",
      projectType: "A Music Player App",
      link: { code: "", project: "https://atifmoin19.github.io/MusicPlayer/" },
    },
    {
      image: p4,
      projectName: "Netflix&Chill",
      projectType: "A Customized Netflix Clone.",
      link: { code: "", project: "https://atifmoin19.github.io/netflix/" },
    },
    {
      image: p5,
      projectName: "RedStore",
      projectType: "An E-Commerce Website Design",
      link: {
        code: "",
        project:
          "https://atifmoin19.github.io/E-commers-site/Mysite/indext.html",
      },
    },
    {
      image: p6,
      projectName: "GlassMorphism",
      projectType: "Compnent Baes on glassmorphism.",
      link: {
        code: "",
        project: "https://atifmoin19.github.io/card-hover-animation/",
      },
    },
  ];

  return (
    <>
      <Flex
        w={"100%"}
        // maxH={"80rem"}
        flexWrap={"wrap"}
        // overflowY={"scroll"}
        ref={targetRef}
        gap={"1rem"}
        p={"2rem"}
        justifyContent={"center"}
        alignItems={"start"}
        rounded={"xl"}
        overflow={"hidden"}
        bg={"primary.800"}
      >
        {flipcardData.map((item, idx) => {
          return (
            <ProjectCard
              data={item}
              isAnimation={isInView}
              id={idx}
              key={idx}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default ProjectMain;
