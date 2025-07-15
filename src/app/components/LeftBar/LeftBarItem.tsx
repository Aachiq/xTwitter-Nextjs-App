import { Box, Typography } from "@mui/material";
import React from "react";

interface ILeftBarItemProps {
  title: string;
  selected: boolean;
  Icon: React.ElementType;
  onClickItem: (title: string) => void;
}
export default function LeftBarItem({
  title,
  // selected,
  Icon,
  onClickItem,
}: ILeftBarItemProps) {
  return (
    <Box
      //   className={`sidebarItem ${selected && 'selected'}`}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "11px",
        cursor: "pointer",
        // backgroundColor: "white",
      }}
      onClick={() => onClickItem(title)}
    >
      <Icon sx={{ color: "white" }} />
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
