import { Text, View, StyleSheet } from "react-native";

export default function PersonalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profissionais</Text>
      <Text style={styles.description}>
        Encontre personal trainers disponíveis perto de você e inicie sua jornada fitness agora mesmo.
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
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#bbb",
    fontSize: 16,
    textAlign: "center",
  },
});
