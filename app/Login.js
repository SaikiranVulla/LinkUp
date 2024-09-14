import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Home from "../assets/icons/Home";
import { theme } from "../constants/theme";

const Login = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <Text>Login</Text>
      <Home color={theme.colors.rose} strokeWidth={2} />
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
