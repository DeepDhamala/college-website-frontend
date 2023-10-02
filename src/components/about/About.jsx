import React from 'react'
import BannerImg from '../../styles/Bannerimg/bannerimg'
import { Box, Container, Typography } from '@mui/material'

const About = () => {
  return (
    <>
         <BannerImg bgimg={"url('src/assets/image/about_bg.jpg')"} text={"A home of Thousands"}/>
         <Box>
            <Container>
                <Typography mb="20px" mt="40px" variant="h5" fontWeight={"bolder"}>
                    Why we call it a Home?
                </Typography>
                <Typography my="10px">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus at corrupti praesentium sequi facere doloremque fugiat molestiae debitis, vitae odio modi magnam sunt sapiente deserunt voluptatum consectetur, placeat nam temporibus quia. Ullam consectetur commodi optio dolorem odit, laudantium voluptatibus fuga eligendi modi eos distinctio, culpa tempore minus, quam veritatis.
                </Typography>
            </Container>
         </Box>
    </>
  )
}

export default About
