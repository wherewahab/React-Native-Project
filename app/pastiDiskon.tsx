import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons"; // For back arrow
import { MaterialIcons } from "@expo/vector-icons"; // For tag icons
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import BottomBar from "../components/BottomBar";
import { ScrollView } from "react-native";
const PastiDiskon = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView 
            style={{ flex: 1 }} 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false} 
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={19} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Pasti Diskon</Text>
                </View>

                {/* Image */}
                <Image source={require("../assets/image7.png")} style={styles.image} />

                {/* Phone & Price */}
                <View style={styles.phoneRow}>
                    {/* Left Side - Phone, Pasti Diskon, and Button */}
                    <View style={styles.leftContainer}>
                        <View style={styles.phoneContainer}>
                            <Ionicons name="call-outline" size={12} color="#C2C2C2" />
                            <Text style={styles.phoneText}>(021) 738 82737</Text>
                        </View>

                        <View style={styles.discountRow}>
                            <Text style={styles.discountText}>Pasti Diskon</Text>
                            <TouchableOpacity style={styles.discountButton}>
                                <Text style={styles.buttonText}>Luxury car</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.locationRow}>
                            <Ionicons name="location-outline" size={12} color="blue" />
                            <Text style={styles.locText}>New York, USA</Text>
                        </View>
                    </View>

                    {/* Right Side - Price */}
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>Price</Text>
                        <Text style={styles.priceAmount}>$120</Text>
                    </View>

                </View>

                {/* Description */}
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Read More..
                </Text>

                {/* Suggested Tags */}
                <View style={styles.tagsContainer}>
                    <TouchableOpacity style={styles.tagButton}>
                        <Text style={styles.tagText}>Suggested Tag</Text>
                        <MaterialIcons name="cancel" size={10} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagButton}>
                        <Text style={styles.tagText}>Suggested Tag</Text>
                        <MaterialIcons name="cancel" size={10} color="black" />
                    </TouchableOpacity>
                </View>
                {/* Three Divs in a Row with Image and Text */}
                <View style={styles.rowContainer}>
                    {/* First Item */}
                    <View style={styles.card} >
                        <Image
                            source={require("../assets/image9.png")}
                            style={styles.image1}
                        />
                        <Text style={styles.cardText}>Corn Cream Soup</Text>

                        <View style={styles.phoneRow1}>
                            <Ionicons name="call-outline" size={7} color="#C2C2C2" />
                            <Text style={styles.phoneText}>(021) 738 82737</Text>
                        </View>
                        {/* <Text style={styles.cardText1}>$10.00</Text> */}

                        <View style={styles.priceRow}>
                            <Text style={styles.cardText1}>$10.00</Text>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buttonText1}>View</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.card} >
                        <Image
                            source={require("../assets/image9.png")}
                            style={styles.image1}
                        />
                        <Text style={styles.cardText}>Corn Cream Soup</Text>

                        <View style={styles.phoneRow1}>
                            <Ionicons name="call-outline" size={7} color="#C2C2C2" />
                            <Text style={styles.phoneText}>(021) 738 82737</Text>
                        </View>
                        {/* <Text style={styles.cardText1}>$10.00</Text> */}

                        <View style={styles.priceRow}>
                            <Text style={styles.cardText1}>$10.00</Text>
                            <TouchableOpacity style={styles.buyButton} >
                                <Text style={styles.buttonText1}>View</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>
            </View>
            </ScrollView>
            <BottomBar />
        </SafeAreaView>
    );
};

export default PastiDiskon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50, // Ensures space for header (adjust if needed)
        paddingHorizontal: 10, // Keeps content aligned
        
    },
    scrollContent: {
        paddingBottom: 100, // Prevents overlap with BottomBar
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: 40, // Define height to avoid overlap
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", // Centers the header text
        backgroundColor: "white",
        elevation: 3, // Shadow for Android
        shadowColor: "white",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 100, // Ensures it's above other content
    },

    rowContainer: {
        flexDirection: "row",
         justifyContent: "space-between", // Aligns items to the left
        alignItems: "center",
        marginHorizontal: 0, // No extra horizontal margin
        marginLeft: 0, // Ensure it starts from the left
        paddingLeft: 0, // Remove extra padding
        marginTop: 15,
        width: "100%", // Take full width
        backgroundColor: "white", // Test background to confirm width
    },
    
    
    card: {
        alignItems: "flex-start",
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 10, // Keep content spacing inside the card
        paddingBottom: 5,
        borderRadius: 10,
        width: "50%", // Keeps the card 50% of the parent width
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        minHeight: 50,
        flexGrow: 1, // Allows equal stretching
        marginRight: 5, // Only add spacing to the right (not left)
        overflow: "hidden",
    },
    cardText: {
        fontSize: 8,
        padding: 5,
        fontWeight: "bold",
        textAlign: "center",
    },
    cardText1: {
        fontSize: 8,
        fontWeight: "bold",
        textAlign: "left",  // Ensures text aligns to the left
        alignSelf: "flex-start",
        padding: 5,
    },
    image1: {
        width: "100%",  // Makes the image take the full width of its parent
        height: 80,      // Keep the height fixed (adjust if needed)
        borderRadius: 10,
        alignSelf: "stretch", // Ensures it stretches fully inside the parent
        resizeMode: "cover",  // Ensures the image covers the entire space
    },

    headerText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    backButton: {
        position: "absolute",
        top: 3,
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
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    descriptionTitle: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 7,
    },
    descriptionText: {
        fontSize: 10,
        color: "gray",
        marginBottom: 15,
    },
    discountRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    discountButton: {
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "orange",
    },
    buttonText: {
        color: "orange",
        fontSize: 5,
        fontWeight: "bold",
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
        backgroundColor: "#D3D3D3",
        paddingVertical: 4,
        paddingHorizontal: 9,
        borderRadius: 7,

    },
    tagText: {
        color: "black",
        marginLeft: 0,
        fontSize: 5,
    },
    leftContainer: {
        alignItems: "flex-start", // Ensures all content aligns to the left
        flex: 1, // Allows it to take up remaining space
    },

    phoneRow: {
        flexDirection: "row",
        alignItems: "center", // Aligns icon and text vertically
        justifyContent: "flex-start", // Ensures content sticks to the left
        width: "100%", // Takes full width
        gap: 2, // Adjust spacing between icon and text
        
    },
    phoneRow1: {
        flexDirection: "row", 
        alignItems: "center", 
        width: "100%",
        marginLeft: 5, // Move slightly to the right
        paddingLeft: 5, // Optional: Adjust if needed
    },
    
    phoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    phoneText: {
        fontSize: 4,
        color: "#C2C2C2",
        marginLeft: 0,
        
    },
    priceContainer: {
        alignItems: "center", // Aligns priceText and priceAmount in the center
        marginTop: -14,
    },
    priceText: {
        fontSize: 10,
        color: "black",
    },
    priceAmount: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#000",
    },
    discountText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "black",
        marginTop: 4, // Adds spacing below phone number
        marginRight: 9,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2, // Space below "Pasti Diskon"
    },
    locText: {
        fontSize: 5,
        color: "blue",
        marginLeft: 4, // Space between icon and text
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between", // Ensures text is on the left, button is on the right
        alignItems: "center", // Align items vertically
        width: "100%", // Ensures it takes full width
        paddingHorizontal: 10, // Adds some spacing on the sides
    },
    

    buyButton: {
        backgroundColor: "orange", // Blue color
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    buttonText1: {
        color: "white",
        fontSize: 5,
        fontWeight: "bold",
    }
});
