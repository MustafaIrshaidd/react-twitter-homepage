import React from "react";
import NavItem from "./NavItem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const Navbar = () => {
  return (
    <>
      <NavItem  icon={<HomeOutlinedIcon/>} title={"Home"}/>
    </>
  );
};

export default Navbar;
