import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { ThemeProvider, createTheme } from "@mui/material/styles";


const button = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontSize: "1.3rem",
    },
  },
});

const moreButton = createTheme({});
const Header = () => {
  return (
    <Box component={"header"} sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        component={"div"}
        sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <ArrowBackIcon />
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant={"h1"} fontSize={"16px"}>
            React
          </Typography>
          <Typography variant={"caption"}>2611 Posts</Typography>
        </Box>
      </Box>
      <Box component={"div"} position={"relative"}>
        <img
          alt="React Background"
          src="/assets/images/reactBackground.jpg"
          height={"199px"}
          width={"100%"}></img>
        <Avatar
          alt="React Avatar"
          src="/assets/images/reactAvatar.png"
          sx={{
            border: 1,
            position: "absolute",
            bottom: "-67px",
            left: "30px",
            borderColor: "white",
            borderWidth: "4px",
            width: "133px",
            height: "133px",
          }}
        />
        <Box
          component={"div"}
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "30px",
            display: "flex",
            gap: "10px",
          }}>
          <ThemeProvider theme={button}>
            <Button variant="outlined">
              <MoreHorizIcon />
            </Button>
            <Button variant="outlined">
              <NotificationAddOutlinedIcon />
            </Button>
            <Button variant="contained" size={"small"}>
              Follow
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
      <Stack direction={"column"} paddingLeft={"30px"} marginTop={"90px"} spacing={2}>
        <Stack direction={"column"}>
            <Typography variant="h3"  fontSize={"18px"}>React</Typography>
            <Typography variant="caption">@ReactJS</Typography>
        </Stack>

        <Typography variant="body2"  >The library for web and native user interfaces</Typography>

        <Stack direction={"column"}>
            <Box component={"div"}>
                
            </Box>
            <Typography variant="h3"  fontSize={"18px"}>React</Typography>
            <Typography variant="caption">@ReactJS</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
