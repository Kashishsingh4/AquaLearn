import { View, Text, StyleSheet,ScrollView, TextInput, Button } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function FeedBackScreen ({ route, navigation }: any) {
    
    const API_KEY = "AIzaSyAS63jNJ1Tr-jDQmd2OqUfs3m2DVgal69E";
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}` 

    

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const [question, setQuestion] = useState("Hello");
    const prompt = `${question} keep the response within 200 words`;
    
    
    // useEffect(() => {
    //     console.log("FETCH API");
    //     setQuestion("Hello Bro")
    //     const s = model.generateContent(prompt).then((r) => {
    //         console.log(r.response.text());
            
    //     })
    //     console.log('fetch',s)
    // }, [])
    
    
    

    const sendMessage = () => {

    }
    
    
    
    const [value, onChangeText] = useState('');
    const [bodyText, setBodyText] = useState("Type something to ask the chatbot");
    return (
        <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>

   
    <ScrollView style={styles.container}>
        
        <TextInput
          editable
          placeholder='Type something'
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
        <Text style={styles.baseText}>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
        <Button
            onPress={() => {
                console.log('question is',(value + "keep the response within 200 words"));
                
                setQuestion(value + "keep the response within 200 words")
                 const s = model.generateContent(question).then((r) => {
                    setBodyText(r.response.text())
                 })
                 console.log(s)
            }}
            title="Ask"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
/>
    </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
      },
  container: {
    
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },

  baseText: {
    fontSize: 23
  }
});
