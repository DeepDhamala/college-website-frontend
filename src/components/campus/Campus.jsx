import React from 'react'
import BannerImg from '../../styles/Bannerimg/bannerimg'
import { Box, Container, Typography } from '@mui/material'

const Campus = () => {
  return (
    <>
      <BannerImg bgimg={"url('src/assets/image/campus_bg.jpg')"} text={"A place A Home A Family"}/>
      <Box my="40px">
        <Container>
            
        <Typography variant="h4" fontWeight="bolder">
            Campus Life
        </Typography>
        <Typography my="10px" textAlign={"justify"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit incidunt fuga delectus obcaecati architecto exercitationem tempore quod eaque rerum quia, asperiores debitis inventore deserunt eveniet earum perferendis eos placeat odio dolores. Voluptates voluptatibus eligendi deleniti ea perspiciatis odit praesentium quas libero optio. Repellat distinctio voluptatum blanditiis vitae, dolore animi vel ea sapiente corrupti, laborum nobis quam eius quo ex fugiat sed hic non odit fuga deserunt iusto adipisci. Unde officiis enim culpa distinctio dignissimos ipsa sapiente tempore voluptatibus odit delectus ad, quisquam cupiditate a iure est doloremque. Laborum, reprehenderit quidem totam vitae dolor eos animi? Quaerat ipsa magni sapiente?
        </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Campus
