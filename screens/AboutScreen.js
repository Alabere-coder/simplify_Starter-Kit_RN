import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import Card from "../components/Card";
import Ionicons from "@expo/vector-icons/Ionicons";

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/World_map.png")}
        style={styles.background}
        resizeMode="repeat"
      >
        <View
          style={{
            // backgroundColor: "rgba(255, 255, 255, 0.1)",
            alignItems: "center",
            paddingVertical: 20,
            gap: 8,
          }}
        >
          <Card
            title="Form-validation"
            content="This is a demo app"
            demo={<Ionicons name="link" size={32} color="#fec601" />}
            onPress={() => navigation.navigate("Form")}
            customStyle={{ backgroundColor: "#669bbc" }}
          />
          <Card
            title="OTP-Verification"
            content="This is a demo app"
            demo={<Ionicons name="link" size={32} color="#fec601" />}
            customStyle={{ backgroundColor: "#669bbc" }}
            onPress={() => navigation.navigate("OTP")}
          />
          <Card
            title="Search-Bar Filter"
            content="This is a demo app"
            demo={<Ionicons name="link" size={32} color="#fec601" />}
            customStyle={{ backgroundColor: "#669bbc" }}
            onPress={() => navigation.navigate("Search")}
          />
          <Card
            title="Animated Search-Bar"
            content="This is a demo app"
            demo={<Ionicons name="link" size={32} color="#fec601" />}
            customStyle={{ backgroundColor: "#669bbc" }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  background: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card__txt: {
    textAlign: "center",
    height: "45%",
    backgroundColor: "#2c2c6c",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: "white",
    paddingTop: 14,
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 8,
  },

  btn__txt: {
    backgroundColor: "#fff",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 18,
    color: "#2c2c6c",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  card: {
    backgroundColor: "#ea7317",
    borderRadius: 8,
    width: "90%",
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
