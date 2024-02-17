import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
const data = [
  { id: 1, key: "Building The Form" },
  { id: 2, key: "Styling the Form" },
  { id: 3, key: "Handling the form" },
  { id: 4, key: "Validating the form" },
  { id: 5, key: "Adding animation" },
  //   {key: 'John'},
];

const IntroScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.page__intro}>
        In this lesson we will be building this.
      </Text>
      <Image source={require("../../assets/projet.jpg")} style={styles.image} />
      <Text style={styles.list__intro}>And we will be working on</Text>

      <View style={styles.list__container}>
        {data.map((item) => (
          <Text key={item.id} style={styles.item}>
            {item.key}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  page__intro: {
    fontSize: 18,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  image: {
    height: 450,
    width: 300,
    alignSelf: "center",
  },
  list__container: {
    paddingTop: 22,
    textDecorationStyle: "dotted",
    marginBottom: 40,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 30,
    fontSize: 18,
    // height: 40,
    textDecorationLine: "underline",
    textDecorationColor: "red",
    textDecorationStyle: "dotted",
  },
  list__intro: {
    fontSize: 22,
    padding: 10,
  },
});
