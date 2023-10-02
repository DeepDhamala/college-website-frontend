import React from 'react'
import BannerImg from '../../styles/Bannerimg/bannerimg'
import AdmissionProcessTab from './AdmissionProcessTab'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Admission = () => {
  return (
    <>
      <BannerImg bgimg={"url('src/assets/image/admission_bg.jpg')"} text={"Begin a Life Changing Journey With Us."}/>
      <Box my="0px" pb bgcolor={"lightgrey"}>
        
      <Container maxWidth="lg" >
        <AdmissionProcessTab />
        

      </Container>
      </Box>
      <Container maxWidth="lg" >

      <Box my={"20px"}>
        <Typography variant="h6" fontWeight={"bolder"}>
          Details To Consider
        </Typography>
        <Grid container py>
          <Grid item xs={6}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempora nobis ut quis quae ducimus nisi, perferendis aut recusandae dicta vitae quam cumque consequuntur commodi doloremque laboriosam ex eum quibusdam. Qui commodi natus culpa maiores quidem ratione ullam, cum similique repudiandae nam enim molestias doloremque temporibus officiis optio corporis quasi.
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Box align="center" >
              <Typography variant="h5" fontWeight="bolder" my="0px" color="secondary">
                Useful Links
              </Typography>
              <Box>
                <Typography>What our Expert has to say?</Typography>
                <Typography>College Life</Typography>
                <Typography>News/Events</Typography>
                <Typography>Affialiated Colleges</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography mr={5} component={Link} to="/academics">View Our Academics Programs</Typography>
        <Typography component={Link} to="/tuition&scholarships">I Deserve Scholarships</Typography>
      </Box>
      </Container>
        
    </>
  )
}

export default Admission
