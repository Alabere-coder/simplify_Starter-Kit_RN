import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import FormValidateScreen from "./screens/FormValidateScreen";
import IntroScreen from "./screens/form/IntroScreen";
import OTPInput from "./screens/OtpInput";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome to Simplify Dashboard" }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Components Overview" }}
        />
        <Drawer.Screen
          name="Form"
          component={FormValidateScreen}
          options={{ title: "Form Validation" }}
        />
        <Drawer.Screen
          name="Introduction"
          component={IntroScreen}
          options={{ title: "Overview" }}
        />
        {/* <Drawer.Screen
          name="Tabpage"
          component={FornScreen}
          options={{ title: "Tab Navigation" }}
        /> */}
        <Drawer.Screen
          name="OTP"
          component={OTPInput}
          options={{ title: "OTP Screen Display" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
