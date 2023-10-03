import { Box, Typography } from "@mui/material";
import React from "react";
import { slideInBottom } from "../../animations/Animations";
import SubHeader from "../../components/Header/SubHeader";

const BannerImg = ({ bgimg, text }) => {
  return (
    <>
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 30%",
        height: "600px",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "600px",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.9) 100%)",
          zIndex: 1,
        },
        
      }}
    >
      <Typography
        variant="h2"
        color="secondary.dark"
        fontWeight="bolder"
        sx={{
          animation: `${slideInBottom} 2.0s cubic-bezier(0.250, 0.460, 0.450,0.940) both !important`,
          position: "relative",
          pl: "5%",
         pt:'250px',
          zIndex: 20,
          
        }}
      >
        {text}
      </Typography>
    </Box>
    <SubHeader/>
    </>
  );
};

export default BannerImg;