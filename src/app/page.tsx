import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1100px",
        marginRght: "auto",
        marginLeft: "auto",
        paddingTop: 2,
      }}
    >
      <Box>Hello 1</Box>
      <Box>Hello 2</Box>
      <Box>Hello 3</Box>
    </Box>
  );
}
