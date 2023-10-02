import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography, Box } from '@mui/material';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { WifiCalling } from '@mui/icons-material';
import Counter from './Counter';
import TopicAnimation from '../../animations/Topic';
const Specialities = () => {
  
  return (
    <>
    {/* <Typography mt={8} variant="h6" fontWeight={"bolder"} color="secondary">College_Name by numbers</Typography> */}
    <TopicAnimation text={"College_Name by Numbers"} />
    <Box width="100%" 
    sx={{display:'flex', 
    alignItems:'center',
    justifyContent:'space-evenly', flexDirection:{xs:'column', md:'row'}}}
    display={"flex"} mb={"40px"}>
       <Counter max="50" text={"Academics Program that suits You well."}/>
       <Counter max="16000" text={"Academics Program that suits You well."}/>
       <Counter max="120" text={"Best Faculty to Guide you."}/>
    </Box>
    </>
  )
}

export default Specialities
