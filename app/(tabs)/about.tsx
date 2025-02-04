import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre o Aplicativo</Text>
      <Text style={styles.description}>
        O ProFitness ajuda você a encontrar profissionais para transformar seu corpo com apenas alguns cliques!
      </Text>
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
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#bbb",
    fontSize: 16,
    textAlign: "center",
  },
});
