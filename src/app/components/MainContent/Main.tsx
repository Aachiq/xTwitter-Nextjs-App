import React from "react";
import { Box } from "@mui/material";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";

export default function Main() {
  return (
    <Box>
      <CreatePost />
      <PostsList />
    </Box>
  );
}
