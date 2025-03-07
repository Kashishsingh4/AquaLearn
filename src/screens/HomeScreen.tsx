import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Animated, 
  Easing 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const HomeScreen = ({ navigation }: any) => {
  const rotateAnim = useRef(new Animated.Value(0)).current; // Initial animation value

  const handlePress = () => {
    // Start rotation animation
    Animated.timing(rotateAnim, {
      toValue: 1, // Rotate fully before navigating
      duration: 600, // Animation duration in milliseconds
      easing: Easing.out(Easing.ease), // Smooth easing effect
      useNativeDriver: true, // Optimizes performance
    }).start(() => {
      navigation.navigate('QuesTypeScreen'); // Navigate after animation ends
    });
  };

  // Interpolating the rotation value
  const rotateStyle = {
    transform: [
      {
        rotateZ: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'], // Full rotation effect
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.container, rotateStyle]}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title1}>AquaLearn</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>WATER AND SANITATION</Text>

      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={handlePress} // Trigger animation on press
      >
        <AntDesign name="arrowright" size={30} color="white" />
      </TouchableOpacity>
    </Animated.View>
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
