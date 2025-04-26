import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Stars = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={1}
      overflow="hidden"
      pointerEvents="none"
      w={"100%"}
      height={"100%"}
    >
      {React.useMemo(() => {
        const stars = Array.from({ length: 100 }).map((_, idx) => {
          const width = Math.random() * 3 + 1;
          const height = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.7 + 0.3;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = Math.random() * 3 + 2;

          return (
            <Box
              key={idx}
              as={motion.div}
              position="absolute"
              width={width + "px"}
              height={height + "px"}
              borderRadius="full"
              backgroundColor="#fff"
              opacity={opacity}
              top={top + "%"}
              left={left + "%"}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                transition: {
                  duration: duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          );
        });
        return stars;
      }, [])}
    </Box>
  );
};

export default Stars;
