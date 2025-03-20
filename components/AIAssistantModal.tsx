import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AIPosting from "@/app/Aiposting";
import { useRouter } from "expo-router";
const AIAssistantModal = ({ visible, onClose }) => {
  const router = useRouter();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      
    >
         <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        {/* Draggable line to close modal */}
        <TouchableOpacity style={styles.closeLine} onPress={onClose}>
        <View />
        </TouchableOpacity>
        
        {/* AI Assistant Section */}
        <View style={styles.aiContainer}>
        <View style={styles.aiHeader}>
          <Ionicons name="sparkles" size={24} color="white" style={styles.aiIcon} />
          <Text style={styles.aiText}>Create Post with AI Assistance</Text>
          </View>
          <Text style={styles.aiSubText}>Get smart suggestions and generate content effortlessly.</Text>
          <TouchableOpacity style={styles.getStartedButton} onPress={onClose}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        </View>

        {/* Get Started Button */}
        <View style={styles.voiceContainer}>
  {/* First Box */}
  <View style={styles.voiceBox}>
    <Ionicons name="mic" size={24} color="orange" style={styles.micIcon} />
    <Text style={styles.voiceTitle}>Post by Voice</Text>
    <Text style={styles.voiceSubText}>Record your message for quick recording</Text>
    <TouchableOpacity
  style={styles.recordButton}
  onPress={() => {
    onClose(); // Close modal first
    setTimeout(() => {
      router.push("/Aiposting"); // Navigate after modal closes
    }, 200); // Delay to allow modal to close smoothly
  }}
>
  <Text style={styles.recordButtonText}>Record</Text>
</TouchableOpacity>
  </View>

  {/* Second Box */}
  <View style={styles.voiceBox}>
    <Ionicons name="pencil" size={24} color="orange" style={styles.micIcon} />
    <Text style={styles.voiceTitle}>Write a post</Text>
    <Text style={styles.voiceSubText}>Manual add and type your post</Text>
    <TouchableOpacity
  style={styles.recordButton}
  onPress={() => {
    onClose(); // Close modal first
    setTimeout(() => {
      router.push("/Aiposting"); // Navigate after modal closes
    }, 200); // Delay to allow modal to close smoothly
  }}
>
  <Text style={styles.recordButtonText}>Create</Text>
</TouchableOpacity>
  </View>
</View>
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    modalContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 15,
        alignItems: "center",
        width: "100%",
        maxHeight: "75%", // Reduces overall height
        alignSelf: "center",
    },

    closeLine: {
        width: 40, // Slightly smaller
        height: 4,
        backgroundColor: "gray",
        borderRadius: 10,
        marginVertical: 8,
    },

    aiContainer: {
        backgroundColor: "orange",
        width: "90%",
        padding: 10, // Reduced padding
        borderRadius: 12,
    },

    aiHeader: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },

    aiIcon: {
        marginRight: 8,
        fontSize: 20, // Smaller icon
    },

    aiText: {
        fontSize: 10, // Reduced from 19
        color: "white",
        fontWeight: "bold",
    },

    aiSubText: {
        fontSize: 8, // Reduced from 14
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
    },

    getStartedButton: {
        marginTop: 15,
        backgroundColor: "white",
        paddingVertical: 5, // Slightly smaller button
        borderRadius: 8,
        alignSelf: "center",
        width: "90%", // Slightly smaller width
        justifyContent: "center",
        alignItems: "center",
    },

    getStartedText: {
        fontSize: 10, // Reduced from 16
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },

    voiceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10, // Reduced space
        gap: 8,
    },

    voiceBox: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 12, // Reduced padding
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        height: 200, // Reduced height from 200
    },

    micIcon: {
        alignSelf: "flex-start",
        fontSize: 20, // Reduced from 24
    },

    voiceTitle: {
        fontSize: 11, // Reduced from 16
        color: "black",
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 3,
    },

    voiceSubText: {
        fontSize: 9, // Reduced from 14
        color: "#B0B0B0",
        marginTop: 3,
        alignSelf: "flex-start",
    },

    recordButton: {
        backgroundColor: "orange",
        paddingVertical: 6, // Reduced size
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: "center",
        marginTop: "auto",
    },

    recordButtonText: {
        fontSize: 10, // Reduced from 14
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
});


export default AIAssistantModal;
