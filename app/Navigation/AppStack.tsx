import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import Signup from '../Signup';
import CategorySelection from '../categorySelection';
import LocationScreen from '../LocationScreen';
import PastiDiskon from '../pastiDiskon';
import HomeScreen from '../Homescreen'; // Make sure this is correctly defined
import SidebarMenu from '@/components/sidebarMenu';
import CustomDrawer from '@/components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="LocationScreen"
        component={LocationScreen} // Ensure TabNavigator is properly imported
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
