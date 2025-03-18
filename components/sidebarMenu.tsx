import React, { useState, useEffect } from "react";
import { View, Text, Image, Switch, Animated, Dimensions, TouchableOpacity } from "react-native";
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';


import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

type SidebarMenuProps = {
  isVisible: boolean;
  onClose: () => void;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isVisible, onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const slideAnim = useState(new Animated.Value(-300))[0]; // Initial position off-screen
  const screenHeight = Dimensions.get('window').height;
  
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -300, // Slide in/out
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <>
      {/* Backdrop when menu is open */}
      {isVisible && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          />
        </TouchableWithoutFeedback>
      )}
      
      {/* Sidebar */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 280,
          height: screenHeight,
          backgroundColor: "#fff",
          elevation: 10,
          padding: 20,
          zIndex: 2,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {/* Profile Section */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20, marginTop: 40 }}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>John Doe</Text>
        </View>

        {/* Dark Mode Toggle */}
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
          <Feather name="moon" size={20} color="black" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => setDarkMode(value)}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        {/* Menu Items */}
        {[
          { label: "Account Information", icon: "person" },
          { label: "Password", icon: "lock" },
          { label: "My Ads", icon: "ad-units" },
          { label: "Wishlist", icon: "favorite-border" },
          { label: "Settings", icon: "settings" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
          >
            <MaterialIcons
              name={item.icon as keyof typeof MaterialIcons.glyphMap}
              size={20}
              color="black"
            />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <MaterialIcons name="logout" size={20} color="red" />
          <Text style={{ fontSize: 16, color: "red", marginLeft: 10 }}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default SidebarMenu;