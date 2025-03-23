import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Header from "@/components/HeaderAiPosting";
import BottomBar from "@/components/BottomBar";
import { useRouter } from "expo-router";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const PreviewPage = () => {
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
            {/* Header */}
            <Header title="Ai Posting" />

            {/* Preview Text */}
            <Text style={[styles.previewText, { fontSize: getDynamicFontSize(16) }]}>Preview</Text>

            {/* Main Content Section with Light Gray Background */}
            <View style={[styles.contentBox, { padding: getDynamicSpacing(16) }]}>
                {/* Title & Edit Icon */}
                <View style={styles.titleRow}>
                    <Text style={[styles.title, { fontSize: getDynamicFontSize(15) }]}>Luxury Car</Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="edit" size={getDynamicFontSize(19)} color="#969CB1" />
                    </TouchableOpacity>
                </View>

                {/* Amount & Button */}
                <View style={styles.amountRow}>
                    <Text style={[styles.amount, { fontSize: getDynamicFontSize(12) }]}>$50,000</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={[styles.buttonText, { fontSize: getDynamicFontSize(10) }]}>Selling a car</Text>
                    </TouchableOpacity>
                </View>

                {/* Car Image */}
                <Image
                    source={require("../assets/LuxuryCar.png")}
                    style={[styles.carImage, { height: getDynamicSpacing(250) }]}
                />

                {/* Location, Phone, and Time (Aligned Left) */}
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Ionicons name="location" size={getDynamicFontSize(20)} color="orange" />
                        <Text style={[styles.infoText, { fontSize: getDynamicFontSize(12) }]}>New York, USA</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Ionicons name="call" size={getDynamicFontSize(20)} color="orange" />
                        <Text style={[styles.infoText, { fontSize: getDynamicFontSize(12) }]}>+1 234 567 890</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <MaterialIcons name="access-time" size={getDynamicFontSize(20)} color="orange" />
                        <Text style={[styles.infoText, { fontSize: getDynamicFontSize(12) }]}>Monday, 10:00 AM</Text>
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.actionButton, { paddingVertical: getDynamicSpacing(8), paddingHorizontal: getDynamicSpacing(20) }]}
                        onPress={() => router.push("/FullPreview")}
                    >
                        <Text style={[styles.buttonText1, { fontSize: getDynamicFontSize(10) }]}>See full preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.actionButton, { paddingVertical: getDynamicSpacing(10), paddingHorizontal: getDynamicSpacing(20) }]}
                    >
                        <Text style={[styles.buttonText1, { fontSize: getDynamicFontSize(13) }]}>Publish</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* BottomBar Component */}
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up the full screen
        backgroundColor: "#fff",
        padding: moderateScale(16), // Scaled padding
    },
    previewText: {
        fontWeight: "bold",
        marginTop: verticalScale(15), // Scaled margin
        marginBottom:10,
    },
    contentBox: {
        flex: 1, // Ensure the content box expands to fill the available space
        backgroundColor: "#F0F0F0", // Light Gray Background
        borderRadius: moderateScale(10), // Scaled border radius
        padding: moderateScale(16), // Scaled padding
        marginBottom: verticalScale(16), // Scaled margin
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: verticalScale(16), // Scaled margin
    },
    title: {
        fontWeight: "bold",
    },
    amountRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: verticalScale(16), // Scaled margin
    },
    amount: {
        fontWeight: "bold",
        color: "orange",
    },
    editButton: {
        backgroundColor: "#5E81F41F",
        borderRadius: moderateScale(8), // Scaled border radius
        paddingVertical: moderateScale(8), // Scaled padding
        paddingHorizontal: moderateScale(16), // Scaled padding
    },
    buttonText: {
        color: "#3E4958",
    },
    buttonText1: {
        color: "white",
        fontWeight: "bold",
    },
    carImage: {
        width: "100%",
        borderRadius: moderateScale(10), // Scaled border radius
        marginBottom: verticalScale(16), // Scaled margin
    },
    infoContainer: {
        alignItems: "flex-start",
        marginBottom: verticalScale(16), // Scaled margin
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: verticalScale(8), // Scaled margin
    },
    infoText: {
        marginLeft: moderateScale(8), // Scaled margin
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around", // Center buttons with equal spacing
        marginTop: verticalScale(16), // Add margin to separate from the content above
    },
    actionButton: {
        backgroundColor: "orange",
        borderRadius: moderateScale(8), // Scaled border radius
        paddingVertical: verticalScale(8), // Reduced padding
        paddingHorizontal: moderateScale(20), // Reduced padding
    },
});

export default PreviewPage;