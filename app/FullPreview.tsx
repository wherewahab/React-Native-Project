import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Header from "@/components/HeaderAiPosting";
import BottomBar from "@/components/BottomBar";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const FullPreview = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header title="Ai Posting" />

            {/* Main Content Section with Light Gray Background */}
            <View style={styles.contentBox}>
                {/* Title */}
                <View style={styles.titleRow}>
                    <Text style={[styles.title, { fontSize: moderateScale(16) }]}>Full Ad Preview</Text>
                </View>

                {/* Image Container */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/LuxuryCar.png")}
                        style={styles.carImage} // Image will expand to fill the parent container
                        resizeMode="cover" // Ensure the image covers the entire space
                    />
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
    },
    contentBox: {
        flex: 1, // Ensure the content box expands to fill the available space
        backgroundColor: "#F0F0F0", // Light Gray Background
        padding: moderateScale(16), // Scaled padding
        margin: moderateScale(16), // Scaled margin
        borderRadius: moderateScale(10), // Scaled border radius
        marginBottom: verticalScale(80), // Add space at the bottom for the BottomBar
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
    imageContainer: {
        flex: 1, // Expand to fill the available space within the contentBox
    },
    carImage: {
        width: "100%",
        height: "100%", // Image will expand to fill the parent container
        borderRadius: moderateScale(10), // Scaled border radius
    },
});

export default FullPreview;