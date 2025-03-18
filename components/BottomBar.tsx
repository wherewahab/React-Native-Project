import React from "react";
import  { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AIAssistantModal from "./AIAssistantModal";
const BottomBar = () => {
   const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* Home Icon */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="home-outline" size={20} color="orange" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      {/* Add Listing Icon */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="add-circle-outline" size={20} color="black" />
        <Text style={styles.text}>Add Listing</Text>
      </TouchableOpacity>

      {/* Explore Icon */}
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name="compass-outline" size={20} color="black" />
        <Text style={styles.text}>Explore</Text>
      </TouchableOpacity>
      <AIAssistantModal visible={isModalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: "center",
  },
  text: {
    fontSize: 7,
    color: "black",
  },
});

export default BottomBar;
