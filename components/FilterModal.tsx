import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    ScrollView,
    Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider"; // Ensure this package is installed
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

// Define the props interface
interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
    const [price, setPrice] = React.useState(50); // Default price

    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={[styles.modalContent, { height: height * 0.8 }]}> {/* Adjust height based on screen size */}
                    {/* Header */}
                    <View style={styles.modalHeader}>
                        <Text style={[styles.modalTitle, { fontSize: moderateScale(15) }]}>Filter</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={moderateScale(30)} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Category Section */}
                    <Text style={[styles.sectionTitle, { fontSize: moderateScale(12) }]}>Category</Text>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={[styles.buttonText1, { fontSize: moderateScale(12) }]}>Cars</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={[styles.buttonText1, { fontSize: moderateScale(12) }]}>Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={[styles.buttonText1, { fontSize: moderateScale(12) }]}>Luxuries</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Scrollable Content */}
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        {/* Language Section */}
                        <Text style={[styles.sectionTitle, { fontSize: moderateScale(12) }]}>Language</Text>
                        <View style={styles.buttonContainer}>
                            {["English", "Spanish", "French", "German", "Hindi", "Chinese", "Japanese", "Korean", "Arabic", "Russian", "Italian"].map((lang, index) => (
                                <TouchableOpacity key={index} style={styles.button}>
                                    <Text style={[styles.buttonText, { fontSize: moderateScale(12) }]}>{lang}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Price Section */}
                        <Text style={[styles.sectionTitle, { fontSize: moderateScale(12) }]}>Price</Text>
                        <Text style={[styles.priceText, { fontSize: moderateScale(14) }]}>$0 - ${price}</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor="orange"
                            maximumTrackTintColor="#ccc"
                            thumbTintColor="orange"
                            value={price}
                            onValueChange={setPrice}
                        />

                        {/* Sort By Section */}
                        <Text style={[styles.sectionTitle, { fontSize: moderateScale(12) }]}>Sort By</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={[styles.buttonText, { fontSize: moderateScale(12) }]}>Right to Left</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={[styles.buttonText, { fontSize: moderateScale(12) }]}>Left to Right</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Reset and Apply Buttons */}
                        <View style={styles.buttonContainerReset}>
                            <TouchableOpacity style={[styles.buttonReset, { width: moderateScale(100), height: verticalScale(40) }]}>
                                <Text style={[styles.buttonTextReset, { fontSize: moderateScale(14) }]}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonReset, { width: moderateScale(100), height: verticalScale(40) }]}>
                                <Text style={[styles.buttonTextReset, { fontSize: moderateScale(14) }]}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-start", // Puts modal at the top
        alignItems: "center",
    },
    modalContent: {
        width: "90%", // Adjust width for better fit
        backgroundColor: "white",
        borderRadius: moderateScale(12), // Scaled border radius
        padding: moderateScale(15), // Scaled padding
        alignItems: "center",
        marginTop: verticalScale(20), // Push modal to the top
    },
    scrollContent: {
        flexGrow: 1, // Ensure the ScrollView content fills the available space
        paddingBottom: verticalScale(10), // Reduced padding at the bottom
    },
    modalHeader: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: verticalScale(10), // Scaled margin
    },
    modalTitle: {
        fontWeight: "bold",
    },
    sectionTitle: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: verticalScale(5), // Scaled margin
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: verticalScale(3), // Scaled margin
    },
    buttonContainer1: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: verticalScale(5), // Scaled margin
        alignSelf: "flex-start",
    },
    button: {
        backgroundColor: "#eee",
        paddingVertical: verticalScale(5), // Scaled padding
        paddingHorizontal: moderateScale(5), // Scaled padding
        borderRadius: moderateScale(6), // Scaled border radius
        margin: moderateScale(5), // Scaled margin
    },
    buttonText: {
        fontSize: moderateScale(7), // Scaled font size
    },
    buttonText1: {
        fontSize: moderateScale(7), // Scaled font size
    },
    slider: {
        width: "100%",
        marginTop: verticalScale(3), // Scaled margin
    },
    priceText: {
        alignSelf: "flex-start",
        marginTop: verticalScale(5), // Scaled margin
        color: "orange",
    },
    buttonContainerReset: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(20), // Scaled margin
    },
    buttonReset: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        borderRadius: moderateScale(8), // Scaled border radius
        marginHorizontal: moderateScale(10), // Scaled margin
    },
    buttonTextReset: {
        fontWeight: "bold",
        color: "white",
    },
});

export default FilterModal;