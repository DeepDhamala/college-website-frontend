import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { slideInRight, slideInLeft } from '../../animations/Animations';
import TopicAnimation from '../../animations/Topic';
import RowAnimation from '../../animations/RowAnimation';

const MessageFromPresident = () => {
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const handleScroll = () => {
    if (leftBoxRef.current && rightBoxRef.current) {
      const leftElementTop = leftBoxRef.current.getBoundingClientRect().top;
      const rightElementTop = rightBoxRef.current.getBoundingClientRect().top;
      const isLeftVisible = leftElementTop < window.innerHeight;
      const isRightVisible = rightElementTop < window.innerHeight;
      setIsLeftVisible(isLeftVisible);
      setIsRightVisible(isRightVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box my="60px" >
        {/* <TopicAnimation text="Message From the President"/> */}
          <Container>
        <Box>

          <Typography variant="h6" color="Gray" >
            Message From the President
          </Typography>
        </Box>
        <Grid container >
        <Grid
  // ref={leftBoxRef}
  item
  // mb="20px"
  xs={12}
  md={5}


  // md={5}
  // sx={{
  //   animation: isLeftVisible ? `${slideInLeft} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` : 'none',
  //   textAlign: { xs: 'center', md: 'left' },
  //   p: { md: '50px' },
  //   width: { xs: '100%', md: 'auto' }, // Corrected width for responsiveness
  // }}
>
  {/* <img src="src/assets/image/professor.jpg" alt="" style={{ maxWidth: '80%', height: 'auto' }} /> */}
  <RowAnimation from="left" img="src/assets/image/professor.jpg"/>
</Grid>

          <Grid
            // ref={rightBoxRef}
            alignSelf={"center"}
            item
            xs="12"
            md="7"
            // sx={{
            //   animation: isRightVisible ? `${slideInRight} 1s cubic-bezier(0.250, 0.460, 0.450,0.940) both` : 'none',
            //   height: { md: '400px' },
            //   mt: { md: '70px' },
            // }}
          >
            <RowAnimation textAlign="justify" from="right" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro iusto reprehenderit optio nulla, natus aliquid libero eaque illum provident, rerum aliquam minima voluptatem. Esse, quae possimus corrupti optio enim vero exercitationem animi dolorum quisquam. Minima numquam reiciendis, dolore eligendi, itaque repellat quis eveniet, provident illum minus tempora labore eaque! quae possimus corrupti optio enim vero exercitationem animi dolorum quisquam. Minima numquam reiciendis, dolore eligendi, itaque repellat quis eveniet, provident illum minus tempora labore eaque!
            "/>
            <RowAnimation from="right" text="– John Dao" textAlign="right" 
            variant="h4" 
            fontWeight="bold"
            ff="montez"/>
            {/* <Typography textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro iusto reprehenderit optio nulla, natus aliquid libero eaque illum provident, rerum aliquam minima voluptatem. Esse, quae possimus corrupti optio enim vero exercitationem animi dolorum quisquam. Minima numquam reiciendis, dolore eligendi, itaque repellat quis eveniet, provident illum minus tempora labore eaque!
              </Typography>
              <Typography fontFamily="montez" variant="h4" textAlign="right" fontWeight="bold">
              – John Dao
            </Typography> */}
          </Grid>
        </Grid>
            </Container>
      </Box>
    </>
  );
};

export default MessageFromPresident;
