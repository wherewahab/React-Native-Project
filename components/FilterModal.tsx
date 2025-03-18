import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider"; // Ensure this package is installed

const FilterModal = ({ visible, onClose }) => {
    const [price, setPrice] = React.useState(50); // Default price

    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Filter</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sectionTitle}>Category</Text>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText1}>Cars</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText1}>Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText1}>Luxuries</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        {/* Language Section */}
                        <Text style={styles.sectionTitle}>Language</Text>
                        <View style={styles.buttonContainer}>
                            {["English", "Spanish", "French", "German", "Hindi", "Chinese", "Japanese", "Korean", "Arabic", "Russian", "Italian"].map((lang, index) => (
                                <TouchableOpacity key={index} style={styles.button}>
                                    <Text style={styles.buttonText}>{lang}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Price Section */}
                        <Text style={styles.sectionTitle}>Price</Text>
                        <Text style={styles.priceText}>$0 - ${price}</Text>
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
                        <Text style={styles.sectionTitle}>Sort By</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Right to Left</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Left to Right</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonContainerReset}>
                            <TouchableOpacity style={styles.buttonReset}>
                                <Text style={styles.buttonTextReset}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonReset}>
                                <Text style={styles.buttonTextReset}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-start", // Puts modal at the top
        alignItems: "center",
    },
    modalContent: {
        width: "90%", // Adjust width for better fit
        height: "75%", // Reduce height to avoid scrolling
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        alignItems: "center",
        marginTop: 20, // Push modal to the top
    },
    modalHeader: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 15, 
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 10, 
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: 5,
    },
    buttonContainer1: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: 5,
        alignSelf: "flex-start",
    },
    button: {
        backgroundColor: "#eee",
        paddingVertical: 2, // Reduce padding
        paddingHorizontal: 2,
        borderRadius: 6,
        margin: 2,
    },
    buttonText: {
        fontSize: 10, // Reduce font size for better fit
    },
    buttonText1:{
        fontSize: 10,
    },
    slider: {
        width: "100%",
        marginTop: 5,
    },
    priceText: {
        fontSize: 13, 
        alignSelf: "flex-start",
        marginTop: 5,
        color: "orange",
    },
    buttonContainerReset: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    buttonReset: {
        width: 90, // Reduce width
        height: 35, // Reduce height
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        borderRadius: 8,
        marginHorizontal: 8,
    },
    buttonTextReset: {
        fontSize: 12, // Reduce font size
        fontWeight: "bold",
        color: "white",
    },
});
