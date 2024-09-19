import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./Home";
import Arrow_left from "./Arrow_left";
import Call from "./Call";
import Camera from "./Camera";
import Comment from "./Comment";
import Delete from "./Delete";
import Edit from "./Edit";
import Heart from "./Heart";
import { theme } from "../../constants/theme";

const icons = {
  home: Home,
  arrowleft: Arrow_left,
  call: Call,
  camera: Camera,
  comment: Comment,
  delete: Delete,
  edit: Edit,
  heart: Heart,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({});
