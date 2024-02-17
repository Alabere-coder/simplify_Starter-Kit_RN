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
        backgroundColor: "#1f1f38",
      }}
    >
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
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
              <Text style={styles.btn__txt}>1</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>2</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("OTP")}
            >
              <Text style={styles.btn__txt}>3</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>OTP</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>4</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>5</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Form")}
            >
              <Text style={styles.btn__txt}>6</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Tabpage")}
            >
              <Text style={styles.btn__txt}>7</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => navigation.navigate("Tabpage")}
            >
              <Text style={styles.btn__txt}>8</Text>
            </TouchableHighlight>
            <Text style={styles.card__txt}>Form Validation</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
      {/* </ImageBackground> */}
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
    fontSize: 15,
    fontWeight: "700",
  },
  card: {
    width: "45%",
    height: 140,
    backgroundColor: "#4db5ff",
    borderRadius: 12,
    borderColor: "#4db5ff",
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
    backgroundColor: "#4db5ff",
    fontSize: 28,
    textAlign: "center",
    paddingVertical: 18,
    color: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
