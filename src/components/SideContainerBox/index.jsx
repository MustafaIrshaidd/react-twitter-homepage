import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import User from "../User";

const button = createTheme({
  typography: {
    button: {
      textTransform: "none",
      justifyContent: "start",
      alignItems: "center",
      fontSize: "0.9rem",
      padding: "0px",
    },
  },
});

const SideContainerBox = (type) => {
  return (
    <>
      <Box component="div" width={"90%"} margin={"auto"} padding={"10px"}>
        <Typography variant="h4" fontSize={"25px"}>
          Who To Follow
        </Typography>

        <Box component={"div"} width={"90%"} margin={"auto"}>
          <User
            name={"Mustafa Irshaid"}
            userName={"@mustafairshaidd"}
            bio={
              "We're a community of millions of people who are building new skills and getting new jobs together."
            }
            isVerfied={true}></User>
            <User
            name={"Mustafa Irshaid"}
            userName={"@mustafairshaidd"}
            bio={
              "We're a community of millions of people who are building new skills and getting new jobs together."
            }
            isVerfied={true}></User>
            <User
            name={"Mustafa Irshaid"}
            userName={"@mustafairshaidd"}
            bio={
              "We're a community of millions of people who are building new skills and getting new jobs together."
            }
            isVerfied={true}></User>
        </Box>

        <ThemeProvider theme={button}>
          <Button sx={{padding:"0px","&:hover":{backgroundColor:"#FFF"}}}>Show More</Button>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default SideContainerBox;
