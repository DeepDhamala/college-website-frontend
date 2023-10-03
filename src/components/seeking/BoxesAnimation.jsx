import { Box, Card, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { slideInLeft,slideInBottom, slideInRight, textPopUpTop, slideInTop } from '../../animations/Animations';
// import { slideInLeft,slideInRight,slideInBottom} 

const animationMap = {
    top: slideInTop,
    right: slideInRight,
    left: slideInLeft,
    bottom: slideInBottom,
  };

const BoxAnimation = ({text, img, from, textAlign,fontWeight, variant, ff, bgColor, width,color,topic, subtitle, backgcolor}) => {
    const selectedAnimation = animationMap[from]|| '';
    const boxesRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        });
    
        if (boxesRef.current) {
          observer.observe(boxesRef.current);
        }
    
        return () => {
          if (boxesRef.current) {
            observer.unobserve(boxesRef.current);
          }
        };
      }, []);
    
  return (
    <>
      <Card 
        // className="scrollable-content box"
        sx={{width:{md:"80%", xs:'100%'},
        height: "125px",
        //   backgroundColor: '#9c27b0',
        bgcolor: `${backgcolor}`,
        animation: isVisible
        && `${selectedAnimation} 1.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        
         
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.75s',
        }}
        ref={boxesRef}
        
      ><Box width="80px" pt="20px" pl="10px">
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
  )
}

export default BoxAnimation
