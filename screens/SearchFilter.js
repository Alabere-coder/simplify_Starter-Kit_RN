import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Image } from "react-native";

const SearchFilter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const json = await response.json();
      const sortedData = json.results.sort((a, b) => {
        const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
        const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      setData(sortedData);
      setFilteredData(sortedData);
      setLoading(false);

      //   console.log(json.results);
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearch(query);
    // console.log(query);

    const filtered = data.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(query.toLowerCase());
    });
    setFilteredData(filtered);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={60} color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Data Could not be fetched...</Text>
        <Text>Please try again or check internet connection</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input__container}>
        <Text style={styles.label}>Find User By Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Text to Search"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(query) => handleSearch(query)}
        />
      </View>

      <FlatList
        paddingHorizontal={20}
        data={filteredData}
        // keyExtractor={(item) => item.login.username}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <View style={styles.item__container}>
            <Image
              source={{ uri: item.picture.thumbnail }}
              style={styles.img}
            />
            <View style={styles.info}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input__container: {
    backgroundColor: "#2c2c6c",
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 12,
  },
  input: {
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
  },
  item__container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingLeft: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 250,
  },
  info: {
    flexDirection: "col",
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "grey",
  },
});
