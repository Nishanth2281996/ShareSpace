import { Stack } from "expo-router";

const SeekerLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tabs (Home, Saved, Request, Profile) */}
      <Stack.Screen name="(tabs)" />

      {/* Other seeker screens */}
      <Stack.Screen name="listingDetails" />
      <Stack.Screen name="mapView" />
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="preferences" />
      <Stack.Screen name="preferencesStep2" />
    </Stack>
  );
};

export default SeekerLayout;
