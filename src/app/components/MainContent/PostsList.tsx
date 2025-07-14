"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
// import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { posts } from "@/data/data";

export default function PostsList() {
  const [postsList] = useState(posts);

  return (
    <Box marginTop={1}>
      {postsList &&
        postsList.map((item) => {
          return (
            <>
              <Box
                sx={{
                  marginTop: "17px",
                  padding: "8px",
                  margin: "4px",
                }}
              >
                <Box
                  className="post-header"
                  sx={{
                    display: "flex",
                  }}
                >
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                  <Image
                    alt="img_profile"
                    src={`/${item.user.img_profile}`}
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                    }}
                  />

                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography color="white">
                      <b>{item.user.name}</b>
                    </Typography>
                    <Typography color="grey">@{item.user.name}</Typography>
                  </Box>
                </Box>
                <Box className="post_body" marginTop={1}>
                  <Typography variant="body2" color="white">
                    {item.content}
                  </Typography>
                  <Image
                    alt="img_post"
                    src={`/${item.imagePost}`}
                    style={{
                      width: "90%",
                      height: "auto",
                      padding: "10px",
                    }}
                  />
                </Box>
                <Box
                  className="post_footer"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{ color: "white" }}
                    startIcon={<FavoriteIcon />}
                  >
                    {`Like (${item.likes.length})`}
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      marginLeft: "4px",
                      color: "white",
                    }}
                    startIcon={<ChatIcon />}
                  >
                    {`Comment (${item.likes.length})`}
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      marginLeft: "4px",
                      color: "white",
                    }}
                    startIcon={<ShareIcon />}
                  >
                    Share
                  </Button>
                </Box>
                <Box className="comments_section">
                  <Box
                    className="post_comment"
                    sx={{
                      display: "flex",
                      paddingY: "8px",
                    }}
                  >
                    <Image
                      alt="img_friend"
                      src="/friend1.jpg"
                      width={40}
                      height={40}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                    <TextField
                      id="input-with-sx"
                      variant="standard"
                      placeholder="your comment ..."
                      // fullWidth
                      sx={{
                        marginLeft: "5px",
                        background: "black",
                        border: "solid #3f3f3f 1px",
                        borderRadius: "5px",
                        padding: "3px",
                        height: "30px",
                        width: "82%",
                        // flex: 1
                        "& .MuiInputBase-input": {
                          color: "white", // Text color
                        },
                      }}
                    />
                  </Box>
                </Box>
                {item.comments &&
                  item.comments.map((item) => {
                    return (
                      <>
                        <Box className="comments_list">
                          <Box
                            className="comment_text"
                            sx={{
                              display: "flex",
                              paddingY: "8px",
                            }}
                          >
                            <Image
                              alt="img_user_friend"
                              src={`/${item.user.img_profile}`}
                              width={40}
                              height={40}
                              style={{
                                borderRadius: "50%",
                              }}
                            />
                            <Box sx={{ marginLeft: "5px" }}>
                              <Typography color={"white"}>
                                <b>{item.user.name}</b>
                              </Typography>
                              <Typography color={"white"} variant="body2">
                                {item.content}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </>
                    );
                  })}
              </Box>
            </>
          );
        })}
    </Box>
  );
}
