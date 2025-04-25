import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const VirusScreen = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0000aa" barStyle="light-content" />
      <Text style={styles.crashText}>⚠️ The system has crashed{dots}</Text>
      <Text style={styles.rebootText}>Trying to reboot{dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000aa', // Blue screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  crashText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  rebootText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default VirusScreen;
