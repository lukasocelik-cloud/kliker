import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  Alert,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  // potvrzení resetu
  const confirmReset = () => {
    Alert.alert(
      "Reset skóre",
      "Opravdu chceš vynulovat skóre?",
      [
        { text: "Ne", style: "cancel" },
        { text: "Ano", onPress: () => setCount(0) }
      ]
    );
  };

  // potvrzení zavření
  const confirmExit = () => {
    Alert.alert(
      "Ukončit aplikaci",
      "Opravdu chceš aplikaci zavřít?",
      [
        { text: "Ne", style: "cancel" },
        { text: "Ano", onPress: () => BackHandler.exitApp() }
      ]
    );
  };

  return (
    <View style={styles.container}>

      {/* ❌ zavření */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={confirmExit}
      >
        <Text style={styles.closeText}>✖</Text>
      </TouchableOpacity>

      <Text style={styles.score}>{count}</Text>

      {/* klik */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>KLIK!</Text>
      </TouchableOpacity>

      {/* reset */}
      <TouchableOpacity
        style={styles.resetButton}
        onPress={confirmReset}
      >
        <Text style={styles.resetText}>RESET</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },

  closeText: {
    fontSize: 30,
    color: "black",
  },

  score: {
    fontSize: 60,
    color: "black",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 24,
    color: "white",
  },

  resetButton: {
    marginTop: 20,
    backgroundColor: "#ff4444",
    padding: 15,
    borderRadius: 10,
  },

  resetText: {
    color: "white",
    fontSize: 18,
  },
});
