import { Box, Typography } from "@mui/material";
import React from "react";

interface ILeftBarItemProps {
  title: string;
}
export default function LeftBarItem({ title }: ILeftBarItemProps) {
  return (
    <Box
      //   className={`sidebarItem ${selected && 'selected'}`}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "11px",
        cursor: "pointer",
      }}
      //   onClick={() => onClickItem(title)}
    >
      {/* <Icon className="sidebarItem_icon" /> */}
      {
        <Typography
          className="sidebarItem_text"
          variant="body1"
          marginLeft={"10px"}
          color={"white"}
        >
          {title}
        </Typography>
      }
    </Box>
  );
}
