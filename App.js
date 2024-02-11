import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import FormValidateScreen from "./screens/FormValidateScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome to Simplify" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Components Overview" }}
        />
        <Stack.Screen
          name="Form"
          component={FormValidateScreen}
          options={{ title: "Form Validation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
