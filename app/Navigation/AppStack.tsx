// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Import screens
// import Signup from '../Signup';
// import CategorySelection from '../categorySelection';
// import LocationScreen from '../LocationScreen';
// import PastiDiskon from '../pastiDiskon';
// import HomeScreen from '../Homescreen';
// import CustomDrawer from '@/components/CustomDrawer';

// const Drawer = createDrawerNavigator();

// const AppDrawer = () => {
//   return (
//     // <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="HomeScreen" // Set your default screen
//         drawerContent={props => <CustomDrawer {...props} />}
//         screenOptions={{
//           headerShown: false,
//           drawerActiveBackgroundColor: '#aa18ea',
//           drawerActiveTintColor: '#fff',
//           drawerInactiveTintColor: '#333',
//           drawerLabelStyle: {
//             marginLeft: -25,
//             fontFamily: 'Roboto-Medium',
//             fontSize: 15,
//           },
//           drawerStyle: {
//             width: 250, // Set your drawer width
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             drawerIcon: ({ color }) => (
//               <Ionicons name="home-outline" size={22} color={color} />
//             ),
//             drawerLabel: 'Home', // Custom label
//           }}
//         />
//         <Drawer.Screen
//           name="LocationScreen"
//           component={LocationScreen}
//           options={{
//             drawerIcon: ({ color }) => (
//               <Ionicons name="location-outline" size={22} color={color} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="CategorySelection"
//           component={CategorySelection}
//           options={{
//             drawerIcon: ({ color }) => (
//               <Ionicons name="list-outline" size={22} color={color} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="PastiDiskon"
//           component={PastiDiskon}
//           options={{
//             drawerIcon: ({ color }) => (
//               <Ionicons name="pricetag-outline" size={22} color={color} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Signup"
//           component={Signup}
//           options={{
//             drawerIcon: ({ color }) => (
//               <Ionicons name="person-add-outline" size={22} color={color} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// };

// export default AppDrawer;








// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Import screens
// import Signup from '../Signup';
// import CategorySelection from '../categorySelection';
// import LocationScreen from '../LocationScreen';
// import PastiDiskon from '../pastiDiskon';
// import HomeScreen from '../Homescreen'; // Make sure this is correctly defined
// import SidebarMenu from '@/components/sidebarMenu';
// import CustomDrawer from '@/components/CustomDrawer';

// const Drawer = createDrawerNavigator();

// const AuthStack = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#aa18ea',
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#333',
//         drawerLabelStyle: {
//           marginLeft: -25,
//           fontFamily: 'Roboto-Medium',
//           fontSize: 15,
//         },
//       }}>
//       <Drawer.Screen
//         name="LocationScreen"
//         component={LocationScreen} 
//         options={{
//           drawerIcon: ({ color }) => (
//             <Ionicons name="home-outline" size={22} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default AuthStack;
