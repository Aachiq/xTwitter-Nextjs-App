"use client";
import { Box } from "@mui/material";
import React from "react";
import LeftBarItem from "../LeftBar/LeftBarItem";
// import styles from "./rightBar.module.css";

export default function RightBar() {
  // const [activeItem, setActiveItem] = useState("Home");

  // const handleActiveItem = (title: string) => {
  //   setActiveItem(title);
  // };

  const listItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "Messages" },
    { id: 3, title: "Lists" },
    { id: 3, title: "Profile" },
  ];
  return (
    // <Box className={styles.rightbar}>
    <Box>
      {/* <img
        src="twitter_logo.png"
        alt="xtwitter_logo"
        width={25}
        height={25}
        style={{
          padding: "10px",
          marginLeft: "7px",
          // background: ' green'
        }}
      /> */}

      {listItems.map((item) => (
        <LeftBarItem key={item.id} title={item.title} />
      ))}
      {/* <LeftBarItem
        Icon={HomeIcon}
        title="Home"
        selected={activeItem === "Home"}
        onClickItem={handleActiveItem}
      />
      <LeftBarItem
        Icon={ExploreIcon}
        title="Explore"
        selected={activeItem === "Explore"}
        onClickItem={handleActiveItem}
      />
      */}
    </Box>
  );
}
