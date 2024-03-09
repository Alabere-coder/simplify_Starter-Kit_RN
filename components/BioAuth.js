import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import Button from "./Button";
import LottieView from "lottie-react-native";
import check from "../assets/check.json";

const BioAuth = () => {
  const [authenticationResult, setAuthenticationResult] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleFingerprintAuth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        setAuthenticationResult("Login successful");
      } else {
        setAuthenticationResult("Fingerprint failed");
      }
      setModalVisible(true);
    } catch (error) {
      setAuthenticationResult("Fingerprint authentication failed");
      setModalVisible(true);
    }
  };

  return (
    <View>
      <Text
        onPress={handleFingerprintAuth}
        style={{ color: "#669bbc", fontSize: 16, marginTop: 18 }}
      >
        Click to Login With Fingerprint
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {authenticationResult === "Login successful" ? (
              <>
                <LottieView
                  source={require("../assets/check2.json")}
                  autoPlay
                  style={{ width: 120, height: 120 }}
                />
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.resultText}>{authenticationResult}</Text>
              </>
            ) : (
              <>
                <LottieView
                  source={require("../assets/fail.json")}
                  autoPlay
                  style={{ width: 120, height: 120 }}
                />
                <Text style={styles.welcomeText}>Fail</Text>
                <Text style={styles.resultText}>{authenticationResult}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default BioAuth;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 15,
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  resultText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#669bbc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 32,
  },
});
