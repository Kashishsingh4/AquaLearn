import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const QuizScreen = ({ route, navigation }: any) => {
  const { type } = route.params;
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:5000/questions?type=${type}`);
      // for shagnik
      //const response = await fetch(`http://192.168.96.242:5000/questions?type=${type}`);
      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text>Loading Questions...</Text>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No questions available.</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        navigation.navigate('Result', {
          score: score + (answer === currentQuestion.correctAnswer ? 1 : 0),
          total: questions.length,
        });
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bubbles1}>
        <Svg height="100%" width="100%">
          <Circle cx="30" cy="50" r="15" fill="white" opacity="0.5" />
          <Circle cx="100" cy="150" r="10" fill="white" opacity="0.5" />
          <Circle cx="250" cy="80" r="8" fill="white" opacity="0.5" />
          <Circle cx="320" cy="200" r="12" fill="white" opacity="0.5" />
        </Svg>
      </View>

      <Text style={styles.question}>{currentQuestion.question}</Text>


      {currentQuestion.options.map((option: string, index: number) => (
        <View key={index} style={styles.optionContainer}>
          <View style={styles.optionNumber}>
            <Text style={styles.optionNumberText}>{index + 1}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedAnswer === option
                ? option === currentQuestion.correctAnswer
                  ? styles.correct
                  : styles.wrong
                : null,
            ]}
            onPress={() => handleAnswer(option)}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.progress}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <View style={styles.bubbles2}>
        <Svg height="100%" width="100%">
          <Circle cx="50" cy="80" r="15" fill="white" opacity="0.5" />
          <Circle cx="150" cy="50" r="10" fill="white" opacity="0.5" />
          <Circle cx="250" cy="90" r="8" fill="white" opacity="0.5" />
          <Circle cx="350" cy="60" r="12" fill="white" opacity="0.5" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#B3E5FC',
  },
  roundText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006064',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'monospace',
  },
  question: {
    fontSize: 19,
    fontWeight: 'bold',
    color: "black",
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 5,
  },
  optionNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006064',
  },
  optionButton: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006064',
    fontFamily: 'monospace',
  },
  correct: {
    backgroundColor: 'lightgreen',
  },
  wrong: {
    backgroundColor: 'red',
  },
  progress: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  bubbles1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '25%',
  },
  bubbles2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20%',
  },

});

export default QuizScreen;
