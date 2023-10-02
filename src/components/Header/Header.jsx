import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { School } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Grid, colors } from "@mui/material";

const pages = [
  "Academics",
  "Admission",
  "Tuition&Scholarships",
  "Campus",
  "About",
];
const settings = ["Student", "Admin"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container sx={{display:{xs:'none', md:'contents'}}}>
            <Grid item xs={2} sx={{display:{xs:'none', md:'flex'}}}>
              {/* <Box zIndex={5} sx={{ display: "flex" }}> */}
                {/* <School sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
                <School/>
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                    // mr: 2,
                    // display: { xs: "none", md: "flex" },
                    // flexGrow: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  College_Name
                </Typography>
              {/* </Box> */}
            </Grid>
            <Grid item xs={8} sx={{display:{xs:'none', md:'flex'} ,justifyContent:'flex-end'}}>
              {/* <Box
                // position={"absolute"}
                width="10%"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "center" },
                }}
              > */}
              

                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{color: "white", }}
                    component={Link}
                    to={`/${page.toLowerCase().replace(/\s/g, "")}`}
                  >
                    {page}
                  </Button>
                ))}
                
              {/* </Box> */}
            </Grid>
            <Grid item xs={2} sx={{display:{xs:'none', md:'flex'}, justifyContent:"space-evenly"}}>
              {/* <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "right" },
                }}
              > */}
                {settings.map((setting) => (
                  <Button
                  
                    component={Link}
                    to={`/${setting.toLowerCase().replace(/\s/g, "")}`}
                    key={setting}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      fontSize: "11px",
                      color: "white",
                      // display: "block",
                    }}
                  >
                    {setting}
                  </Button>
                ))}
              {/* </Box> */}
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      component={Link}
                      sx={{textDecoration:'none', color:'secondary'}}
                      to={`/${page.toLowerCase().replace(/\s/g, "")}`}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
          <School sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            College_Name
          </Typography>

          {/* <Box sx={{ flexGrow: 0 }}>
             <Tooltip title="Open settings"> 
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> 
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
               </IconButton> 
             </Tooltip> 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                 </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
