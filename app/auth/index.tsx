import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useFonts, Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { useRouter } from "expo-router";

const PlaceholderImage = require("@/assets/images/profitness-logo-clear.png");

export default function Index() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={PlaceholderImage} style={styles.container} resizeMode="cover">
      {/* Camada de escurecimento para legibilidade */}
      <View style={styles.overlay} />

      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>PRO</Text>
        <Text style={styles.appTitle2}>FITNESS</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Transforme seu corpo</Text>
        <Text style={styles.subText}>
          Encontre profissionais específicos para o seu corpo com apenas alguns cliques.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/auth/Register")}>
        <Text style={styles.buttonText}>Comece Agora</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Já tem uma conta?{" "}
        <Text style={styles.signUpLink} onPress={() => router.push("/auth/Login")}>
          Entrar
        </Text>
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro para legibilidade
  },
  titleContainer: {
    flexDirection: "row",
    gap: 5,
    position: "absolute",
    top: 60,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#FFF",
  },
  appTitle2: {
    fontSize: 30,
    fontWeight: "900",
    color: "#ff6600",
  },
  textContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#FFF",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#BBB",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#ff6600",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  signUpText: {
    color: "#BBB",
    marginTop: 10,
    marginBottom: 50,
  },
  signUpLink: {
    color: "#ff6600",
    fontWeight: "bold",
  },
});
