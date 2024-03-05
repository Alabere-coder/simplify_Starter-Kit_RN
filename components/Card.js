import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ title, content, customStyle }) => {
  return (
    <View style={[styles.card, customStyle]}>
      <View style={styles.content__container}>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  // content__container: {
  //   height: 100,
  //   width: 100,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // content: {
  //   height: 140,
  //   width: 100,
  // },
});
