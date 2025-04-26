import { Flex, FlexProps } from "@chakra-ui/react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useDeviceType } from "Services/CustomHooks/useDeviceType";
interface ITiltCardProps extends FlexProps {
  children: React.ReactNode;
}
const TiltCard = (props: ITiltCardProps) => {
  const { children } = props;
  const [scale, setScale] = useState(1.05);
  const { isMobile } = useDeviceType();
  return (
    <Tilt
      scale={scale}
      transitionSpeed={2500}
      perspective={500}
      style={{
        boxShadow:
          "0 0 20px rgba(0, 0, 0, 0.1), 0 0 30px rgba(145, 94, 255, 0.1), 0 0 40px rgba(255, 0, 0, 0.1), 0 0 50px rgba(145, 94, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        width: "300px",
        height: isMobile ? "200px" : "400px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        animation={"rotate 3s linear infinite"}
        sx={{
          "@keyframes rotate": {
            "0%": {
              transform: "translate(-50%,-50%) rotate(0deg)",
            },
            "100%": {
              transform: "translate(-50%,-50%) rotate(360deg)",
            },
          },
        }}
        transform={"translate(-50%,-50%)"}
        m={"auto"}
        style={{
          width: "500%",
          height: "500%",

          transformStyle: "preserve-3d",
          background:
            "conic-gradient(from 0deg at 50% 50%, #915eff, #ff0000, #915eff)",
        }}
        zIndex={-1}
      ></Flex>
      <Flex
        zIndex={2}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"primary.900"}
        m={"auto"}
        w={"99%"}
        style={{ borderRadius: "20px" }}
        height={"99%"}
      >
        <Flex transform={"translateZ(60px)"} w={"100%"} h={"100%"}>
          {children}
        </Flex>
      </Flex>
    </Tilt>
  );
};

export default TiltCard;
