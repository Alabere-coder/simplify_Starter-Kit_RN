import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FormValidateScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = "Name is required.";
    } else if (name.length < 4) {
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
      errors.password = "Passwords do not match";
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
      <View style={styles.elevation}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {errors.name ? (
          <Text style={styles.error__message}>{errors.name}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email ? (
          <Text style={styles.error__message}>{errors.email}</Text>
        ) : null}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableHighlight
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </TouchableHighlight>
        </View>
        {errors.password ? (
          <Text style={styles.error__message}>{errors.password}</Text>
        ) : null}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Repeat-Password"
            value={password2}
            onChangeText={setPassword2}
            secureTextEntry={!showPassword2}
          />
          <TouchableHighlight
            style={styles.eyeIcon}
            onPress={togglePassword2Visibility}
          >
            <FontAwesomeIcon icon={showPassword2 ? faEye : faEyeSlash} />
          </TouchableHighlight>
        </View>
        {errors.password2 ? (
          <Text style={styles.error__message}>{errors.password2}</Text>
        ) : null}
        <TouchableHighlight
          style={[styles.button, styles.btn3]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default FormValidateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 20,
    marginBottom: 12,
  },
  error__message: {
    color: "red",
    fontSize: 13,
    marginBottom: 8,
  },
  elevation: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    paddingTop: 20,
  },
});
