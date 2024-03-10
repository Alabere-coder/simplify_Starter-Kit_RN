import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import LottieView from "lottie-react-native";

const OTPInput = ({ length = 4 }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const otpTextInput = useRef([]);
  const [isValid, setIsValid] = useState(false);
  const [resendStatus, setResendStatus] = useState("Resend");
  const [resendTimer, setResendTimer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setIsValid(otp.every((digit) => digit !== ""));
  }, [otp]);

  useEffect(() => {
    setIsValid(otp.every((digit) => digit !== ""));
  }, [otp]);

  const handleOnChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < length - 1) {
      otpTextInput.current[index + 1].focus();
    }

    if (index === length - 1 && value) {
    }
  };

  const handleOnKeyPress = (index, key) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      otpTextInput.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    setModalVisible(true);
    setOTP(new Array(length).fill(""));
    if (otpTextInput.current[0]) {
      otpTextInput.current[0].focus();
    }
  };

  const handleResend = () => {
    setResendStatus("Resending...");
    setResendTimer(60);
  };

  useEffect(() => {
    if (resendTimer !== null && resendTimer > 0) {
      const intervalId = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (resendTimer === 0) {
      setResendStatus("Resend");
    }
  }, [resendTimer]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.top}>
        <LottieView
          source={require("../assets/lock2.json")}
          autoPlay
          style={{ width: 170, height: 170, borderRadius: 100 }}
        />
        <Text style={styles.title}>Account Verification</Text>
        <Text style={styles.info}>
          Enter the 4-digit code sent to{" "}
          <Text style={styles.info__emp}>aiss@gmail.com</Text>
        </Text>
      </View>
      <View style={styles.otp__container}>
        {Array(length)
          .fill()
          .map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              autoFocus={index === 0}
              keyboardType="number-pad"
              maxLength={1}
              value={otp[index]}
              onChangeText={(value) => handleOnChange(index, value)}
              onKeyPress={({ nativeEvent: { key } }) =>
                handleOnKeyPress(index, key)
              }
              ref={(ref) => (otpTextInput.current[index] = ref)}
              accessibilityLabel={`Digit ${index + 1}`}
              accessibilityRole="keyboardkey"
              accessibilityHint="Enter a digit"
              secureTextEntry={true}
            />
          ))}
      </View>
      <View style={styles.code}>
        <Text>Didn't Receive Code</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>
            {resendTimer !== null && resendTimer > 0
              ? `Resend in ${resendTimer} seconds`
              : resendStatus}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        disabled={!isValid}
        style={[
          styles.verifyButton,
          { backgroundColor: isValid ? "#669bbc" : "#adb5bd" },
        ]}
      >
        <Text style={styles.txtButton}>Verify OTP</Text>
      </TouchableOpacity>

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
            <LottieView
              source={require("../assets/check2.json")}
              autoPlay
              style={{ width: 120, height: 120 }}
            />
            <Text style={styles.welcomeText}>Code Verified</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  top: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  code: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#669bbc",
    padding: 15,
  },
  info: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },
  info__emp: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  otp__container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 8,
  },
  input: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#adb5bd",
    textAlign: "center",
    fontSize: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  verifyButton: {
    height: 55,
    backgroundColor: "blue",
    color: "white",
    marginTop: 20,
    justifyContent: "center",
    borderRadius: 20,
  },
  txtButton: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  resendText: {
    color: "blue",
    textDecorationLine: "underline",
  },
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

export default OTPInput;
