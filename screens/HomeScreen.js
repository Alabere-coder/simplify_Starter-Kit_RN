import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import React, { useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  const theme = theme === "dark";

  const bounceValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(bounceValue, {
          toValue: 8,
          friction: 2,
          useNativeDriver: true,
        }),
        Animated.spring(bounceValue, {
          toValue: -2,
          friction: 4,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topTitle}>Welcome to:</Text>
        {/* <Animated.Text
          style={[
            styles.logo,
            {
              transform: [
                {
                  translateY: bounceValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                  }),
                },
              ],
            },
          ]}
        >
          Simplify
        </Animated.Text> */}
        <Text style={styles.logo}>Simplify</Text>
        <View style={styles.card}>
          <Text style={styles.title}>What we do:</Text>
          <View style={styles.content__container}>
            <Text style={styles.content}>
              We provide you with finished ui components to kickStart your
              Project.
            </Text>
          </View>
          <Text style={styles.more}>Explore</Text>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/World_map.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.bottom}>
          <Image source={require("../assets/imgo.png")} style={styles.image} />
          <Button
            title="Let's get Started"
            buttonStyle={{
              backgroundColor: "#669bbc",
              position: "absolute",
              bottom: 0,
              color: "#ffc300",
              width: "98%",
            }}
            onPress={() => navigation.navigate("About")}
            icon={
              <Ionicons name="checkmark-circle" size={32} color="#ff7b00" />
            }
          />
        </View>
      </ImageBackground>
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
    fontSize: 40,
    marginHorizontal: "auto",
    color: "#343a40",
    marginLeft: -80,
    lineHeight: 60,
  },
  logo: {
    fontSize: 55,
    fontWeight: "900",
    color: "#ffd400",
    lineHeight: 60,
    letterSpacing: 2,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 4, height: 8 },
    textShadowRadius: 5,
  },
  top: {
    flex: 1,
    backgroundColor: "#bde0fe",
    alignItems: "center",
    zIndex: 1000,
  },
  bottom: {
    flex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  background: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "84%",
    height: 160,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    elevation: 7,
    position: "absolute",
    top: 140,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 12,
  },
  content__container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 16,
    color: "#6c757d",
  },
  more: {
    marginTop: 24,
    textAlign: "right",
    color: "#ff7b00",
    fontSize: 18,
    fontWeight: "bold",
  },
});
