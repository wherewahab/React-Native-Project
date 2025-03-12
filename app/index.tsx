import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter(); // For navigation

  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <Text style={styles.welcomeText}>Rorem ipsum dolor sit amet, consectetur.</Text>
        <Text>Jorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/Signup")}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange", // Full orange background
    justifyContent: "flex-end", // Push content to the bottom
    alignItems: "center",
    paddingBottom: 50,
  },
  bottomView: {
    backgroundColor: "white",
    width: "90%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});