import React from "react";
import NavItem from "./NavItem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Box, Button } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <NavItem  icon={<HomeOutlinedIcon/>} title={"Home"}/>
      <NavItem  icon={<HomeOutlinedIcon/>} title={"Home"}/>
      <NavItem  icon={<HomeOutlinedIcon/>} title={"Home"}/>
      <NavItem  icon={<HomeOutlinedIcon/>} title={"Home"}/>
      <NavItem  icon={<HomeOutlinedIcon/>} title={"Home"}/>
      <Box width={"100%"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
          <Button variant={"contained"} sx={{borderRadius:"20px",padding:"7px 0px",width:"90%",marginTop:"20px"}}>Post</Button>
      </Box>
      
    </>
  );
};

export default Navbar;
