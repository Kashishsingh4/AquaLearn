import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";





const ResultScreen: React.FC = ({ route, navigation }: any) => {



  /*

  Like in Quiz screen add here 

  useEffect(() => {
      getAIText();
    }, []);


  then create a state

  const [aiText, setaiText] = useState("Analyzing your results please wait....");
  
  
  now create an async function getAIText()

inside this call the api url ussing  fetch function 

and get the response 
and call setaiText(response.data)
and display below in the result screen
  {
  
}


*/


  const { score, total } = route.params;

  const handlePlayAgain = () => {
    navigation.navigate("QuesTypeScreen");
  };

  const handleGoHome = () => {
    navigation.navigate("HomeScreen");
  };


  const ActionButton = ({
    text,
    icon,
    onPress,
  }: {
    text: string;
    icon: any;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>MISSION DONE!!</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>YOUR SCORE</Text>
            <Text style={styles.scoreValue}>{score}/{total}</Text>
          </View>
          <ActionButton text="PLAY AGAIN" icon={require("../assets/playAgain.png")} onPress={handlePlayAgain} />
          <ActionButton text="GO HOME" icon={require("../assets/goHome.png")} onPress={handleGoHome} />
        </View>
        <TouchableOpacity style={styles.feedbackButton}>
          <Text style={styles.feedbackButtonText}
          onPress={
            () => {
              navigation.navigate('Feedback')
            }
          }
          >GET FEEDBACK</Text>
          
        </TouchableOpacity>
        <Image source={require('../assets/wave.png')} style={styles.waterImage} />
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  contentContainer: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0047AB",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
    width: 180,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0047AB",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginLeft: 10,
  },
  feedbackButton: {
    backgroundColor: "#0047AB",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    width: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  feedbackButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  waterImage: {
    position: 'absolute',
    bottom: 0,
    width: '110%',
    height: '22%',
    resizeMode: 'cover',
  },
});

export default ResultScreen;
