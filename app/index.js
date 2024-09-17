import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const index = () => {
  useEffect(() => {
    sampleCalling();
  }, []);

  const sampleCalling = () => {
    console.log("sampleCalling");
  };

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
