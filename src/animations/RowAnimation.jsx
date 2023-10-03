import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { slideInLeft,slideInRight } from './Animations';

const RowAnimation = ({text, img, from, textAlign,fontWeight, variant, ff, bgColor, width,color}) => {
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
      <Box mt="40px"
        className="scrollable-content box"
        sx={{
        //   backgroundColor: '#9c27b0',
        animation: isVisible
        ? `${from === 'left' ? slideInLeft : slideInRight} 1.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
        : 'none',
          width: {xs:'100%'},
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.75s',
        }}
        ref={boxesRef}
        
      ><Box  display={"flex"} justifyContent={"center"}>

        {img && (
        <img src={img} alt="" style={{ maxWidth: '100%', height: '400px' }} />
        )}
        </Box>

        <Box width={width} backgroundColor={bgColor} p="4px" borderRadius="5px">
        <Typography color={color} fontFamily={ff} fontWeight={fontWeight} variant={variant} textAlign={textAlign}>
            {text}
        </Typography>
        </Box>
        {/* <Typography variant="h5" color="white" mx="10px" gutterBottom>
          {text}
        </Typography> */}
      </Box>
    </>
  )
}

export default RowAnimation
