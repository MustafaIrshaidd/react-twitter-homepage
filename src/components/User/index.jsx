import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const button = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const User = ({ name, userName, bio, isVerfied }) => {
  return (
    <Card sx={{ display: "flex", padding: "20px 20px" }}>
      <Avatar alt="Remy Sharp" src="/assets/images/personalPhoto.jpeg" />
      <Box sx={{ display: "flex", flexDirection: "column" }} width={"100%"}>
        <CardContent sx={{ flex: "1 0 auto", paddingTop: "0px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            width={"100%"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                <Typography component="div" variant="subtitle1">
                  {name}
                </Typography>
                {isVerfied && (
                  <CheckCircleIcon fontSize="small" color="primary" />
                )}
              </Box>
              <Typography
                component="div"
                color="text.secondary"
                variant="caption">
                {userName}
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                variant="caption"></Typography>
            </Box>
            <ThemeProvider theme={button}>
              <Button
                variant="contained"
                sx={{
                  maxHeight: "40px",
                  minWidth: "70px",
                  borderRadius: "30px",
                }}>
                Follow
              </Button>
            </ThemeProvider>
          </Box>
          <Typography variant="body2" color="text.primary" component="div">
            {bio}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default User;
