import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg }) => {
  const { tap } = useSafeAreaInsets();
  const paddingTop = tap > 0 ? tap + 5 : 30;
  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>{children}</View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
