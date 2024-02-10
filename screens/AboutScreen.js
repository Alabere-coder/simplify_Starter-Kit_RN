import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
      <Text>This is the main page</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
