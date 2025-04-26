import { Box, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const ParallaxExample = () => {
  const { scrollY } = useScroll();

  // Transform scroll position to different values
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Moves 200px when scrolling 500px
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]); // Fades out while scrolling
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]); // Scales up while scrolling

  return (
    <Box h="200vh" position="relative">
      <Box h="100vh" position="sticky" top="0" overflow="hidden">
        <motion.div
          style={{
            y,
            opacity,
            scale,
            background: "radial-gradient(circle, #915eff, #060816)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            color="white"
            fontSize="4xl"
            fontWeight="bold"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            Scroll to see the effect
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ParallaxExample;
