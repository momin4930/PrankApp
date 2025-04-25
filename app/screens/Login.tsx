import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,Alert } from 'react-native';
import { account, ID } from '../services/appwrite';



const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
          const session = await account.createEmailPasswordSession(email, password);
          console.log('Login success:', session);
         router.push("/screens/Homescreen")


        } catch (err: any) {
          console.error('Login error:', err);
          Alert.alert('Login Failed', err.message || 'Invalid credentials');
        }
      };
      

    return (
        <View style={styles.container}>
            {/* <Image source={require('../assets/prank-logo.png')} style={styles.logo} /> */}

            <Text style={styles.title}>Welcome to PRANKSTER 🎭</Text>
            <Text style={styles.subtitle}>Log in to start the fun!</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#aaa"
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/screens/SignUp')}>
                    <Text style={styles.signupLink}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>For entertainment only. Keep it lighthearted! 😄</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        color: '#333',
        backgroundColor: '#f9f9f9',
    },
    loginButton: {
        backgroundColor: '#ff6a00',
        paddingVertical: 15,
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: 30,
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    signupText: {
        color: '#555',
    },
    signupLink: {
        color: '#ff6a00',
        fontWeight: 'bold',
    },

});

export default Login;
