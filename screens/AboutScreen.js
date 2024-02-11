import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import React from "react";

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20, gap: 8 }}>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.btn__txt}>Form Validation</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    marginHorizontal: 10,
  },
  btn__txt: {
    backgroundColor: "black",
    textAlign: "center",
    paddingVertical: 15,
    color: "#fff",
    borderRadius: 10,
  },
});
