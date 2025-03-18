import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../Signup';
import CategorySelection from '../categorySelection';
const Stack = createNativeStackNavigator();
import LocationScreen from '../LocationScreen';
import PastiDiskon from '../pastiDiskon';
import HomeScreen from '../Homescreen';
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Homescreen" component={HomeScreen}  />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="categorySelection" component={CategorySelection} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      <Stack.Screen name="pastiDiskon" component={PastiDiskon} />
    </Stack.Navigator>
  );
};

export default AuthStack;