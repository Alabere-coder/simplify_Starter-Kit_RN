import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/AboutScreen";
import FormValidateScreen from "../screens/FormValidateScreen";
import OTPInput from "../screens/OtpInput";
import SearchFilter from "../screens/SearchFilter";
import SettingScreen from "../screens/SettingScreen";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

export const ContentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("setting")}>
            <Ionicons
              name="settings-outline"
              size={30}
              color="#fff"
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),

        statusBarColor: "#13274F",
        headerStyle: {
          backgroundColor: "#669bbc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 25,
        },
      })}
    >
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "Components" }}
      />
      <Stack.Screen
        name="Form"
        component={FormValidateScreen}
        options={{ title: "Form Validation" }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPInput}
        options={{ title: "OTP Screen Display" }}
      />
      <Stack.Screen
        name="Search"
        component={SearchFilter}
        options={{ title: "Search Bar" }}
      />
      <Stack.Screen
        name="setting"
        component={SettingScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <ContentStack />
    </NavigationContainer>
  );
};

export default AppStack;
