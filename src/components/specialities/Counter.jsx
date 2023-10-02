import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { WifiCalling } from '@mui/icons-material';
const Counter = ({max,text}) => {
    const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && counter < max) {
        const increment = max > 1000 ? 300 : 2;
        setCounter(prevCounter => prevCounter + increment);
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counter]);
  return (
    <>
       <Card elevation={5} sx={{ width: 350, my:'10px', height:'250px' }} >
      <CardContent>
        
        <Typography mt="10px" ref={counterRef} fontFamily={"Roboto"} id="counter-section"variant="h5" color="secondary" component="div" fontWeight={"bolder"} fontSize={"80px"} textAlign={"center"}>
        {counter}+
        </Typography>
        
         
        
        <Typography  mt="20px" variant="body1" textAlign={"center"} fontFamily="Roboto">
          {text}
    
        </Typography>
      </CardContent>
      
    </Card>
    </>
  )
}

export default Counter
