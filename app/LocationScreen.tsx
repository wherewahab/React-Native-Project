import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../components/BottomBar";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import FilterModal from "../components/FilterModal";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const LocationScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const router = useRouter();
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                {/* Header with Sidebar Menu and Title */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Ionicons name="menu" size={scale(20)} color="black" />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>UmmaBee</Text>
                        <Text style={styles.subtitle}>Be counted</Text>
                    </View>
                </View>

                {/* Filter Buttons Row */}
                <View style={styles.filterRow}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => setModalVisible(true)}>
                        <Ionicons name="grid" size={scale(15)} color="black" />
                    </TouchableOpacity>
                    <FilterModal visible={isModalVisible} onClose={() => setModalVisible(false)} />
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Category</Text>
                        <Ionicons name="chevron-down" size={scale(16)} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Language</Text>
                        <Ionicons name="chevron-down" size={scale(16)} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Price</Text>
                        <Ionicons name="chevron-down" size={scale(16)} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Order</Text>
                    </TouchableOpacity>
                </View>

                {/* Location Selector */}
                <TouchableOpacity
                    style={styles.locationButton}
                    onPress={() => setSelectedLocation("New York, USA")}
                >
                    <View style={styles.locationContent}>
                        <Text style={[styles.locationText, !selectedLocation && styles.placeholderText]}>
                            {selectedLocation ? selectedLocation : "Select Location"}
                        </Text>
                        <Ionicons name="chevron-down" size={scale(16)} color="black" />
                    </View>
                </TouchableOpacity>

                {/* Map */}
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.7749,
                            longitude: -122.4194,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1,
                        }}
                    />
                </View>

                {/* Scrollable Content */}
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Three Divs in a Row with Image and Text */}
                    <View style={styles.rowContainer}>
                        {/* First Item */}
                        <View style={styles.card}>
                            <Image
                                source={require("../assets/image1.png")}
                                style={styles.image}
                            />
                            <Text style={styles.cardText} onPress={() => router.push("/pastiDiskon")}>Corn Cream Soup</Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={scale(12)} color="blue" />
                                <Text style={styles.locText}>New York, USA</Text>
                            </View>
                            <Text style={styles.cardText}>$10.00</Text>
                            <View style={styles.phoneRow}>
                                <Ionicons name="call-outline" size={scale(12)} color="#C2C2C2" />
                                <Text style={styles.phoneText}>(021) 738 82737</Text>
                            </View>
                        </View>

                        {/* Second Item */}
                        <View style={styles.card}>
                            <Image
                                source={require("../assets/image2.png")}
                                style={styles.image}
                            />
                            <Text style={styles.cardText}>GREEN TEA</Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={scale(12)} color="blue" />
                                <Text style={styles.locText}>New York, USA</Text>
                            </View>
                            <Text style={styles.cardText}>$10.00</Text>
                            <View style={styles.phoneRow}>
                                <Ionicons name="call-outline" size={scale(12)} color="#C2C2C2" />
                                <Text style={styles.phoneText}>(021) 738 82737</Text>
                            </View>
                        </View>

                        {/* Third Item */}
                        <View style={styles.card}>
                            <Image
                                source={require("../assets/image3.png")}
                                style={styles.image}
                            />
                            <Text style={styles.cardText}>ICE COOL</Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={scale(12)} color="blue" />
                                <Text style={styles.locText}>New York, USA</Text>
                            </View>
                            <Text style={styles.cardText}>$10.00</Text>
                            <View style={styles.phoneRow}>
                                <Ionicons name="call-outline" size={scale(12)} color="#C2C2C2" />
                                <Text style={styles.phoneText}>(021) 738 82737</Text>
                            </View>
                        </View>
                    </View>

                    {/* Second row Three Divs with Image and Text */}
                    <View style={styles.rowContainer}>
                        {/* First Item */}
                        <View style={styles.card}>
                            <Image
                                source={require("../assets/image4.png")}
                                style={styles.image}
                            />
                            <Text style={styles.cardText}>Corn Cream Soup</Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={scale(12)} color="blue" />
                                <Text style={styles.locText}>New York, USA</Text>
                            </View>
                            <Text style={styles.cardText}>$10.00</Text>
                            <View style={styles.phoneRow}>
                                <Ionicons name="call-outline" size={scale(12)} color="#C2C2C2" />
                                <Text style={styles.phoneText}>(021) 738 82737</Text>
                            </View>
                        </View>

                        {/* Second Item */}
                        <View style={styles.card}>
                            <Image
                                source={require("../assets/image5.png")}
                                style={styles.image}
                            />
                            <Text style={styles.cardText}>GREEN TEA</Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={scale(12)} color="blue" />
                                <Text style={styles.locText}>New York, USA</Text>
                            </View>
                            <Text style={styles.cardText}>$10.00</Text>
                            <View style={styles.phoneRow}>
                                <Ionicons name="call-outline" size={scale(12)} color="#C2C2C2" />
                                <Text style={styles.phoneText}>(021) 738 82737</Text>
                            </View>
                        </View>

                        {/* Third Item */}
                        <View style={styles.card}>
                            <Image
                                source={require("../assets/image6.png")}
                                style={styles.image}
                            />
                            <Text style={styles.cardText}>ICE COOL</Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={scale(12)} color="blue" />
                                <Text style={styles.locText}>New York, USA</Text>
                            </View>
                            <Text style={styles.cardText}>$10.00</Text>
                            <View style={styles.phoneRow}>
                                <Ionicons name="call-outline" size={scale(12)} color="#C2C2C2" />
                                <Text style={styles.phoneText}>(021) 738 82737</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <BottomBar />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: verticalScale(60), // Scaled height
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    menuButton: {
        position: "absolute",
        left: scale(20), // Scaled left position
        backgroundColor: "#f0f0f0",
        padding: scale(6), // Scaled padding
        borderRadius: scale(6), // Scaled border radius
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    titleContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontSize: moderateScale(16), // Scaled font size
        fontWeight: "bold",
    },
    subtitle: {
        textAlign: "center",
        color: "orange",
        fontSize: moderateScale(10), // Scaled font size
    },
    locationButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: verticalScale(12), // Scaled padding
        paddingHorizontal: scale(15), // Scaled padding
        borderRadius: scale(8), // Scaled border radius
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: scale(20), // Scaled margin
        marginTop: verticalScale(10), // Scaled margin
    },
    locationContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    locationText: {
        fontSize: moderateScale(12), // Scaled font size
        flex: 1,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(4), // Scaled margin
    },
    locText: {
        fontSize: moderateScale(8), // Scaled font size
        color: "blue",
        marginLeft: scale(4), // Scaled margin
    },
    placeholderText: {
        color: "#888",
    },
    mapContainer: {
        borderRadius: scale(10), // Scaled border radius
        overflow: "hidden",
        marginHorizontal: scale(20), // Scaled margin
        marginTop: verticalScale(5), // Scaled margin
        alignSelf: "stretch",
    },
    map: {
        width: "100%",
        height: verticalScale(100), // Scaled height
    },
    filterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(10), // Scaled padding
        marginTop: verticalScale(10), // Scaled margin
    },
    iconButton: {
        backgroundColor: "#f0f0f0",
        padding: scale(6), // Scaled padding
        borderRadius: scale(6), // Scaled border radius
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: verticalScale(2), // Scaled padding
        paddingHorizontal: scale(8), // Scaled padding
        borderRadius: scale(6), // Scaled border radius
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: scale(5), // Scaled margin
        justifyContent: "center",
        minHeight: verticalScale(28), // Scaled height
        alignSelf: "flex-start",
    },
    filterText: {
        fontSize: moderateScale(10), // Scaled font size
        marginRight: scale(3), // Scaled margin
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: verticalScale(100), // Scaled padding
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(20), // Scaled margin
        marginTop: verticalScale(15), // Scaled margin
    },
    card: {
        flex: 1, // Equal width for all cards
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        paddingHorizontal: scale(10), // Scaled padding
        paddingBottom: verticalScale(10), // Scaled padding
        borderRadius: scale(10), // Scaled border radius
        marginHorizontal: scale(5), // Scaled margin
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        minHeight: verticalScale(200), // Minimum height for all cards
    },
    image: {
        width: scale(80), // Scaled width
        height: scale(80), // Scaled height
        borderRadius: scale(10), // Scaled border radius
        marginBottom: verticalScale(10), // Scaled margin
        alignSelf: "center",
    },
    cardText: {
        fontSize: moderateScale(10), // Scaled font size
        fontWeight: "bold",
        textAlign: "center",
    },
    phoneRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(4), // Scaled margin
    },
    phoneText: {
        fontSize: moderateScale(8), // Scaled font size
        color: "#C2C2C2",
        marginLeft: scale(4), // Scaled margin
    },
});

export default LocationScreen;