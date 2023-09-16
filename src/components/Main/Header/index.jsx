import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const button = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontSize: "1.3rem",
    },
  },
});

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
      <Stack
        direction={"column"}
        paddingLeft={"30px"}
        marginTop={"90px"}
        spacing={2}>
        <Stack direction={"column"}>
          <Typography variant="h3" fontSize={"18px"}>
            React
          </Typography>
          <Typography variant="caption">@ReactJS</Typography>
        </Stack>

        <Typography variant="body2">
          The library for web and native user interfaces
        </Typography>

        <Stack direction={"column"} gap={"7px"} justifyContent={"start"}>
          <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
            <Link
              href="#"
              target="_blank"
              underline="hover"
              display={"flex"}
              fontSize={"14px"}
              alignItems={"center"}>
              <AttachFileOutlinedIcon
                sx={{ height: "20px", width: "20px", color: "#000000" }}
              />
              react.div
            </Link>
            <Link
              href="#"
              target="_blank"
              underline="hover"
              display={"flex"}
              alignItems={"center"}
              fontSize={"14px"}
              color="black">
              <CalendarMonthOutlinedIcon
                sx={{ height: "20px", width: "20px" }}
              />
              Joined July 2013
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
            <Link
              href="#"
              target="_blank"
              underline="hover"
              display={"flex"}
              alignItems={"center"}
              fontSize={"14px"}
              color="black">
              276 Following
            </Link>
            <Link
              href="#"
              target="_blank"
              underline="hover"
              display={"flex"}
              fontSize={"14px"}
              alignItems={"center"}
              color="black">
              761.1K Followers
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 15 },
              }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <Link
              href="#"
              target="_blank"
              underline="hover"
              fontSize={"14px"}
              color="black">
              Followed by Amr Salman and Mosh
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
