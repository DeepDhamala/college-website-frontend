import { Box, Card, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { slideInBottom } from "../../animations/Animations";

const Boxes = ({topic, subtitle, backgcolor, from}) => {
  const boxesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (boxesRef.current) {
      const elementTop = boxesRef.current.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Card  ref={boxesRef} sx={{ width:{md:"80%", xs:'100%'},
       height: "125px", bgcolor: `${backgcolor}`, animation: isVisible && `${slideInBottom} 1.5s cubic-bezier(0.250, 0.460, 0.450,0.940) both` }}>
        <Box width="80px" pt="20px" pl="10px">
          <Typography
            color="white"
            lineHeight={"0.8"}
            variant="h6"
            fontWeight="bolder"
            fontFamily={"monospace"}
          >
            {topic}
          </Typography>
        </Box>
        <Typography pt="10px" pl="5px" variant="subtitle2" color="white">
          {subtitle}
        </Typography>
      </Card>
    </>
  );
};

export default Boxes;
