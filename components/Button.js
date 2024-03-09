import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, onPress, buttonStyle, textStyle, disabled, icon }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <Text style={[styles.text, textStyle]}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2E5090",
    padding: 12,
    borderRadius: 20,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
