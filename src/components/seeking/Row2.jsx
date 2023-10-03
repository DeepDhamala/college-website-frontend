import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Boxes from "./Boxes";
import BoxAnimation from "./BoxesAnimation";

const Row2 = () => {
  return (
    <>
      <Box
        sx={{py:"20px",
          backgroundImage: "url('src/assets/image/seek_plus.jpeg')",
          // height: "400px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={{ md: 10 }}>
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
                  color="white"
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
                <Grid container spacing={0.1}>
                  <Grid item xs={12} md={6} mt="20px">
                    <BoxAnimation 
                    from="top"
                      topic="Apply to C_N"
                      subtitle="lorem haitl dakot lke l"
                      backgcolor="#007a86"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} mt="20px">
                    <BoxAnimation
                    from="right"
                      topic="Tuition & Fees"
                      subtitle="Lorem feits ifti lkje."
                      backgcolor="#63666a"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} mt="20px">
                    <BoxAnimation
                    from="left"
                      topic="Visit C_N"
                      subtitle="Lorem feits ifti lkje."
                      backgcolor="#63666a"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} mt="20px">
                    <BoxAnimation
                    from="bottom"
                      topic="Scholarships"
                      subtitle="Lorem feits ifti lkje."
                      backgcolor="#8a387c"
                    />
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Row2;
