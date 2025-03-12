import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
const Signup = () => {
    const router = useRouter();

    return (
        <>
            {/* Hide the default header */}
            <Stack.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled" >
                    <View style={styles.container}>
                        {/* Back Button at the TOP */}
                        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={18} color="black" />
                        </TouchableOpacity>

                        {/* Heading */}
                        <Text style={styles.heading}>Create Your Account</Text>
                        <Text style={styles.subheading}>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        {/* Input Fields */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="person" size={20} color="gray" style={styles.icon} />
                            <TextInput placeholder="Name" style={styles.input} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
                            <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="location" size={20} color="gray" style={styles.icon} />
                            <TextInput placeholder="Location" style={styles.input} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
                            <TextInput placeholder="Password" style={styles.input} secureTextEntry />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
                            <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
                        </View>

                        {/* Signup Button */}
                        <TouchableOpacity
                            style={styles.signupButton}
                            onPress={() => router.push("/categorySelection")}
                        >
                            <Text style={styles.signupText}>Sign Up</Text>
                        </TouchableOpacity>


                        {/* Already have an account? Sign in */}
                        <View style={styles.signInContainer}>
                            <Text style={styles.signInTextSmall}>Already have an account? </Text>
                            <TouchableOpacity>
                                <Text style={styles.signInTextSmallBold}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Continue as Guest */}
                        <View style={styles.signInGuest}>
                            <TouchableOpacity>
                                <Text style={styles.signInText}>Continue as guest</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 60, // Extra padding to avoid overlap
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10,
        backgroundColor: "#f0f0f0",
        padding: 5, // Reduced padding for a smaller square
        borderRadius: 6, // Smaller rounded corners
        elevation: 2, // Slight shadow for depth
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 5,
        paddingTop: 0,
    },
    heading: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5, // Moves "Create Account" down
        marginBottom: 20,
    },
    subheading: {
        textAlign: "center",
        fontSize: 10,
        marginBottom: 15,
        color: "#B0B0B0"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#F5F5F5"
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 45,
        textAlignVertical: "center", // Keeps placeholder text centered
        paddingVertical: 0,
    },
    signupButton: {
        backgroundColor: "orange",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    signupText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10,
    },
    signInContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    signInText: {
        color: "orange",
        fontWeight: "bold",
    },
    signInTextSmall: {
        fontSize: 7, // Reduce size of normal text
        color: "#000",
    },
    signInTextSmallBold: {
        fontSize: 8, // Reduce size of "Sign in" text
        color: "orange",
        fontWeight: "bold",
    },
    signInGuest: {
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
    },

});

export default Signup;