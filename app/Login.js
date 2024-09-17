import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import Icon from "../assets/icons";

const Login = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <Text>Login</Text>
      <Icon name={"home"} strokeWidth={2} color={"red"} />
      <Icon name={"arrowleft"} strokeWidth={2} color={"green"} />
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
