import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const Index = () => {
const router=useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤪 Welcome to Prankster! 🤪</Text>
      <Text style={styles.subtitle}>Ready to prank your friends?</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>router.push("/screens/Login" as any)}
      >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B6B', // Vibrant purple
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#f0f0f0',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffeb3b', // Neon yellow
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, // Android shadow
  },
  buttonText: {
    color: '#6e3bff', // Matches background
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;