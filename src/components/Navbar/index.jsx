import React from "react";
import NavItem from "./NavItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import User from "../User";
const Navbar = () => {
  return (
    <>
      <Box
        component={"nav"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
        minHeight={"100vh"}
        maxHeight={"100vh"}>
        <Box>
          <NavItem icon={<TwitterIcon />} />
          <NavItem icon={<HomeOutlinedIcon />} title={"Home"} />
          <NavItem icon={<HomeOutlinedIcon />} title={"Home"} />
          <NavItem icon={<HomeOutlinedIcon />} title={"Home"} />
          <NavItem icon={<HomeOutlinedIcon />} title={"Home"} />
          <NavItem icon={<HomeOutlinedIcon />} title={"Home"} />
          <Box
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}>
            <Button
              variant={"contained"}
              sx={{
                borderRadius: "20px",
                padding: "7px 0px",
                width: "90%",
                marginTop: "20px",
              }}>
              Post
            </Button>
          </Box>
        </Box>

        <User
          name={"Mustafa Irshaid"}
          userName={"@mustafairshaidd"}
          isVerfied={true}
          isProfile={true}></User>
      </Box>
    </>
  );
};

export default Navbar;
