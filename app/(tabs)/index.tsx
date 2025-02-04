import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ProFitness</Text>
      <Text style={styles.subtitle}>Olá, {user?.email}! Encontre os melhores Personais para você.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/personal")}>
        <Text style={styles.buttonText}>Explorar Personais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => router.push("/(tabs)/Profile")}>
        <Text style={styles.buttonOutlineText}>Ver Perfil</Text>
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
    padding: 20,
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
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6600",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: "#ff6600",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonOutlineText: {
    color: "#ff6600",
    fontWeight: "bold",
    fontSize: 16,
  },
});
