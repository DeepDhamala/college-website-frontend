import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Done, Facebook, Instagram, LinkedIn, School, YouTube } from "@mui/icons-material";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#9c27b0" }} minHeight="300px">
      <Container maxWidth="lg">
        <Box py="50px">
          <Divider color="white" />
          <Grid container spacing={0}>
            <Grid item xs="6" md="3">
              <Typography
                fontWeight="bolder"
                color="white"
                mt="20px"
                fontSize="20px"
              >
                Academics
              </Typography>
              <List>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid item xs="6" md="3">
              <Typography
                fontWeight="bolder"
                color="white"
                mt="20px"
                fontSize="20px"
              >
                Academics
              </Typography>
              <List>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid item xs="6" md="3">
              <Typography
                fontWeight="bolder"
                color="white"
                mt="20px"
                fontSize="20px"
              >
                Academics
              </Typography>
              <List>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="white" variant="subtitle2">
                    Abcdefgh
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid item xs="6" md="3">
              <Box
                my="10px"
                height="50px"
                bgcolor="white"
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Done
                  color="secondary"
                  style={{ fontSize: "30px", opacity: "0.5" }}
                />
                <Typography ml="10px"
                  fontWeight={"bolder"}
                  fontSize="20px"
                  color="secondary"
                >
                  Apply{" "}
                </Typography>
                <Typography
                  ml={"4px"}
                  fontWeight={"bolder"}
                  fontSize="20px"
                  color="black"
                >
                  {" "}
                  Now
                </Typography>
              </Box>
              <Box
                my="10px"
                height="50px"
                bgcolor="white"
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Done
                  color="secondary"
                  style={{ fontSize: "30px", opacity: "0.5" }}
                />
                <Typography ml="10px"
                  fontWeight={"bolder"}
                  fontSize="20px"
                  color="secondary"
                >
                  Visit{" "}
                </Typography>
                <Typography
                  ml={"4px"}
                  fontWeight={"bolder"}
                  fontSize="20px"
                  color="black"
                >
                  {" "}
                  C_N
                </Typography>
              </Box>
              <Box
                my="10px"
                height="50px"
                bgcolor="white"
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Done
                  color="secondary"
                  style={{ fontSize: "30px", opacity: "0.5" }}
                />
                <Typography ml="10px"
                  fontWeight={"bolder"}
                  fontSize="20px"
                  color="secondary"
                >
                  Contribute{" "}
                </Typography>
                <Typography
                  ml={"4px"}
                  fontWeight={"bolder"}
                  fontSize="20px"
                  color="black"
                >
                  {" "}
                  to C_N
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider color="white" sx={{mt:"20px", mb:'30px'}}/>
          <Grid container>
            <Grid item xs={6} display={"flex"} alignItems="center">
                <School style={{fontSize:'100px', color:"white"}}/><Typography fontSize={"20px"} color="white" fontWeight="bolder">
                    
                    The University of C_N
                    <br/><Typography>

                    &copy;The University of C_N
                    <br/>
                    address, address, address, 124
                    <br/>
                    the known title
                    </Typography>

                    </Typography> 
                   
            </Grid>
            <Grid item xs={6} >
                <Typography color="white" mb>
                Follow Us At

                </Typography>
                <Box width="50%" display="flex" justifyContent={"space-between"}>

                <Instagram px="20px" style={{fontSize:'29px', color:"white"}}/>
                <YouTube style={{fontSize:'29px', color:"white"}}/>
                <Facebook style={{fontSize:'29px', color:"white"}}/>
                <LinkedIn style={{fontSize:'29px', color:"white"}}/>
                </Box>
                <Typography color="white" my="20px">
                    The University of C_N 2023
                </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
