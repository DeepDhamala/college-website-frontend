import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { slideInLeft, slideInRight } from "../../animations/Animations";
import Gallery from "./Gallery";

const GalleryIndex = () => {
  // const leftItemRef = useRef(null);
  // const rightItemRef = useRef(null);
  // const [isLeftVisible, setIsLeftVisible] = useState(false);
  // const [isRightVisible, setIsRightVisible] = useState(false);

  // const handleScroll = () => {
  //   if (leftItemRef.current && rightItemRef.current) {
  //     const leftElementTop = leftItemRef.current.getBoundingClientRect().top;
  //     const rightElementTop = rightItemRef.current.getBoundingClientRect().top;
  //     const isLeftVisible = leftElementTop < window.innerHeight;
  //     const isRightVisible = rightElementTop < window.innerHeight;
  //     setIsLeftVisible(isLeftVisible);
  //     setIsRightVisible(isRightVisible);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
      <Box my={"60px"}>
        <Typography variant="h5" fontWeight="bolder" my={"10px"} color="secondary">
          Gallery
        </Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            // ref={leftItemRef}
            ref={boxesRef}
            sx={{
              
              animation: isVisible
        ? `${slideInLeft} 1.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
        : 'none',
          width: {xs:'100%'},
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.75s',
              
            }}
          >
            <Gallery />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            ref={boxesRef}
            // ref={rightItemRef}
            sx={{
              animation: isVisible
        ? `${slideInRight} 1.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
        : 'none',
          width: {xs:'100%'},
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.75s',
            }}
          >
            <Box align="center">
              <Typography variant="h5" fontWeight="bolder" my="10px" color="secondary">
                Useful Links
              </Typography>
              <Box>
                <Typography>What our Expert has to say?</Typography>
                <Typography>College Life</Typography>
                <Typography>News/Events</Typography>
                <Typography>Affiliated Colleges</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GalleryIndex;
