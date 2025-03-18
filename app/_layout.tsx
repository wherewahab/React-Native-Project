import { Stack } from "expo-router";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from "./Navigation/AuthStack";
export default function Layout() {
  return (
    <AuthStack />
  );
}
