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
        statusBarAnimation: "slide",
        gestureEnabled: true,
        headerTitle: "",
        headerBackTitle: "Back",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#669bbc",
        statusBarStyle: "light",
        animation: "slide_from_right",
        headerTitleStyle: {
          fontSize: 20,
        },
      })}
    >
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          title: "Components",
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={25} color="#669bbc" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Form"
        component={FormValidateScreen}
        options={{
          title: "Form Validation",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPInput}
        options={{ title: "OTP Screen Display" }}
      />
      <Stack.Screen
        name="Search"
        component={SearchFilter}
        options={{
          //   headerBackTitle: "User Filter",
          title: "Search Bar",
        }}
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
