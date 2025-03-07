import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title1}>AquaLearn</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>WATER AND SANITATION</Text>

      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={() => navigation.navigate('QuesTypeScreen')}
      >
        <AntDesign name="arrowright" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#006400',
  },
  title1: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#006400',
  },
  logo: {
    width: "40%",
    height: "30%",
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    color: '#006400',
    fontWeight: "bold",
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#34B1ED',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen;
