import React, { useRef, useState, useEffect } from 'react';
import Template from './Template';
import { Box, Typography } from '@mui/material';
import { slideInLeft } from '../../animations/Animations';
import RowAnimation from '../../animations/RowAnimation';
import TopicAnimation from '../../animations/Topic';

const News = () => {
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
      {/* <Box
        className="scrollable-content box"
        sx={{
          backgroundColor: '#9c27b0',
          animation: isVisible ? `${slideInLeft} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` : 'none',
          width: '40%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
        ref={boxesRef}
      > */}
      {/* <RowAnimation color="white" text="News/Events" fontWeight={"bold"} from="left" bgColor="#9c27b0" width={{ xs: '65%', md: '40%' }} /> */}
      <Box my="60px">
<TopicAnimation text={"News/Events"} />
        {/* <Typography variant="h5" color="white" mx="10px" gutterBottom>
          News/Events
        </Typography> */}
      {/* </Box> */}
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex' }}>
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
        </div>
      </div>
      </Box>
    </>
  );
};

export default News;
