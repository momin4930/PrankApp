import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

const FakeCallScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.activeCall}>● Active Call</Text>
      </View>

      <Image
         source={require('../assets/images/JC.png')}
        style={styles.avatar}
      />

      <Text style={styles.callLabel}>Incoming Call</Text>
      <Text style={styles.name}>John Cena</Text>
      <Text style={styles.number}>+1 (555) 123-4567</Text>
      <Text style={styles.type}>Mobile</Text>

      <Text style={styles.timer}>00:00</Text>
      <Text style={styles.calling}>Calling...</Text>

      <View style={styles.callOptions}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mic-off" size={24} color="#fff" />
          <Text style={styles.optionText}>Mute</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="grid" size={24} color="#fff" />
          <Text style={styles.optionText}>Keypad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="volume-high" size={24} color="#fff" />
          <Text style={styles.optionText}>Speaker</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.endCallButton}>
        <Ionicons name="call" size={28} color="#fff" />
        <Text style={styles.endCallText}>End Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  statusBar: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  activeCall: {
    color: '#2ecc71',
    fontSize: 14,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },
  callLabel: {
    color: '#aaa',
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  number: {
    color: '#bbb',
    fontSize: 16,
  },
  type: {
    color: '#888',
    fontSize: 14,
    marginBottom: 20,
  },
  timer: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 4,
  },
  calling: {
    color: '#888',
    fontSize: 14,
    marginBottom: 30,
  },
  callOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  iconButton: {
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    marginTop: 6,
  },
  endCallButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  endCallText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FakeCallScreen;
