import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const QuesTypeScreen = ({ navigation }: any) => {
  const handleStartQuiz = (type: string) => {
    navigation.navigate('Quiz', { type });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bubbles}>
        <Svg height="100%" width="100%">
          <Circle cx="30" cy="50" r="15" fill="white" opacity="0.3" />
          <Circle cx="100" cy="150" r="10" fill="white" opacity="0.3" />
          <Circle cx="250" cy="80" r="8" fill="white" opacity="0.3" />
          <Circle cx="320" cy="200" r="12" fill="white" opacity="0.3" />
        </Svg>
      </View>

     
      <Text style={styles.title}>Choose a Question Type:</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={() => handleStartQuiz('general')}>
          <Text style={styles.startText}>General</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startButton} onPress={() => handleStartQuiz('scenario')}>
          <Text style={styles.startText}>Scenario-Based</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startButton} onPress={() => handleStartQuiz('trueFalse')}>
          <Text style={styles.startText}>True/False</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/ripple.png')} style={styles.waterImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6ECFF6',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  startButton: {
    backgroundColor: '#1D6F8B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10, 
    width: '100%',
    alignItems: 'center',
  },
  startText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bubbles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  waterImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '28%',
    resizeMode: 'cover',
  },
});

export default QuesTypeScreen;
