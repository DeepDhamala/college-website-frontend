import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { slideInBottom } from "../animations/Animations";
import BannerImg from "../styles/Bannerimg/BannerImg";
import Seeking from "../components/seeking/Seeking";
import Specialities from "../components/specialities/Specialities";
import News from "../components/news/News";
import Shortcuts from "../components/Shortcuts/Shortcuts";
import MessageFromPresident from "../components/messagefrompresident/MessageFromPresident";
import GalleryIndex from "../components/Gallery/GalleryIndex";
import Row2 from "../components/seeking/Row2";
import Homepage from "../assets/image/college_home.jpg"
const Home = () => {
  return (
   <>
      <BannerImg bgimg={Homepage} text={"Be the Best Version of Yourself"}/>
      {/* <Seeking/> */}
      {/* <Box backgroundColor="#9a76b0"> */}

      <Row2/>
      <Box >
        
      <Container maxWidth="lg">
      <Specialities/>
      <News/>
      <Shortcuts/>
      <GalleryIndex/>
      <MessageFromPresident/>
      </Container>
      {/* </Box> */}
     
       </Box> 
        
      </>
        
   //</Box>

  );
};

export default Home;
