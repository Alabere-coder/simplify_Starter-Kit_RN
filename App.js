import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/form/IntroScreen";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingScreen from "./screens/SettingScreen";
import { ContentStack } from "./Navigator/AppStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#669bbc",
          drawerInactiveTintColor: "#8d99ae",
          headerTitle: "",
          statusBarColor: "#13274F",
          headerStyle: {
            backgroundColor: "#bde0fe",
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
          name="setting"
          component={SettingScreen}
          options={{ title: "Settings" }}
        />
        <Drawer.Screen
          name="Content"
          component={ContentStack}
          options={{
            title: "Menu Items",
            headerShown: false,
            headerLeft: () => {
              <Pressable onPress={() => navigation.navigate("setting")}>
                <Ionicons
                  name="settings-outline"
                  size={30}
                  color="#ffd400"
                  style={{ marginRight: 15 }}
                />
              </Pressable>;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
