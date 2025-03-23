import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Signup = () => {
    const router = useRouter();

    return (
        <>
            {/* Hide the default header */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <View style={styles.container}>
                        {/* Back Button at the TOP */}
                        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={moderateScale(18)} color="black" />
                        </TouchableOpacity>

                        {/* Heading */}
                        <Text style={[styles.heading, { fontSize: moderateScale(15) }]}>Create Your Account</Text>
                        <Text style={[styles.subheading, { fontSize: moderateScale(10) }]}>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>

                        {/* Input Fields */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="person" size={moderateScale(20)} color="gray" style={styles.icon} />
                            <TextInput placeholder="Name" style={[styles.input, { fontSize: moderateScale(12) }]} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="mail" size={moderateScale(20)} color="gray" style={styles.icon} />
                            <TextInput
                                placeholder="Email"
                                style={[styles.input, { fontSize: moderateScale(12) }]}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="location" size={moderateScale(20)} color="gray" style={styles.icon} />
                            <TextInput placeholder="Location" style={[styles.input, { fontSize: moderateScale(12) }]} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed" size={moderateScale(20)} color="gray" style={styles.icon} />
                            <TextInput
                                placeholder="Password"
                                style={[styles.input, { fontSize: moderateScale(12) }]}
                                secureTextEntry
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed" size={moderateScale(20)} color="gray" style={styles.icon} />
                            <TextInput
                                placeholder="Confirm Password"
                                style={[styles.input, { fontSize: moderateScale(12) }]}
                                secureTextEntry
                            />
                        </View>

                        {/* Signup Button */}
                        <TouchableOpacity
                            style={styles.signupButton}
                            onPress={() => router.push("/categorySelection")}
                        >
                            <Text style={[styles.signupText, { fontSize: moderateScale(12) }]}>Sign Up</Text>
                        </TouchableOpacity>

                        {/* Already have an account? Sign in */}
                        <View style={styles.signInContainer}>
                            <Text style={[styles.signInTextSmall, { fontSize: moderateScale(8) }]}>
                                Already have an account?{" "}
                            </Text>
                            <TouchableOpacity>
                                <Text style={[styles.signInTextSmallBold, { fontSize: moderateScale(8) }]}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Continue as Guest */}
                        <View style={styles.signInGuest}>
                            <TouchableOpacity>
                                <Text style={[styles.signInText, { fontSize: moderateScale(10) }]}>Continue as guest</Text>
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
        paddingHorizontal: moderateScale(20), // Scaled padding
        paddingTop: verticalScale(60), // Scaled padding
    },
    backButton: {
        position: "absolute",
        top: verticalScale(20), // Scaled top position
        left: moderateScale(20), // Scaled left position
        zIndex: 10,
        backgroundColor: "#f0f0f0",
        padding: moderateScale(5), // Scaled padding
        borderRadius: moderateScale(6), // Scaled border radius
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: moderateScale(1), // Scaled shadow radius
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: moderateScale(5), // Scaled padding
        paddingTop: 0,
    },
    heading: {
        fontWeight: "bold",
        textAlign: "center",
        marginTop: verticalScale(5), // Scaled margin
        marginBottom: verticalScale(20), // Scaled margin
    },
    subheading: {
        textAlign: "center",
        marginBottom: verticalScale(15), // Scaled margin
        color: "#B0B0B0",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: moderateScale(8), // Scaled border radius
        paddingHorizontal: moderateScale(10), // Scaled padding
        marginBottom: verticalScale(10), // Scaled margin
        backgroundColor: "#F5F5F5",
    },
    icon: {
        marginRight: moderateScale(10), // Scaled margin
    },
    input: {
        flex: 1,
        height: verticalScale(45), // Scaled height
        textAlignVertical: "center",
        paddingVertical: 0,
    },
    signupButton: {
        backgroundColor: "orange",
        paddingVertical: verticalScale(12), // Scaled padding
        borderRadius: moderateScale(8), // Scaled border radius
        alignItems: "center",
        marginTop: verticalScale(10), // Scaled margin
    },
    signupText: {
        color: "white",
        fontWeight: "bold",
    },
    signInContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: verticalScale(10), // Scaled margin
    },
    signInText: {
        color: "orange",
        fontWeight: "bold",
    },
    signInTextSmall: {
        color: "#000",
    },
    signInTextSmallBold: {
        color: "orange",
        fontWeight: "bold",
    },
    signInGuest: {
        position: "absolute",
        bottom: verticalScale(20), // Scaled bottom position
        alignSelf: "center",
    },
});

export default Signup;