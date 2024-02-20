import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Introduction")}
            >
              <Text style={styles.btn__txt}>Page Intro</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>1</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>Form Validation</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>2</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("OTP")}
            >
              <Text style={styles.btn__txt}>OTP</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>3</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Search")}
            >
              <Text style={styles.btn__txt}>Search Bar</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>4</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>Form Validation</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>5</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>Form Validation</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>6</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Tabpage")}
            >
              <Text style={styles.btn__txt}>Form Validation</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>7</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Tabpage")}
            >
              <Text style={styles.btn__txt}>Form Validation</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>8</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  card: {
    width: "45%",
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#2c2c6c",
    borderWidth: 2,
    margin: 4,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 4,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 2,
    // elevation: 3,
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
});
