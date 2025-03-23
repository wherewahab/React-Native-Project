import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Header from "@/components/HeaderAiPosting";
import BottomBar from "@/components/BottomBar";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const AIPosting = () => {
  const [details, setDetails] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const router = useRouter();

  // Function to calculate dynamic font size based on screen height
  const getDynamicFontSize = (baseSize: number): number => {
    const scaleFactor = height / 800; // 800 is a reference screen height
    return moderateScale(baseSize * scaleFactor);
  };

  // Function to calculate dynamic padding/margin based on screen height
  const getDynamicSpacing = (baseSpacing: number): number => {
    const scaleFactor = height / 800; // 800 is a reference screen height
    return verticalScale(baseSpacing * scaleFactor);
  };

  return (
    <View style={styles.container}>
      <Header title="AIPosting" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer} // Ensure content fills the screen
        showsVerticalScrollIndicator={false}
      >
        {/* Add Details */}
        <Text style={[styles.label, { fontSize: getDynamicFontSize(12) }]}>Add Details</Text>
        <TextInput
          placeholder="Ad Title"
          value={details}
          onChangeText={setDetails}
          style={[styles.input, { color: "black", fontSize: getDynamicFontSize(12) }]}
          placeholderTextColor="gray"
        />

        {/* Description */}
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={[
            styles.input,
            styles.multilineInput,
            { color: "black", fontSize: getDynamicFontSize(12), height: getDynamicSpacing(120) },
          ]}
          placeholderTextColor="gray"
          multiline
        />

        {/* Two Buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.tagsContainer}>
            <TouchableOpacity style={styles.tagButton}>
              <Text style={[styles.tagText, { fontSize: getDynamicFontSize(10) }]}>Suggested Tag</Text>
              <MaterialIcons name="cancel" size={getDynamicFontSize(10)} color="#7A7A7A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tagButton}>
              <Text style={[styles.tagText, { fontSize: getDynamicFontSize(10) }]}>Suggested Tag</Text>
              <MaterialIcons name="cancel" size={getDynamicFontSize(10)} color="#7A7A7A" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Suggested Category */}
        <View style={styles.categoryContainer}>
          <Text style={[styles.categoryText, { fontSize: getDynamicFontSize(12) }]}>Suggested Category</Text>
          <FontAwesome5 name="edit" size={getDynamicFontSize(16)} color="#969CB1" />
        </View>

        {/* Location */}
        <TextInput
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
          style={[styles.input, { color: "black", fontSize: getDynamicFontSize(12) }]}
          placeholderTextColor="gray"
        />

        {/* Contact Number */}
        <TextInput
          placeholder="Enter contact number"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
          style={[styles.input, { color: "black", fontSize: getDynamicFontSize(12) }]}
          placeholderTextColor="gray"
        />

        {/* Slider */}
        <View style={styles.buttonContainer}>
          <Text style={[styles.sliderValueText, { fontSize: getDynamicFontSize(12) }]}>$5 - ${sliderValue}</Text>
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
              <Text style={[styles.generateButtonText, { fontSize: getDynamicFontSize(12) }]}>Generate Ad</Text>
              <Ionicons name="sparkles" size={getDynamicFontSize(16)} color="white" style={styles.aiIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1, // Ensure the ScrollView content fills the screen
    paddingHorizontal: moderateScale(16), // Add horizontal padding
    paddingTop: verticalScale(16), // Add top padding
    paddingBottom: verticalScale(80), // Add bottom padding to avoid overlap with BottomBar
  },
  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: verticalScale(16), // Scaled margin
  },
  aiIcon: {
    marginRight: moderateScale(4), // Scaled margin
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginBottom: verticalScale(8), // Scaled margin
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: moderateScale(12), // Scaled padding
    marginBottom: verticalScale(12), // Scaled margin
    borderRadius: moderateScale(8), // Scaled border radius
    borderColor: "#E9E9E9",
    backgroundColor: "#F5F5F5",
  },
  multilineInput: {
    height: verticalScale(120), // Scaled height
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap: moderateScale(8), // Scaled gap
  },
  tagButton: {
    flexDirection: "row",
    backgroundColor: "#5E81F41F",
    paddingVertical: verticalScale(8), // Scaled padding
    paddingHorizontal: moderateScale(12), // Scaled padding
    borderRadius: moderateScale(8), // Scaled border radius
    alignItems: "center",
  },
  tagText: {
    color: "#3E4958",
  },
  buttonContainer: {
    backgroundColor: "#F5F5F5",
    padding: moderateScale(12), // Scaled padding
    borderRadius: moderateScale(8), // Scaled border radius
    marginBottom: verticalScale(12), // Scaled margin
  },
  button: {
    padding: moderateScale(12), // Scaled padding
    backgroundColor: "#007bff",
    borderRadius: moderateScale(8), // Scaled border radius
    alignItems: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(12), // Scaled padding
    borderWidth: 1,
    borderRadius: moderateScale(8), // Scaled border radius
    marginBottom: verticalScale(12), // Scaled margin
    borderColor: "#ccc",
    backgroundColor: "#F5F5F5",
  },
  categoryText: {
    flex: 1,
  },
  slider: {
    width: "100%",
    height: verticalScale(40), // Scaled height
  },
  sliderValueText: {
    textAlign: "left",
    marginBottom: verticalScale(8), // Scaled margin
    color: "orange",
  },
  generateButton: {
    backgroundColor: "orange",
    padding: moderateScale(12), // Scaled padding
    borderRadius: moderateScale(8), // Scaled border radius
    width: "100%",
  },
  generateButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AIPosting;