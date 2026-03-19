import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    loadCount();
  }, []);

  useEffect(() => {
    saveCount(count);
  }, [count]);

  const saveCount = async (value) => {
    try {
      await AsyncStorage.setItem('count', value.toString());
    } catch (e) {}
  };

  const loadCount = async () => {
    try {
      const value = await AsyncStorage.getItem('count');
      if (value !== null) {
        setCount(parseInt(value));
      }
    } catch (e) {}
  };

  const confirmReset = () => {
    Alert.alert(
      "Potvrzení",
      "Opravdu chceš resetovat?",
      [
        {
          text: "Ne",
          style: "cancel"
        },
        {
          text: "Ano",
          onPress: () => setCount(0)
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>KLIK</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={confirmReset}
      >
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 60,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});