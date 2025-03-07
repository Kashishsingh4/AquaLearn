import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { quizData } from '../data/quizData';

const QuizScreen = ({ navigation }: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedAnswer(null);
      }
      else {
        navigation.navigate('Result', {
          score: score + (answer === currentQuestion.correctAnswer ? 1 : 0),
          total: quizData.length
        });
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
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
      ))}

      <Text style={styles.progress}>
        Question {currentQuestionIndex + 1} of {quizData.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  correct: {
    backgroundColor: 'green',
  },
  wrong: {
    backgroundColor: 'red',
  },
  progress: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QuizScreen;
