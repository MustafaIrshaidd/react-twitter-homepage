import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import Post from "./Post";
import SideContainerBox from "../../SideContainerBox";

const buttons = [
  <Button
    key="posts"
    sx={{
      border: 0,
      "&:hover": {
        backgroundColor: "#fafafa",
        border: 0,
      },
    }}>
    Posts
  </Button>,
  <Button
    key="replies"
    sx={{
      border: 0,
      "&:hover": {
        backgroundColor: "#fafafa",
        border: 0,
      },
    }}>
    Replies
  </Button>,
  <Button
    key="media"
    sx={{
      border: 0,
      "&:hover": {
        backgroundColor: "#fafafa",
        border: 0,
      },
    }}>
    Media
  </Button>,
  <Button
    key="likes"
    sx={{
      border: 0,
      "&:hover": {
        backgroundColor: "#fafafa",
        border: 0,
      },
    }}>
    Likes
  </Button>,
];
const SectionsNavigator = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}>
        <ButtonGroup
          fullWidth="true"
          aria-label="medium button group"
          sx={{ borderBottom: 1 }}>
          {buttons}
        </ButtonGroup>
        <Post
          name={"danabramov.bsky.social"}
          userName={"@dan_abramov"}
          postDate={"29 May"}
          content={"Happy 10th birthday to @ReactJS !"}
          commentsCount={"64"}
          likesCount={"3"}
          retweetsCount={"401"}
          statisticsCount={"1147"}/>
          <SideContainerBox/>
      </Box>
    </>
  );
};

export default SectionsNavigator;
