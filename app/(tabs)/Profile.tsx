// app/(tabs)/Profile.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function Profile() {
  const { user, logout } = useAuth(); // ✅ Agora reconhece o logout
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/auth"); // ✅ Redireciona corretamente após logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>Bem-vindo, {user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#bbb",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6600",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
