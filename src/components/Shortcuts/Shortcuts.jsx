import React from "react";
import EachShortcut from "./EachShortcut";
import { AccountBalance, Book, Map, MenuBook, PinDrop, Work } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import ColAnimation from "../../animations/ColAnimation";

const Shortcuts = () => {
  return (
    
    <Box my="60px" px="20px" width="100%" display="flex" justifyContent={"space-between"} sx={{
      flexDirection:{xs:'column', md:'row'}
    }}>
      <Box mr="20px">
        <ColAnimation from="bottom"
          logo={<PinDrop style={{ fontSize: "100px", }} />}
          title={"Maps"}
        />
      </Box>
      <Divider orientation="vertical" flexItem light/>
      <Box mr="20px">
        <ColAnimation from="bottom"
          logo={<MenuBook style={{ fontSize: "100px" }} />}
          title={"Library"}
        />
      </Box>
      <Divider orientation="vertical" flexItem light/>
      <Box mr="20px">
        <ColAnimation from="bottom"
          logo={<AccountBalance style={{ fontSize: "100px" }} />}
          title={"Campus"}
        />
      </Box>
      <Divider orientation="vertical" flexItem light/>
      <Box mr="20px">
        <ColAnimation from="bottom"
          logo={<Work style={{ fontSize: "100px" }} />}
          title={"C_N Jobs"}
        />
      </Box>
      
      
    </Box>
  );
};

export default Shortcuts;
