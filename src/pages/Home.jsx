import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { slideInBottom } from "../animations/Animations";
import BannerImg from "../styles/Bannerimg/bannerimg";
import Seeking from "../components/seeking/Seeking";
import Specialities from "../components/specialities/Specialities";
import News from "../components/news/News";
import Shortcuts from "../components/Shortcuts/Shortcuts";
import MessageFromPresident from "../components/messagefrompresident/messagefrompresident";
import GalleryIndex from "../components/Gallery/GalleryIndex";

const Home = () => {
  return (
   <>
      <BannerImg bgimg={"url('src/assets/image/college_home.jpg')"} text={"Be the Best Version of Yourself"}/>
      <Seeking/>
      <Container>
      <Specialities/>
      <News/>
      <Shortcuts/>
      <MessageFromPresident/>
      <GalleryIndex/>
      </Container>
     
        
      </>
        
   //</Box>

  );
};

export default Home;
