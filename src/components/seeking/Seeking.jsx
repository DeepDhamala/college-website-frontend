import React, { useRef, useState, useEffect } from "react";
import Boxes from "./Boxes";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { slideInBottom } from "../../animations/Animations";
import "./seeking.css";

const Seeking = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const seekingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (seekingRef.current) {
      observer.observe(seekingRef.current);
    }

    return () => {
      if (seekingRef.current) {
        observer.unobserve(seekingRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ position: "relative", height: { xs: "950px", md: "auto" } }}>
      <Box
        ref={seekingRef}
        sx={{
          position: "relative",
          backgroundImage: "url('src/assets/image/seek_bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "400px",
          opacity: isVisible ? 1 : 1,
          transition: isVisible ? "opacity 0.5s" : "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#7b1fa2",
            opacity: 0.6,
          }}
        />
        <Container maxWidth="md">
          <Box
            sx={{
              position: "relative",
              color: "#fff",
              zIndex: 1,
            }}
          >
            <Grid container py="40px" spacing="50px">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  color="white"
                  fontFamily="Roboto"
                  fontWeight="bolder"
                >
                  Together We Can
                </Typography>
                <Typography
                  fontSize="15px"
                  py="20px"
                  variant="subtitle2"
                  fontWeight="bold"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique sed dolorem ducimus nemo rem placeat minima illum
                  aliquid nostrum blanditiis, cumque totam accusamus
                  voluptatibus facilis itaque nulla exercitationem explicabo
                  dolorum laborum id dicta eligendi. Sed, enim. Fugit impedit
                  nobis enim sequi obcaecati voluptas praesentium cumque, beatae
                  omnis excepturi explicabo ipsum, quam qui dolor. Dicta
                  tempora, pariatur nemo corrupti quo nam esse magni et odio
                  neque. Iure?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container p="10px">
                  <Grid item xs={12} md={6} mt="10px">
                    <Boxes
                      topic="Apply to C_N"
                      subtitle="lorem haitl dakot lke l"
                      backgcolor="#007a86"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} mt="20px">
                    <Boxes
                      topic="Tuition & Fees"
                      subtitle="Lorem feits ifti lkje."
                      backgcolor="#63666a"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} mt="20px">
                    <Boxes
                      topic="Visit C_N"
                      subtitle="Lorem feits ifti lkje."
                      backgcolor="#63666a"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} mt="20px">
                    <Boxes
                      topic="Scholarships"
                      subtitle="Lorem feits ifti lkje."
                      backgcolor="#8a387c"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Seeking;
