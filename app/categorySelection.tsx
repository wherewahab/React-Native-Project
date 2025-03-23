import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const CategorySelection = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  // Dummy categories (Change as needed)
  const categories = [
    "Technology",
    "Business",
    "Finance",
    "Health",
    "Education",
    "Sports",
    "Entertainment",
    "Travel",
    "Science",
    "Gaming",
    "Music",
    "Art",
    "Food",
    "Fashion",
    "Photography",
  ];

  // Function to calculate dynamic font size based on screen height
  const getDynamicFontSize = (baseSize) => {
    const scaleFactor = height / 800; // 800 is a reference screen height
    return moderateScale(baseSize * scaleFactor);
  };

  // Function to calculate dynamic padding/margin based on screen height
  const getDynamicSpacing = (baseSpacing) => {
    const scaleFactor = height / 800; // 800 is a reference screen height
    return verticalScale(baseSpacing * scaleFactor);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons
          name="arrow-back"
          size={getDynamicFontSize(20)}
          color="black"
        />
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={[styles.heading, { fontSize: getDynamicFontSize(18) }]}>
        Welcome John
      </Text>
      <Text style={[styles.subheading, { fontSize: getDynamicFontSize(12) }]}>
        Follow 5 or more categories to get started
      </Text>

      {/* Category Buttons in a Grid */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={[styles.buttonText, { fontSize: getDynamicFontSize(12) }]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* "Did not find your niche?" Text */}
      <Text style={[styles.notFoundText, { fontSize: getDynamicFontSize(14) }]}>
        Did not find your niche?
      </Text>
      <Text style={[styles.categoryText, { fontSize: getDynamicFontSize(12) }]}>
        Add your category
      </Text>

      {/* Input Field */}
      <TextInput
        style={[
          styles.input,
          { fontSize: getDynamicFontSize(14), marginTop: getDynamicSpacing(10) },
        ]}
        placeholder="Type your niche..."
        value={input}
        onChangeText={setInput}
      />

      {/* Let's Start Button */}
      <TouchableOpacity
        style={[
          styles.startButton,
          { marginTop: getDynamicSpacing(20) },
        ]}
        onPress={() => router.push("/LocationScreen")}
      >
        <Text style={[styles.startText, { fontSize: getDynamicFontSize(14) }]}>
          Let's Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(60),
  },
  backButton: {
    position: "absolute",
    top: verticalScale(40),
    left: moderateScale(20),
    zIndex: 10,
    backgroundColor: "#f0f0f0",
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(1),
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  subheading: {
    textAlign: "center",
    marginBottom: verticalScale(20),
    color: "#B0B0B0",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: verticalScale(20),
  },
  categoryButton: {
    width: width * 0.3 - 10, // 3 buttons per row with spacing
    backgroundColor: "#F5F5F5",
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  notFoundText: {
    textAlign: "left",
    marginTop: verticalScale(20),
    fontWeight: "bold",
  },
  categoryText: {
    color: "#B0B0B0",
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(8),
    backgroundColor: "#F5F5F5",
  },
  startButton: {
    backgroundColor: "orange",
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  startText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CategorySelection;