import React, { useState } from "react";
import { 
    View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView 
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const CategorySelection = () => {
    const router = useRouter();
    const [input, setInput] = useState("");

    // Dummy categories (Change as needed)
    const categories = [
        "Technology", "Business", "Finance",
        "Health", "Education", "Sports",
        "Entertainment", "Travel", "Science",
        "Gaming", "Music", "Art",
        "Food", "Fashion", "Photography"
    ];

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={18} color="black" />
            </TouchableOpacity>

            {/* Welcome Text */}
            <Text style={styles.heading}>Welcome John</Text>
            <Text style={styles.subheading}>Follow 5 or more categories to get started</Text>
            {/* Category Buttons in a Grid */}
            <ScrollView contentContainerStyle={styles.gridContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.categoryButton}>
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* "Did not find your niche?" Text */}
            <Text style={styles.notFoundText}>Did not find your niche?</Text>
            <Text style={styles.categoryText}>Add your category</Text>
            {/* Input Field */}
            <TextInput 
                style={styles.input} 
                placeholder="Type your niche..." 
                value={input}
                onChangeText={setInput}
            />

            {/* Let's Start Button */}
            <TouchableOpacity style={styles.startButton} onPress={() => router.push("/LocationScreen")}>
                <Text style={styles.startText} >Let's Start</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10,
        backgroundColor: "#f0f0f0",
        padding: 5,
        borderRadius: 6,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 1, // Position below back button
        marginBottom: 10,
    },
    subheading: {
        textAlign: "center",
        fontSize: 7,
        marginBottom: 15,
        color: "#B0B0B0"
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    categoryButton: {
        width: "30%", // 3 buttons per row
        backgroundColor: "#F5F5F5", // Default background color
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    
    categoryButtonHover: {
        backgroundColor: "orange", // Hover effect color
    },
    buttonText: {
        color: "black",
        fontSize: 8,
        fontWeight: "bold",
    },
    notFoundText: {
        textAlign: "left",
        fontSize: 12,
        marginTop: 10,
        fontWeight: "bold",
    },
    categoryText:{
        color: "#B0B0B0",
        fontSize: 10,
        textAlign:"left"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 10,
        backgroundColor: "#F5F5F5",
    },
    startButton: {
        backgroundColor: "orange",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    startText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
    },
});

export default CategorySelection;