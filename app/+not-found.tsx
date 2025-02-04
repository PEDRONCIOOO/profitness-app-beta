import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops! Página não encontrada 😢</Text>
      <TouchableOpacity onPress={() => router.replace("/")} style={styles.button}>
        <Text style={styles.buttonText}>Voltar para a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff6600",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
