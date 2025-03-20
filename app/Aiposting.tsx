import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons"; 
import { FontAwesome5 } from '@expo/vector-icons';
import Header from "@/components/HeaderAiPosting";
const AIPosting = () => {
  const [details, setDetails] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
       <Header title="AIPosting" />
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={19} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>AIPosting</Text>
        </View>
      </View> */}
      

      {/* Add Details */}
      <Text style={styles.label}>Add Details</Text>
      <TextInput
        placeholder="Ad Title"
        value={details}
        onChangeText={setDetails}
        // style={styles.input}
        style={[styles.input, { color: "black" }]} // Ensure color is applied
        placeholderTextColor="gray"

      />

      {/* Description */}
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.multilineInput, { color: "black" }]}
        placeholderTextColor="gray"
        multiline
      />

      {/* Two Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.tagsContainer}>
          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.tagText}>Suggested Tag </Text>
            <MaterialIcons name="cancel" size={10} color="#7A7A7A" />

          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.tagText}>Suggested Tag </Text>
            <MaterialIcons name="cancel" size={10} color="#7A7A7A" />
          </TouchableOpacity>
        </View>
      </View>


      {/* Suggested Category */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Suggested Category</Text>
        <FontAwesome5 name="edit" size={24} color="#969CB1" />

      </View>

      {/* Location */}
      <TextInput
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
         style={[styles.input, { color: "black" }]} // Ensure color is applied
        placeholderTextColor="gray"
      />

      {/* Contact Number */}
      <TextInput
        placeholder="Enter contact number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
        style={[styles.input, { color: "black" }]} // Ensure color is applied
        placeholderTextColor="gray"
      />

      {/* Slider */}
      <View style={styles.buttonContainer}>
      <Text style={styles.sliderValueText}>$5 - ${sliderValue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={5}
        maximumValue={100}
        minimumTrackTintColor="orange"
        maximumTrackTintColor="#ccc"
        thumbTintColor="orange"
        step={1}
        value={sliderValue}
        onValueChange={setSliderValue}
      />
      
      </View>
      {/* Generate AI Button */}
      <View style={styles.aiHeader}>
  <TouchableOpacity style={[styles.button, styles.generateButton]}>
    <View style={styles.buttonContent}>
      <Text style={styles.generateButtonText}>Generate Ad</Text>
      <Ionicons name="sparkles" size={24} color="white" style={styles.aiIcon} />
    </View>
  </TouchableOpacity>
</View>
    </ScrollView>
        );
      };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
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
buttonContent: {
  flexDirection: "row",
  alignItems: "center", // Align text and icon in the same row
  justifyContent: "center", // Center content
},

  header: {

    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 10,
    zIndex: 10,
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: "#E9E9E9",
    backgroundColor: "#F5F5F5",
  },
  multilineInput: {
    height: 120,
  },
  tagsContainer: {
    flexDirection: "row", // Ensures buttons are in a row
    alignItems: "center", // Align items vertically
    justifyContent: "flex-start", // Aligns items to the left
    width: "100%", // Ensures it spans the full width
    gap: 6
  },
  tagButton: {
    flexDirection: "row",
    backgroundColor: "#5E81F41F",
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderRadius: 7,

  },
  tagText: {
    color: "#3E4958",
    marginLeft: 0,
    fontSize: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  button: {
    padding: 12,
    backgroundColor: "#007bff",
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: "#F5F5F5", // Background color for the field
    padding: 12,
    borderRadius: 8, // Optional: rounded corners
    marginBottom: 12, // Optional: spacing below
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: "#ccc",
    backgroundColor:"#F5F5F5"
  },
  categoryText: {
    flex: 1,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValueText: {
    textAlign: "left",
    marginBottom: 12,
    color:"orange"
  },
  generateButton: {
    backgroundColor: "orange",
  },
  generateButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AIPosting;
