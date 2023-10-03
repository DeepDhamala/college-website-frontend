import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { slideInLeft } from './Animations';

const TopicAnimation = ({text}) => {
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
        borderRadius="10px"
        className="scrollable-content box"
        sx={{
          backgroundColor: '#9c27b0',
          animation: isVisible ? `${slideInLeft} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` : 'none',
          width: {xs:'90%', md:'40%'},
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
        ref={boxesRef}
      >
        <Typography variant="h6" color="white" mx="10px" gutterBottom>
          {text}
        </Typography>
      </Box>
    </>
  )
}

export default TopicAnimation
