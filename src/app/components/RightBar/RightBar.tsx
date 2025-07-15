import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const followingPages = [
  {
    id: 1,
    title: "Google",
    description: "Innovation tech",
    imgSrc: "/google.jpg",
  },
  {
    id: 2,
    title: "OpenAI",
    description: "AI-powered future",
    imgSrc: "/openAI.png",
  },
  {
    id: 4,
    title: "Microsoft Team",
    description: "Collaborate efficiently",
    imgSrc: "/microsoft.jpg",
  },
  {
    id: 3,
    title: "React Community",
    description: "grow together",
    imgSrc: "/react.jpeg",
  },
];

export default function RightBar() {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        padding: "10px",
        height: "fit-content",
      }}
    >
      <Typography variant="h5" color="white" fontWeight={500}>
        You might like
      </Typography>

      <Box marginTop={2}>
        {followingPages.map((page) => (
          <Box
            key={page.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              // borderBottom: "1px solid #bdc1c2",
              paddingY: "10px",
              "&:last-child": { borderBottom: "none" },
            }}
          >
            {/* First Column - Image */}
            <Box>
              <Image
                src={page.imgSrc}
                width={50}
                height={50}
                style={{
                  borderRadius: "10px",
                }}
                alt={page.title}
              />
            </Box>

            {/* Second Column - Title, Description, Button */}
            <Box flex={1} marginLeft="10px">
              <Typography variant="body2" fontWeight={600} color="white">
                {page.title}
              </Typography>
              <Typography variant="body2" color="grey">
                {page.description}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                marginTop: "5px",
                textTransform: "none",
                color: "white",
                border: "solid white 1px",
                borderRadius: "15px",
              }}
            >
              Follow
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
