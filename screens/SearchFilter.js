import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
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

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=50");
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
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size={60} color="#006494" />
        </View>
      ) : (
        <>
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

          <View style={styles.container2}>
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.login.uuid}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleUserPress(item)}>
                  <SafeAreaView style={styles.item__container}>
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
                  </SafeAreaView>
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
            <SafeAreaView style={styles.modalContainer}>
              {selectedUser && (
                <View style={styles.modalContent}>
                  <View style={styles.user}>
                    <Image
                      source={{ uri: selectedUser.picture.thumbnail }}
                      style={styles.modalImg}
                    />
                    <Text style={styles.userName}>
                      {selectedUser.name.title}
                    </Text>
                  </View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.userInfo}>Full Name</Text>
                    <Text style={styles.modalName}>
                      {selectedUser.name.first} {selectedUser.name.last}
                    </Text>
                  </View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.userInfo}>Location</Text>
                    <Text style={styles.modalLocation}>
                      {selectedUser.location.state}.
                      {selectedUser.location.country}.
                    </Text>
                  </View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.userInfo}>Email</Text>
                    <Text style={styles.modalEmail}>{selectedUser.email}</Text>
                  </View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.userInfo}>Phone</Text>
                    <Text style={styles.modalEmail}>{selectedUser.phone}</Text>
                  </View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.userInfo}>Date of birth</Text>
                    <Text style={styles.modalEmail}>
                      {selectedUser.dob.date}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={closeModal}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              )}
            </SafeAreaView>
          </Modal>
        </>
      )}
    </SafeAreaView>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  user: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    gap: 10,
  },
  userInfo: {
    fontSize: 14,
    color: "#8d99ae",
  },
  background: {
    flex: 4,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input__container: {
    flex: 1,
    backgroundColor: "#669bbc",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  container2: {
    flex: 5,
    paddingHorizontal: 10,
  },
  spinner: {
    paddingTop: 260,
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 12,
  },
  input: {
    height: 60,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f8f8f8",
  },
  name: {
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#8d99ae",
  },
  item__container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 4,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 4,
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 30,
    justifyContent: "center",
  },
  modalName: {
    fontSize: 14,
    fontWeight: "400",
  },
  modalEmail: {
    fontSize: 14,
    fontWeight: "400",
  },
  modalLocation: {
    fontSize: 14,
    fontWeight: "400",
  },
  closeButton: {
    backgroundColor: "#bde0fe",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalImg: {
    height: 100,
    width: 100,
    borderRadius: 250,
  },
  userName: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
});
