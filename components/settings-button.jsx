import { Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SettingsIcon } from "./Icons";

const SettingsButton = () => {
  return (
    <Link asChild href={"/settings"}>
      <Pressable>
        <SettingsIcon />
      </Pressable>
    </Link>
  );
};

export default SettingsButton;
