import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    <>
        <Box position="sticky" top="0" zIndex={"5"} width="100%" bgcolor="#333" minHeight="20px" color="white" px={5} display={{
        xs:"none",
        md: "flex",
      }} alignItems={"center"} justifyContent={"space-evenly"}>
            <Typography component={Link} to="/" sx={
                {
                    color:'white',
                    textDecoration:'none'
                }
            }>Home</Typography>
            <Typography component={Link} to="/academics" sx={
                {
                    color:'white',
                    textDecoration:'none'
                }
            }>Academics</Typography>
            <Typography component={Link} to="/admission" sx={
                {
                    color:'white',
                    textDecoration:'none'
                }
            }>Admission</Typography>
            <Typography component={Link} to="/tuition&scholarships" sx={
                {
                    color:'white',
                    textDecoration:'none'
                }
            }>Tuition/Scholarships</Typography>
            <Typography component={Link} to="/campus" sx={
                {
                    color:'white',
                    textDecoration:'none'
                }
            }>Campus</Typography>
           
        </Box>
    </>
  )
}

export default SubHeader
