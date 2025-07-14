import { Box, Button } from "@mui/material";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import Avatar from "@mui/material/Avatar";

export default function CreatePost() {
  return (
    <Box className="createPostContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "6px",
        }}
      >
        <Box className="profile_image">
          <Avatar alt="Remy Sharp" src="/friend1.jpg" />
        </Box>
        <Box
          sx={{
            width: "85%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            placeholder={"What's happening ... ?"}
            className="createPostInput"
            style={{
              flex: 1,
              padding: "20px",
              marginLeft: "5px",
              background: "black",
              border: "solid white 1px",
              color: "white",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginLeft: "5px",
            }}
          >
            <Box>
              <Button
                variant="outlined"
                startIcon={<VideoFileIcon />}
                sx={{
                  background: "black",
                  color: "white",
                  borderRadius: "25px",
                  textTransform: "none",
                  border: "solid white 1px",
                }}
              >
                {/* Photos/Videos */}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  background: "black",
                  color: "white",
                  borderRadius: "25px",
                  textTransform: "none",
                  border: "solid white 1px",
                  marginLeft: "5px",
                }}
                startIcon={<SentimentNeutralOutlinedIcon />}
              >
                {/* Feelings */}
              </Button>
            </Box>
            <Button
              variant="outlined"
              sx={{
                background: "black",
                color: "white",
                borderRadius: "25px",
                textTransform: "none",
                border: "solid white 1px",
              }}
              size="medium"
            >
              {" "}
              Post
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <hr className='divider' /> */}
    </Box>
  );
}
