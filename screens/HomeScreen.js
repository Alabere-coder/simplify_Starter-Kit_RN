import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React, { useEffect } from "react";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  const theme = theme === "dark";

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topTitle}>Welcome to:</Text>
        <Text style={styles.logo}>Simplify</Text>
        <View style={styles.card}>
          <Text style={styles.title}>What we do:</Text>
          <View style={styles.content__container}>
            <Text style={styles.content}>
              We provide you with finished ui components to kickStart your
              Project.
            </Text>
          </View>
          <Text style={styles.more}>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={32}
              color="#ff7b00"
            />
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Image source={require("../assets/team.png")} style={styles.image} />
        <Button
          title="Let's get Started"
          buttonStyle={{
            backgroundColor: "#669bbc",
            position: "absolute",
            bottom: 4,
            color: "#ff7b00",
            width: "100%",
          }}
          onPress={() => navigation.navigate("Content")}
          icon={<Ionicons name="arrow-forward" size={32} color="#ff7b00" />}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  body: {},
  topTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: "auto",
    color: "#343a40",
    margin: "auto",
    lineHeight: 60,
  },
  logo: {
    fontSize: 55,
    fontWeight: "900",
    color: "#fec601",
    lineHeight: 60,
  },
  top: {
    flex: 1,
    backgroundColor: "#bde0fe",
    zIndex: 1,
    paddingHorizontal: 20,
  },
  bottom: {
    flex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 340,
    height: 320,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%",
    height: 160,
    paddingVertical: 15,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    position: "absolute",
    top: 140,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 12,
  },
  content__container: {},
  content: {
    fontSize: 16,
    color: "#6c757d",
  },
  more: {
    marginTop: 18,
    textAlign: "right",
    color: "#ff7b00",
    fontSize: 18,
    fontWeight: "bold",
  },
});
