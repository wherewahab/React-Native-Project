import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons"; // For tag icons
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import BottomBar from "../components/BottomBar";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const PastiDiskon = () => {
  const router = useRouter();

  // Function to calculate dynamic font size based on screen height
  const getDynamicFontSize = (baseSize) => {
    const scaleFactor = height / 800; // 800 is a reference screen height
    return moderateScale(baseSize * scaleFactor);
  };

  // Function to calculate dynamic padding/margin based on screen height
  const getDynamicSpacing = (baseSpacing) => {
    const scaleFactor = height / 800; // 800 is a reference screen height
    return verticalScale(baseSpacing * scaleFactor);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={getDynamicFontSize(20)} color="black" />
        </TouchableOpacity>
        <Text style={[styles.headerText, { fontSize: getDynamicFontSize(16) }]}>
          Pasti Diskon
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Main Container with Padding */}
        <View style={styles.contentContainer}>
          {/* Image */}
          <Image
            source={require("../assets/image7.png")}
            style={[styles.image, { height: getDynamicSpacing(150) }]}
          />

          {/* Phone & Price */}
          <View style={styles.phoneRow}>
            {/* Left Side - Phone, Pasti Diskon, and Button */}
            <View style={styles.leftContainer}>
              <View style={styles.phoneContainer}>
                <Ionicons name="call-outline" size={getDynamicFontSize(12)} color="#C2C2C2" />
                <Text style={[styles.phoneText, { fontSize: getDynamicFontSize(10) }]}>
                  (021) 738 82737
                </Text>
              </View>

              <View style={styles.discountRow}>
                <Text style={[styles.discountText, { fontSize: getDynamicFontSize(12) }]}>
                  Pasti Diskon
                </Text>
                <TouchableOpacity style={styles.discountButton}>
                  <Text style={[styles.buttonText, { fontSize: getDynamicFontSize(10) }]}>
                    Luxury car
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={getDynamicFontSize(12)} color="blue" />
                <Text style={[styles.locText, { fontSize: getDynamicFontSize(10) }]}>
                  New York, USA
                </Text>
              </View>
            </View>

            {/* Right Side - Price */}
            <View style={styles.priceContainer}>
              <Text style={[styles.priceText, { fontSize: getDynamicFontSize(12) }]}>
                Price
              </Text>
              <Text style={[styles.priceAmount, { fontSize: getDynamicFontSize(14) }]}>
                $120
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text style={[styles.descriptionTitle, { fontSize: getDynamicFontSize(12) }]}>
            Description
          </Text>
          <Text style={[styles.descriptionText, { fontSize: getDynamicFontSize(10) }]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy Read More..
          </Text>

          {/* Suggested Tags */}
          <View style={styles.tagsContainer}>
            <TouchableOpacity style={styles.tagButton}>
              <Text style={[styles.tagText, { fontSize: getDynamicFontSize(10) }]}>
                Suggested Tag
              </Text>
              <MaterialIcons name="cancel" size={getDynamicFontSize(10)} color="#7A7A7A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tagButton}>
              <Text style={[styles.tagText, { fontSize: getDynamicFontSize(10) }]}>
                Suggested Tag
              </Text>
              <MaterialIcons name="cancel" size={getDynamicFontSize(10)} color="#7A7A7A" />
            </TouchableOpacity>
          </View>

          {/* Two Cards in a Row */}
          <View style={styles.rowContainer}>
            {/* First Card */}
            <View style={styles.card}>
              <Image
                source={require("../assets/image9.png")}
                style={[styles.image1, { height: getDynamicSpacing(80) }]}
              />
              <Text style={[styles.cardText, { fontSize: getDynamicFontSize(10) }]}>
                Corn Cream Soup
              </Text>

              <View style={styles.phoneRow1}>
                <Ionicons name="call-outline" size={getDynamicFontSize(7)} color="#C2C2C2" />
                <Text style={[styles.phoneText, { fontSize: getDynamicFontSize(8) }]}>
                  (021) 738 82737
                </Text>
              </View>

              <View style={styles.priceRow}>
                <Text style={[styles.cardText1, { fontSize: getDynamicFontSize(10) }]}>
                  $10.00
                </Text>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={[styles.buttonText1, { fontSize: getDynamicFontSize(10) }]}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Second Card */}
            <View style={styles.card}>
              <Image
                source={require("../assets/image9.png")}
                style={[styles.image1, { height: getDynamicSpacing(80) }]}
              />
              <Text style={[styles.cardText, { fontSize: getDynamicFontSize(10) }]}>
                Corn Cream Soup
              </Text>

              <View style={styles.phoneRow1}>
                <Ionicons name="call-outline" size={getDynamicFontSize(7)} color="#C2C2C2" />
                <Text style={[styles.phoneText, { fontSize: getDynamicFontSize(8) }]}>
                  (021) 738 82737
                </Text>
              </View>

              <View style={styles.priceRow}>
                <Text style={[styles.cardText1, { fontSize: getDynamicFontSize(10) }]}>
                  $10.00
                </Text>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={[styles.buttonText1, { fontSize: getDynamicFontSize(10) }]}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <BottomBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: verticalScale(60), // Fixed height for the header
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 100, // Ensure the header is above other content
  },
  backButton: {
    position: "absolute",
    left: moderateScale(10),
    zIndex: 10,
    backgroundColor: "#f0f0f0",
    padding: moderateScale(5),
    borderRadius: moderateScale(6),
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  headerText: {
    fontWeight: "bold",
    color: "black",
  },
  scrollContent: {
    paddingBottom: verticalScale(80), // Adjusted to prevent overlap with BottomBar
  },
  contentContainer: {
    paddingHorizontal: moderateScale(15), // Adds padding to the left and right
    paddingTop: verticalScale(70), // Adds padding to the top (below the header)
  },
  image: {
    width: "100%",
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  leftContainer: {
    flex: 1,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  phoneText: {
    color: "#C2C2C2",
    marginLeft: moderateScale(5),
  },
  discountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  discountText: {
    fontWeight: "bold",
    color: "black",
    marginRight: moderateScale(10),
  },
  discountButton: {
    backgroundColor: "white",
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
    borderWidth: 2,
    borderColor: "orange",
  },
  buttonText: {
    color: "orange",
    fontWeight: "bold",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locText: {
    color: "blue",
    marginLeft: moderateScale(5),
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  priceText: {
    color: "black",
  },
  priceAmount: {
    fontWeight: "bold",
    color: "#000",
  },
  descriptionTitle: {
    fontWeight: "bold",
    marginBottom: verticalScale(5),
  },
  descriptionText: {
    color: "gray",
    marginBottom: verticalScale(10),
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
    gap: moderateScale(6),
  },
  tagButton: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(9),
    borderRadius: moderateScale(7),
  },
  tagText: {
    color: "#3E4958",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  card: {
    width: "48%",
    backgroundColor: "#f9f9f9",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image1: {
    width: "100%",
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(5),
  },
  cardText: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: verticalScale(5),
  },
  phoneRow1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText1: {
    fontWeight: "bold",
  },
  buyButton: {
    backgroundColor: "orange",
    paddingVertical: verticalScale(3),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  buttonText1: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PastiDiskon;