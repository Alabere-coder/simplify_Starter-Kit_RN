import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import FormValidateScreen from "./screens/FormValidateScreen";
import IntroScreen from "./screens/form/IntroScreen";
import OTPInput from "./screens/OtpInput";
import SearchFilter from "./screens/SearchFilter";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingScreen from "./screens/SettingScreen";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
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
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="Introduction"
          component={IntroScreen}
          options={{ title: "Overview" }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Components" }}
        />
        <Drawer.Screen
          name="Form"
          component={FormValidateScreen}
          options={{ title: "Form Validation" }}
        />

        <Drawer.Screen
          name="OTP"
          component={OTPInput}
          options={{ title: "OTP Screen Display" }}
        />
        <Drawer.Screen
          name="Search"
          component={SearchFilter}
          options={{ title: "Search Bar" }}
        />
        <Drawer.Screen
          name="setting"
          component={SettingScreen}
          options={{ title: "Settings" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
