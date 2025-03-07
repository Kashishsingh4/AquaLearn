import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ route, navigation }: any) => {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed! 🎉</Text>
      <Text style={styles.score}>
        Your Score: {score} / {total}
      </Text>
      <Button title="Play Again" onPress={() => navigation.navigate('QuesTypeScreen')} />
      <Button title="Go Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

const styles = StyleSheet.create
  ({
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title:
    {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
    },
    score:
    {
      fontSize: 20,
      marginBottom: 20
    },
  });

export default ResultScreen;
