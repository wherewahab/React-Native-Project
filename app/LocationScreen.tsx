import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../components/BottomBar";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import FilterModal from "../components/FilterModal";
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
                >
                    <Ionicons name="menu" size={20} color="black" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
                </TouchableOpacity>
                <Text style={styles.title}>UmmaBee</Text>
            </View>

            {/* Filter Buttons Row */}
            <View style={styles.filterRow}>
                <TouchableOpacity style={styles.iconButton} onPress={() => setModalVisible(true)} >
                    <Ionicons name="grid" size={15} color="black" />
                </TouchableOpacity>
                <FilterModal visible={isModalVisible} onClose={() => setModalVisible(false)} />
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Category</Text>
                    <Ionicons name="chevron-down" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Language</Text>
                    <Ionicons name="chevron-down" size={16} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Price</Text>
                    <Ionicons name="chevron-down" size={16} color="black" />
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
                    <Ionicons name="chevron-down" size={16} color="black" />
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

            {/* Three Divs in a Row with Image and Text */}
            <View style={styles.rowContainer}>
                {/* First Item */}
                <View style={styles.card} >
                    <Image
                        source={require("../assets/image1.png")}
                        style={styles.image}
                    />
                    <Text style={styles.cardText} onPress={() => router.push("/pastiDiskon")}>Corn Cream Soup</Text>
                    <View style={styles.locationRow}>
                        <Ionicons name="location-outline" size={12} color="blue" />
                        <Text style={styles.locText}>New York, USA</Text>
                    </View>
                    <Text style={styles.cardText}>$10.00</Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call-outline" size={12} color="#C2C2C2" />
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
                        <Ionicons name="location-outline" size={12} color="blue" />
                        <Text style={styles.locText}>New York, USA</Text>
                    </View>
                    <Text style={styles.cardText}>$10.00</Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call-outline" size={12} color="#C2C2C2" />
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
                        <Ionicons name="location-outline" size={12} color="blue" />
                        <Text style={styles.locText}>New York, USA</Text>
                    </View>
                    <Text style={styles.cardText}>$10.00</Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call-outline" size={12} color="#C2C2C2" />
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
                        <Ionicons name="location-outline" size={12} color="blue" />
                        <Text style={styles.locText}>New York, USA</Text>
                    </View>
                    <Text style={styles.cardText}>$10.00</Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call-outline" size={12} color="#C2C2C2" />
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
                        <Ionicons name="location-outline" size={12} color="blue" />
                        <Text style={styles.locText}>New York, USA</Text>
                    </View>
                    <Text style={styles.cardText}>$10.00</Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call-outline" size={12} color="#C2C2C2" />
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
                        <Ionicons name="location-outline" size={12} color="blue" />
                        <Text style={styles.locText}>New York, USA</Text>
                    </View>
                    <Text style={styles.cardText}>$10.00</Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call-outline" size={12} color="#C2C2C2" />
                        <Text style={styles.phoneText}>(021) 738 82737</Text>
                    </View>
                </View>
            </View>
            
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
        height: 60,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    menuButton: {
        position: "absolute",
        left: 20,
        backgroundColor: "#f0f0f0",
        padding: 6,
        borderRadius: 6,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        textAlign: "center",
        color: "orange"
    },
    locationButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: 20,
        marginTop: 10,
    },
    locationContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    locationText: {
        fontSize: 10,
        flex: 1,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    locText: {
        fontSize: 5,
        color: "blue",
        marginLeft: 4,
    },
    placeholderText: {
        color: "#888",
    },
    mapContainer: {
        borderRadius: 10,
        overflow: "hidden",
        marginHorizontal: 20,
        marginTop: 5,
        alignSelf: "stretch",
    },
    map: {
        width: "100%",
        height: 100,
    },
    filterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 10,
    },
    iconButton: {
        backgroundColor: "#f0f0f0",
        padding: 6,
        borderRadius: 6,
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
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: 5,
        justifyContent: "center",
        minHeight: 28,
        alignSelf: "flex-start",
    },
    filterText: {
        fontSize: 7,
        marginRight: 3,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 15,
    },
    card: {
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
        width: "30%",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        minHeight: 100,
        flexGrow: 1,
        marginHorizontal: 5,
        overflow: "hidden",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginBottom: 0,
        alignSelf: "center",
    },
    cardText: {
        fontSize: 5,
        fontWeight: "bold",
        textAlign: "center",
    },
    phoneRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    phoneText: {
        fontSize: 3,
        color: "#C2C2C2",
        marginLeft: 4,
    },
});

export default LocationScreen;