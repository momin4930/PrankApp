import React, { useState,useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { account, ID } from '../services/appwrite';

const prankOptions = [
  { title: 'Fake Call', icon: <Ionicons name="call" size={24} color="#FF4D4D" /> },
  { title: 'Fake Virus', icon: <FontAwesome5 name="bug" size={24} color="#5D5FEF" /> },
];

const Homescreen = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router=useRouter();

  useEffect(() => {
    
    const showUser=async()=>{
      const user = await account.get();
      console.log('Current user from Homescreen:', user);
    }

    showUser().catch(console.error)
    
  }, []);  



  const handleStartPrank = () => {
    if (selected === 'Fake Call') {
      router.push('/screens/Fakecallscreen');
    } else if (selected === 'Fake Virus') {
      router.push('/screens/Virusscreen');
    }
    
  };

  const handleLogout = async() => {
    await account.deleteSession('current');  
    router.push("/")  
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎉 PRANKSTER</Text>
      <Text style={styles.subtitle}>Let's Have Some Fun!</Text>

      <View style={styles.optionsContainer}>
        {prankOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionBox,
              index >= 2 && { borderColor: '#5D5FEF' },
              selected === option.title && styles.selectedOption,
            ]}
            onPress={() => setSelected(option.title)}
          >
            {option.icon}
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.startButton} onPress={handleStartPrank}>
        <Text style={styles.startButtonText}>▶ START PRANK</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={() => setSelected(null)}>
        <Text style={styles.resetText}>↻ Reset</Text>
      </TouchableOpacity>

      <View style={styles.instructionsBox}>
        <Text style={styles.instructionsTitle}>How to Prank</Text>
        <Text style={styles.instruction}>1️⃣ Choose your prank type</Text>
        <Text style={styles.instruction}>2️⃣ Hit START PRANK</Text>
        <Text style={styles.instruction}>3️⃣ Show to your friend!</Text>
        <Text style={styles.note}>For entertainment only! Keep it friendly!</Text>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity><Text style={styles.navIcon}><Ionicons name="layers-outline" size={25}/></Text><Text style={styles.navLabel}>Pranks</Text></TouchableOpacity>
        {/* <TouchableOpacity><Text style={styles.navIcon}><Ionicons name="refresh-circle-outline" size={25}/></Text><Text style={styles.navLabel}>History</Text></TouchableOpacity> */}
        <TouchableOpacity onPress={handleLogout} ><Text style={styles.navIcon} ><Ionicons name="log-out-outline" size={25} /></Text><Text style={styles.navLabel}>Logout</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    minHeight: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionBox: {
    width: '47%',
    borderWidth: 1.5,
    borderColor: '#FF4D4D',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#ffecec',
  },
  optionText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  startButton: {
    // backgroundColor: 'linear-gradient(90deg, #FF512F, #F09819)', // fallback color
     backgroundColor: '#ff6a00',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
  },
  resetText: {
    color: '#555',
    fontWeight: '600',
  },
  instructionsBox: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  instructionsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  instruction: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: '#888',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 135,
    // borderTopColor: '#ddd',
    // borderTopWidth: 1,
    marginTop: 30,
  },
  navIcon: {
    fontSize: 18,
    textAlign: 'center',
  },
  navLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
  },
});

export default Homescreen;
