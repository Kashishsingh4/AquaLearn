import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function FeedBackScreen ({ route, navigation }: any) {
    
    const API_KEY = "AIzaSyAS63jNJ1Tr-jDQmd2OqUfs3m2DVgal69E";
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}` 

    

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const [question, setQuestion] = useState("Hello");
    const prompt = `${question} keep the response within 200 words`;
    
    
    useEffect(() => {
        console.log("FETCH API");
        setQuestion("Hello Bro")
        const s = model.generateContent(prompt).then((r) => {
            console.log(r.response.text());
            
        })
        console.log('fetch',s)
    }, [])
    
    
    

    const sendMessage = () => {

    }
    
    
    
    const [value, onChangeText] = useState('Useless Multiline Placeholder');
    const [bodyText, setBodyText] = useState("NO GEMINI 😭😭😭😭😭");
    return (
    <View style={styles.container}>
        <Button
            onPress={() => {
                setQuestion(value)
                 const s = model.generateContent(prompt).then((r) => {
                    setBodyText(r.response.text())
                 })
                 console.log(s)
            }}
            title="Ask"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
/>
        <TextInput
          editable
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
