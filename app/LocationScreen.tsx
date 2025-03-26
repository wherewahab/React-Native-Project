import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Animated, Dimensions, SafeAreaView, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import BottomBar from "../components/BottomBar";
import { useRouter } from "expo-router";
import FilterModal from "../components/FilterModal";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get('window');
const drawerWidth = width * 0.8;

const LocationScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const router = useRouter();
    const [isModalVisible, setModalVisible] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        Animated.timing(animatedValue, {
            toValue: drawerOpen ? 0 : 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-drawerWidth, 0],
    });

    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
    });

    return (
        <View style={{ flex: 1 }}>
            {/* Main Content - Always visible and static */}
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    {/* Header with Sidebar Menu and Title */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.menuButton}
                            onPress={toggleDrawer}
                        >
                            <Ionicons name="menu" size={scale(20)} color="black" />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>UmmaBee</Text>
                            <Text style={styles.subtitle}>Be counted</Text>
                        </View>
                    </View>

                    <FilterModal visible={isModalVisible} onClose={() => setModalVisible(false)} />
                    
                    {/* Filter Buttons Row */}
                    <View style={styles.filterRow}>
                        <TouchableOpacity style={styles.iconButton} onPress={() => setModalVisible(true)}>
                            <Ionicons name="grid" size={scale(15)} color="black" />
                        </TouchableOpacity>
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
                            <Ionicons name="chevron-down" size={scale(16)} color="black" />
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

            {/* Overlay - Only visible when drawer is open */}
            {drawerOpen && (
                <Animated.View style={[
                    styles.overlay,
                    { opacity }
                ]}>
                    <TouchableOpacity
                        style={StyleSheet.absoluteFill}
                        onPress={toggleDrawer}
                        activeOpacity={1}
                    />
                </Animated.View>
            )}

            {/* Drawer Sidebar - Absolute positioned */}
            <Animated.View style={[
                styles.drawerContainer,
                { 
                    transform: [{ translateX }],
                    shadowColor: '#000',
                    shadowOffset: { width: 2, height: 0 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 10,
                }
            ]}>
                <View style={styles.drawerContent}>
                    {/* Close button at top right */}
                    <TouchableOpacity onPress={toggleDrawer} style={styles.closeButton}>
                        <Ionicons name="menu" size={24} color="#333" />
                    </TouchableOpacity>

                    {/* User Profile Section */}
                    <View style={styles.profileSection}>
                        <View style={styles.profilePictureContainer}>
                            <Image
                                source={require("../assets/imageProfile.png")}
                                style={styles.profilePicture}
                            />
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>John Doe</Text>
                            <View style={styles.profileLocation}>
                                <Ionicons name="location-outline" size={16} color="orange" />
                                <Text style={styles.locationText}>New York, USA</Text>
                            </View>
                        </View>
                    </View>

                    {/* Dark Mode Toggle */}
                    <View style={styles.drawerItem}>
                        <Ionicons name="moon-outline" size={22} color="#333" />
                        <Text style={styles.drawerItemText}>Dark Mode</Text>
                        <Switch
                            value={isDarkMode}
                            onValueChange={() => setIsDarkMode(!isDarkMode)}
                            style={styles.switch}
                        />
                    </View>

                    {/* Menu Items */}
                    <TouchableOpacity style={styles.drawerItem}>
                        <Ionicons name="information-circle-outline" size={22} color="#333" />
                        <Text style={styles.drawerItemText}>Account Information</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Ionicons name="lock-closed-outline" size={22} color="#333" />
                        <Text style={styles.drawerItemText}>Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Ionicons name="megaphone-outline" size={22} color="#333" />
                        <Text style={styles.drawerItemText}>My Ads</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Ionicons name="heart-outline" size={22} color="#333" />
                        <Text style={styles.drawerItemText}>Wishlist</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Ionicons name="settings-outline" size={22} color="#333" />
                        <Text style={styles.drawerItemText}>Settings</Text>
                    </TouchableOpacity>

                    {/* Logout Section at Bottom */}
                    <TouchableOpacity
                        style={[styles.drawerItem, styles.logoutItem]}
                        onPress={() => {
                            // Handle logout functionality here
                            toggleDrawer();
                        }}
                    >
                        <Ionicons name="log-out-outline" size={22} color="#ff4444" />
                        <Text style={[styles.drawerItemText, styles.logoutText]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    drawerContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: drawerWidth,
        backgroundColor: '#fff',
        zIndex: 100,
    },
    drawerContent: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
        zIndex: 99,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
        marginBottom: 10,
    },
    profilePictureContainer: {
        marginRight: 15,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    profileLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 10,
        color:"black",
        marginLeft: 4,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 8,
        zIndex: 101,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    drawerItemText: {
        fontSize: 16,
        marginLeft: 15,
    },
    switch: {
        marginLeft: 'auto',
    },
    logoutItem: {
        marginTop: 'auto',
        marginBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5',
        paddingTop: 15,
    },
    logoutText: {
        color: '#ff4444',
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: verticalScale(60),
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    menuButton: {
        position: "absolute",
        left: scale(20),
        backgroundColor: "#f0f0f0",
        padding: scale(6),
        borderRadius: scale(6),
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
        fontSize: moderateScale(16),
        fontWeight: "bold",
    },
    subtitle: {
        textAlign: "center",
        color: "orange",
        fontSize: moderateScale(10),
    },
    locationButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(15),
        borderRadius: scale(8),
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: scale(20),
        marginTop: verticalScale(10),
    },
    locationContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(4),
    },
    locText: {
        fontSize: moderateScale(8),
        color: "blue",
        marginLeft: scale(4),
    },
    placeholderText: {
        color: "#888",
    },
    mapContainer: {
        borderRadius: scale(10),
        overflow: "hidden",
        marginHorizontal: scale(20),
        marginTop: verticalScale(5),
        alignSelf: "stretch",
    },
    map: {
        width: "100%",
        height: verticalScale(100),
    },
    filterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(10),
        marginTop: verticalScale(10),
    },
    iconButton: {
        backgroundColor: "#f0f0f0",
        padding: scale(6),
        borderRadius: scale(6),
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
        paddingVertical: verticalScale(2),
        paddingHorizontal: scale(8),
        borderRadius: scale(6),
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: scale(5),
        justifyContent: "center",
        minHeight: verticalScale(28),
        alignSelf: "flex-start",
    },
    filterText: {
        fontSize: moderateScale(10),
        marginRight: scale(3),
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: verticalScale(100),
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(20),
        marginTop: verticalScale(15),
    },
    card: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        paddingHorizontal: scale(10),
        paddingBottom: verticalScale(10),
        borderRadius: scale(10),
        marginHorizontal: scale(5),
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        minHeight: verticalScale(200),
    },
    image: {
        width: scale(80),
        height: scale(80),
        borderRadius: scale(10),
        marginBottom: verticalScale(10),
        alignSelf: "center",
    },
    cardText: {
        fontSize: moderateScale(10),
        fontWeight: "bold",
        textAlign: "center",
    },
    phoneRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(4),
    },
    phoneText: {
        fontSize: moderateScale(8),
        color: "#C2C2C2",
        marginLeft: scale(4),
    },
});

export default LocationScreen;