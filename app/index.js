import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const index = () => {
  const navigation = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="Welcome" onPress={() => navigation.push("welcome")} />
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({});
