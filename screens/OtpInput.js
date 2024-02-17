import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const OTPInput = ({ length = 4, onComplete }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const otpTextInput = useRef([]);
  const [isValid, setIsValid] = useState(false);

  const [resendStatus, setResendStatus] = useState("Resend");
  const [resendTimer, setResendTimer] = useState(null);

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

    // Move to the next input field
    if (value && index < length - 1) {
      otpTextInput.current[index + 1].focus();
    }

    // When the last input field is filled, call onComplete callback
    if (index === length - 1 && value) {
      //   onComplete(newOTP.join(""));
    }
  };

  const handleOnKeyPress = (index, key) => {
    // Move to the previous input field on backspace if current field is empty
    if (key === "Backspace" && !otp[index] && index > 0) {
      otpTextInput.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    onComplete(otp.join(""));
  };

  const handleResend = () => {
    // Logic to resend OTP goes here
    setResendStatus("Resending...");
    setResendTimer(60); // Set timer for 60 seconds
  };

  useEffect(() => {
    // Start countdown when resendTimer is set
    if (resendTimer !== null && resendTimer > 0) {
      const intervalId = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Clear interval when timer reaches 0
      return () => clearInterval(intervalId);
    } else if (resendTimer === 0) {
      setResendStatus("Resend");
    }
  }, [resendTimer]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.top}>
        <View style={styles.icon__bg2}>
          <View style={styles.icon__bg}>
            <Ionicons name="lock-open" size={110} color="indigo" />
          </View>
        </View>
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
          { backgroundColor: isValid ? "blue" : "grey" },
        ]}
      >
        <Text style={styles.txtButton}>Verify OTP</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  top: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon__bg: {
    width: 190,
    height: 190,
    backgroundColor: "deepskyblue",
    borderRadius: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  icon__bg2: {
    width: 220,
    height: 220,
    borderWidth: 8,
    borderColor: "deepskyblue",
    borderRadius: 250,
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
    color: "indigo",
    padding: 10,
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
    marginVertical: 20,
    gap: 8,
  },
  input: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
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
});

export default OTPInput;
