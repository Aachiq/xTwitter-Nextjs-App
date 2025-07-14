import { Box } from "@mui/material";
import Main from "./components/MainContent/Main";
// import LeftBar from "./components/LeftBar/LeftBar";
// import RightBar from "./components/RightBar/RightBar";
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
      <Box
        sx={{
          flex: "0.2",
        }}
      >
        Hello 1{/* <LeftBar /> */}
      </Box>
      <Box
        sx={{
          flex: 0.7,
          padding: "4px",
        }}
      >
        <Main />
      </Box>
      <Box
        sx={{
          flex: "0.3",
        }}
      >
        Hello 3{/* <RightBar /> */}
      </Box>
    </Box>
  );
}
