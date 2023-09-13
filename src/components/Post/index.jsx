import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button, ButtonGroup } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedoIcon from "@mui/icons-material/Redo";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Post = ({name,userName,postDate,content,commentsCount,likesCount,retweetsCount,statisticsCount}) => {
  return (
    <Card sx={{ display: "flex", padding: "20px 20px" }}>
      <Avatar alt="Remy Sharp" src="/assets/images/personalPhoto.jpeg" />
      <Box sx={{ display: "flex", flexDirection: "column" }} width={"100%"}>
        <CardContent sx={{ flex: "1 0 auto", paddingTop: "0px" }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            width={"100%"}>
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Typography component="div" variant="subtitle1">
                {name}
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                variant="caption">
                {userName} . {postDate}
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                variant="caption"></Typography>
            </Box>
            <MoreHorizIcon />
          </Box>
          <Typography variant="body2" color="text.primary" component="div">
            {content}
          </Typography>

          <ButtonGroup
            variant="string"
            aria-label="text button group"
            size="small"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}>
            <Button>
              <ChatBubbleOutlineIcon />
              {commentsCount}
            </Button>
            <Button>
              <RedoIcon />
              {likesCount}
            </Button>
            <Button>
              <FavoriteBorderIcon />
              {retweetsCount}
            </Button>
            <Button>
              <BarChartIcon />
              {statisticsCount}
            </Button>
            <Button>
              <FileUploadIcon />
            </Button>
          </ButtonGroup>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Post;
