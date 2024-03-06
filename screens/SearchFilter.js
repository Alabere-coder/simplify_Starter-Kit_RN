import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  Animated,
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
  const [selectedUser, setSelectedUser] = useState(null);

  const animatedWidth = useState(new Animated.Value(200))[0];

  const handleFocus = () => {
    Animated.timing(animatedWidth, {
      toValue: 300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(animatedWidth, {
      toValue: 300,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=20");
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
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearch(query);
    const filtered = data.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(query.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleUserPress = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input__container}>
        <Animated.View style={{ width: animatedWidth }}>
          <Text style={styles.label}>Find User By Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Text to Search"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={search}
            onChangeText={(query) => handleSearch(query)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>
      </View>

      <View style={styles.container2}>
        <FlatList
          paddingHorizontal={20}
          data={filteredData}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleUserPress(item)}>
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
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={!!selectedUser}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <View style={styles.modalContent}>
              <Image
                source={{ uri: selectedUser.picture.thumbnail }}
                style={styles.modalImg}
              />
              <Text style={styles.modalName}>
                {selectedUser.name.first} {selectedUser.name.last}
              </Text>
              <Text style={styles.modalLocation}>
                {selectedUser.location.city}, {selectedUser.location.state} .
                {selectedUser.location.country}.
              </Text>
              <Text style={styles.modalEmail}>{selectedUser.email}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input__container: {
    flex: 1,
    backgroundColor: "#006494",
    padding: 20,
  },
  container2: {
    flex: 4,
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
    marginBottom: 10,
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
    flexDirection: "column",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalEmail: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalLocation: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2c2c6c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalImg: {
    height: 100,
    width: 100,
    borderRadius: 250,
  },
});
