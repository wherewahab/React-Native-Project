import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={19} color="black" />
      </TouchableOpacity>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
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
    });
  
  export default Header;