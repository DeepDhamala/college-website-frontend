import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { slideInBottom } from '../../animations/Animations';

const EachShortcut = ({ logo, title }) => {
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
    <Box
      my="40px"
      ref={boxesRef}
      sx={{
        animation: isVisible ? `${slideInBottom} .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'gray', paddingInline: 'auto' }}>
        {logo}
      </div>
      <Typography variant="h6" my="10px" color="#9c27b0" textAlign="center" fontFamily="Roboto" fontWeight="bolder">
        {title}
      </Typography>
    </Box>
  );
};

export default EachShortcut;
