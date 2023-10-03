import React from "react";
import BannerImg from "../../styles/Bannerimg/BannerImg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import academics from "../../assets/image/academics_banner.jpg"
const Academics = () => {
  const programs = [
    "Department of Electronics",
    "Department of Computer Science",
    "Department of Civil Engineering",
    "Department of Industrial Engineering",
    "Department of Architecture",
    "Department of AutoMobile Engineering",
  ];
  return (
    <>
      <BannerImg
        bgimg={academics}
        text={"Academics Programs That fits you"}
      />
      <Container maxWidth="lg">
        <Typography variant="h5" letterSpacing={".05rem"} my={5} font="Roboto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          ex. Voluptas laudantium libero placeat eligendi doloremque obcaecati
          ipsum natus perspiciatis voluptates maiores! Iure eius soluta quae
          ipsum atque cumque iusto. Voluptas aliquid, repellendus non eaque
          architecto eos quam sequi. Blanditiis porro, commodi quam doloribus
          quae delectus, saepe non voluptate iste dicta nobis nulla asperiores,
          sequi ratione.
        </Typography>
        <Box my="60px">

        
        <Box
          component={Paper}
          elevation={5}
          bgcolor="#9c27b0"
          sx={{width:{xs:"100%", md:"350px"}}}
          // width="350px"
          borderRadius={"15px"}
          mb="5px"
          mt={"60px"}
        >
          <Typography fontWeight={"bolder"} variant="h6" p={1.5} color="white">
            Explore Our Academics Programs
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bolder" my="10px">
              Our Departments
            </Typography>
            <Box border="1px solid" borderRadius="10px">
              {programs.map((program, index) => (
                <>
                  <Box
                    sx={{
                      p: 1.5,
                      "&:hover": {
                        backgroundColor: `#9c27b0`,
                        color: "white",
                      },
                    }}
                  >
                    <Typography key={index} align="left">
                      {program}
                    </Typography>
                  </Box>
                  {index !== programs.length - 1 && <Divider color="black" />}
                </>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box align="center">
              <Typography variant="h5" fontWeight="bolder" color="secondary" my="10px">
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
        </Box>
        <Box>
          <Typography my variant="h6" fontWeight={"bolder"}>Why Choose Us?</Typography>
          <Typography my={3} textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae fugiat, tempora eos quasi enim animi nostrum autem expedita voluptatem dolor earum, voluptate adipisci corrupti mollitia perferendis nihil fuga dolore dolores ab voluptates temporibus non? Tenetur voluptatem eius impedit exercitationem error rem aspernatur deserunt ab dicta repudiandae, odio at minus animi iusto alias repellat nostrum placeat distinctio unde? Aspernatur impedit itaque beatae nihil at magni? Repellendus itaque quo nesciunt necessitatibus ipsum, quis in, voluptatibus nam quae nobis enim omnis repudiandae, impedit est perferendis molestiae iusto! Mollitia iusto, consectetur vero voluptatibus molestias excepturi voluptates non dolorem quis accusantium, perferendis tempore? Fugit hic quam laudantium officiis, et suscipit voluptate repudiandae aut iure asperiores dolores. Assumenda odio placeat veritatis explicabo consequuntur perspiciatis, illum nesciunt doloribus aliquam reiciendis. Eveniet, dolor quas quam excepturi a nostrum perspiciatis ad explicabo, necessitatibus eligendi culpa in fugiat unde labore repellendus deserunt facilis, beatae dolorum ut numquam suscipit ullam quos hic laborum. Amet hic inventore ipsum in, modi, necessitatibus error est perspiciatis eveniet laudantium ex aut aliquam ipsam minima nulla nemo! Inventore sit odio beatae minus sunt, consectetur alias recusandae magni ducimus in molestiae aut maiores quia repellat, nisi expedita provident reiciendis quas ipsum facere perspiciatis delectus et deleniti.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Academics;
