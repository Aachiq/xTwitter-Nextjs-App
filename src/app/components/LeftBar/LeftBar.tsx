"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import LeftBarItem from "./LeftBarItem";
import Image from "next/image";
// import styles from "./leftBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

export default function LeftBar() {
  const [listItems, setListItems] = useState([
    { id: 1, title: "Home", icon: HomeIcon, selected: false },
    { id: 2, title: "Messages", icon: ExploreIcon, selected: false },
    { id: 3, title: "Lists", icon: MenuIcon, selected: false },
    {
      id: 3,
      title: "Notification",
      icon: NotificationsIcon,
      selected: false,
    },
  ]);

  // const [activeItem, setActiveItem] = useState("Home");

  const handleActiveItem = (title: string) => {
    setListItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        selected: item.title === title, // this line do true for one and false for all others
      }))
    );
  };

  return (
    <Box>
      <Image
        src={`/twitter_logo.png`}
        alt="xtwitter_logo"
        width={50}
        height={50}
        style={{
          padding: "10px",
          marginLeft: "7px",
        }}
      />

      {listItems.map((item) => (
        <LeftBarItem
          key={item.id}
          title={item.title}
          Icon={item.icon}
          selected={item.selected}
          onClickItem={handleActiveItem}
        />
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
