import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ title, content, customStyle, onPress, demo }) => {
  return (
    <TouchableOpacity style={[styles.card, customStyle]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.demo}>{demo}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: "94%",
    height: 150,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    color: "#fff",
    fontSize: 16,
  },
  demo: {
    color: "#fec601",
    fontSize: 19,
    textAlign: "right",
  },
});
