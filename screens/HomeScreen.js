import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const theme = theme === "dark";

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Simplify</Text>
      <View style={styles.body}>
        <Text style={styles.body__text}>Your Ready made UIs</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.btn__txt}>Let's get Started</Text>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  body: {},
  body__text: {
    fontSize: 20,
  },
  logo: {
    fontSize: 45,
    fontWeight: "700",
    transform: [{ rotate: "-10deg" }],
    marginTop: -150,
    marginBottom: 50,
  },
  bottom: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    color: "red",
  },
  btn: {
    marginHorizontal: 20,
  },
  btn__txt: {
    backgroundColor: "#2c2c6c",
    textAlign: "center",
    paddingVertical: 15,
    color: "#fff",
    borderRadius: 20,
  },
});
