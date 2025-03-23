import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const HomeScreen = () => {
  const router = useRouter(); // For navigation

  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <Text style={[styles.welcomeText, { fontSize: moderateScale(15) }]}>
          Rorem ipsum dolor sit amet, consectetur.
        </Text>
        <Text style={{ fontSize: moderateScale(12) }}>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/Signup")}>
          <Text style={[styles.buttonText, { fontSize: moderateScale(14) }]}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange", // Full orange background
    justifyContent: "flex-end", // Push content to the bottom
    alignItems: "center",
    paddingBottom: verticalScale(50), // Scaled padding
  },
  bottomView: {
    backgroundColor: "white",
    width: "90%", // Relative width
    padding: moderateScale(20), // Scaled padding
    borderRadius: moderateScale(10), // Scaled border radius
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4), // Scaled shadow radius
    elevation: 5, // For Android shadow
    marginBottom: verticalScale(20), // Scaled margin
  },
  welcomeText: {
    fontWeight: "bold",
    color: "black",
    marginBottom: verticalScale(10), // Scaled margin
    textAlign: "center", // Center-align text
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: verticalScale(7), // Scaled padding
    paddingHorizontal: moderateScale(15), // Scaled padding
    borderRadius: moderateScale(10), // Scaled border radius
    marginTop: verticalScale(40), // Scaled margin
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;