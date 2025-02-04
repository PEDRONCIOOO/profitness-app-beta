import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff6600",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          backgroundColor: "#25292e",
          height: 70,
          borderTopWidth: 2,
          borderTopColor: "#ff6600",
          paddingBottom: 10,
        },
        headerStyle: {
          backgroundColor: "black",
          height: 40,
          borderBottomWidth: 1,
          borderBottomColor: "#ff6600",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person-circle" : "person-circle-outline"} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          title: "Personals",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "barbell-sharp" : "barbell-outline"} color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}
