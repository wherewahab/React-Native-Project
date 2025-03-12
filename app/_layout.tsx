import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="LocationScreen" options={{ headerShown: false }} />
      <Stack.Screen name="categorySelection" options={{ headerShown: false }} />
    </Stack>
  );
}
