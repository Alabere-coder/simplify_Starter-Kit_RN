import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import BioAuth from "../components/BioAuth";

const FormValidateScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const contentScale = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(contentScale, {
      toValue: 1, // Zoom in to full size
      duration: 500, // Animation duration
      easing: Easing.ease,
      useNativeDriver: true, // Add this line for better performance
    }).start();
  }, []);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = "Name is required.";
    } else if (name.length < 3) {
      errors.name = "Name Cannot be less than 4 characters";
      Vibration.vibrate();
    }

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
      Vibration.vibrate();
    }

    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      Vibration.vibrate();
    }

    // Validate password2 field
    if (!password2) {
      errors.password2 = "Password is required.";
    } else if (password2.length < 6) {
      errors.password2 = "Password must be at least 6 characters.";
    } else if (password2 !== password) {
      errors.password2 = "Passwords do not match";
      Vibration.vibrate(); // Vibrate the device
    }

    // Set the errors and update form validity
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      //When Form is valid
      console.log("Form submitted successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setErrors({});
    } else {
      //When  Form is invalid, display error messages
      console.log("Form has errors. Please correct them.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require("../assets/man.png")} style={styles.image} /> */}
      <Text style={styles.title}>
        <Text style={{ fontSize: 36, color: "#ffc300", fontWeight: "bold" }}>
          A
        </Text>
        ISS
      </Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email ? (
          <Text style={styles.error__message}>{errors.email}</Text>
        ) : null}
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              size={20}
              color="#669bbc"
              icon={showPassword ? faEye : faEyeSlash}
            />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={styles.error__message}>{errors.password}</Text>
        ) : null}
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.label}>Repeat-Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Repeat-Password"
            value={password2}
            onChangeText={setPassword2}
            secureTextEntry={!showPassword2}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePassword2Visibility}
          >
            <FontAwesomeIcon
              size={20}
              color="#669bbc"
              icon={showPassword2 ? faEye : faEyeSlash}
            />
          </TouchableOpacity>
        </View>
        {errors.password2 ? (
          <Text style={styles.error__message}>{errors.password2}</Text>
        ) : null}
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Button
          title="Login"
          buttonStyle={{
            backgroundColor: "#669bbc",
            color: "#ff7b00",
            width: "85%",
          }}
          onPress={handleSubmit}
        />
        <BioAuth />
      </View>
      <View style={styles.design}></View>
      <View style={styles.design2}></View>
    </View>
  );
};

export default FormValidateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    position: "relative",
  },
  input: {
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#edf2f4",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: "#edf2f4",
  },
  passwordInput: {
    height: 50,
  },
  eyeIcon: {
    color: "#2c2c6c",
  },
  error__message: {
    color: "red",
    fontSize: 13,
    marginBottom: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 15,
    color: "#669bbc",
  },
  label: {
    marginBottom: 6,
    fontSize: 15,
  },
  design: {
    height: 150,
    width: 150,
    backgroundColor: "#669bbc",
    borderRadius: 250,
    position: "absolute",
    left: -70,
    bottom: -70,
  },
  design2: {
    height: 150,
    width: 150,
    backgroundColor: "#669bbc",
    borderRadius: 250,
    position: "absolute",
    right: -60,
    top: -60,
  },
});
