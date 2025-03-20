import React, { useState } from "react";
import { View, Text, Image, Switch, Animated } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

const SidebarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const slideAnim = useState(new Animated.Value(-250))[0]; // Initial position off-screen

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? -250 : 0, // Slide in/out
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Menu Button */}
      <TouchableOpacity
        onPress={toggleMenu}
        style={{ padding: 10, marginTop: 40, marginLeft: 20 }}
      >
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      {/* Sidebar */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 250,
          backgroundColor: "#fff",
          elevation: 10,
          padding: 20,
          transform: [{ translateY: slideAnim }],
        }}
      >
        {/* Profile Section */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
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
          <TouchableOpacity key={index} style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <MaterialIcons name={item.icon as keyof typeof MaterialIcons.glyphMap} size={20} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <MaterialIcons name="logout" size={20} color="red" />
          <Text style={{ fontSize: 16, color: "red", marginLeft: 10 }}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SidebarMenu;