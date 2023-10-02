import React from 'react'
import BannerImg from '../../styles/Bannerimg/bannerimg'
import { Container, Typography } from '@mui/material'
import CustomizedTables from './Table'

const Tuition = () => {
  return (
    <>
     <BannerImg bgimg={"url('src/assets/image/Tuition_bg.jpg')"} text={"We make it afforable for you."}/>
     <Container>
     <Typography variant="h4" fontWeight={"bolder"} mt={"60px"}>
        Program's Scholarships & Cost of Attendance
     </Typography>
     <Typography variant="h5" fontWeight="bold" mt="40px">Cost of Attendance</Typography>
     <Typography my="20px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium at repellendus quia eos amet hic? Quia dolor architecto nemo nisi enim mollitia, ab officia, possimus eum ex corporis exercitationem ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis.</Typography>
        <CustomizedTables/>
        <Typography variant="subtitle2" my="10px" >
            Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et asperiores ratione delectus accusamus possimus, soluta numquam quisquam commodi tempore!
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt="40px">Scholarships</Typography>
<Typography my="20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident repellat consequuntur. Sed minus nostrum sapiente deserunt voluptate soluta pariatur tempora ad quae recusandae, quidem, alias quibusdam est ratione quam. Deleniti voluptate dolorum in. Hic dolorem nostrum sunt eveniet accusantium.</Typography>
<CustomizedTables/>
<Typography variant="subtitle2" my="10px" >
            Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et asperiores ratione delectus accusamus possimus, soluta numquam quisquam commodi tempore!
        </Typography>
     </Container>
    </>
  )
}

export default Tuition
