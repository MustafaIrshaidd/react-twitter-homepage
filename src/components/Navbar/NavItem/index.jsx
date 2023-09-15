import React from "react";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const button = createTheme({
  typography: {
    button: {
      textTransform: "none",
      justifyContent: "start",
      alignItems: "center",
      fontSize: "1.3rem",
    },
  },
});

const NavItem = ({ icon, title }) => {
  const buttonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <ThemeProvider theme={button}>
      <Button variant="text" style={buttonStyle} color={"primary"}>
        <Icon
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            marginRight: "8px",
          }}>
          {icon}
        </Icon>
        {title}
      </Button>
    </ThemeProvider>
  );
};

export default NavItem;
