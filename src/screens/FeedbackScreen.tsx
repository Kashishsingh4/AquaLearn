import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

const waterFacts = [
    "Turning off the tap while brushing your teeth can save up to 8 gallons of water per day.",
    "Approximately 2.2 billion people lack access to safe drinking water.",
    "A 5-minute shower uses about 10-25 gallons of water.",
    "Recycling one ton of paper can save 7,000 gallons of water.",
    "About 1.8 billion people worldwide use a contaminated drinking water source.",
];

const FeedbackScreen: React.FC = ({ route, navigation }: any) => {
    const { score, total } = route.params;
    const [fact, setFact] = useState("");

    useEffect(() => {
        const randomFact = waterFacts[Math.floor(Math.random() * waterFacts.length)];
        setFact(randomFact);
    }, []);

    const getFeedbackMessage = () => {
        const percentage = (score / total) * 100;
        if (percentage >= 80) return "Excellent! You have great knowledge about water conservation.";
        if (percentage >= 50) return "Good job! Keep learning about water sustainability.";
        return "You can do better! Learn more about water conservation to improve.";
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerText}>Feedback & Facts</Text>
                <View style={styles.factBox}>
                    <Text style={styles.factTitle}>Did You Know?</Text>
                    <Text style={styles.factText}>{fact}</Text>
                </View>
                <View style={styles.feedbackBox}>
                    <Text style={styles.feedbackTitle}>Your Performance</Text>
                    <Text style={styles.feedbackText}>{getFeedbackMessage()}</Text>
                </View>
                <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={styles.buttonText}>Go Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#E3F2FD",
        alignItems: "center",
        justifyContent: "center"
    },
    content:
    {
        width: "90%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        elevation: 5
    },
    headerText:
    {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0047AB",
        marginBottom: 20
    },
    factBox:
    {
        padding: 15,
        backgroundColor: "#BBDEFB",
        borderRadius: 10,
        marginBottom: 15,
        width: "100%"
    },
    factTitle:
    {
        fontSize: 18,
        fontWeight: "bold",
        color: "#003366",
        marginBottom: 5
    },
    factText: {
        fontSize: 16,
        color: "#0047AB"
    },
    feedbackBox:
    {
        padding: 15,
        backgroundColor: "#C8E6C9",
        borderRadius: 10,
        width: "100%",
        marginBottom: 15
    },
    feedbackTitle:
    {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 5
    },
    feedbackText:
    {
        fontSize: 16,
        color: "#1B5E20"
    },
    homeButton:
    {
        backgroundColor: "#0047AB",
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        width: "80%",
        alignItems: "center"
    },
    buttonText:
    {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
});

export default FeedbackScreen;
