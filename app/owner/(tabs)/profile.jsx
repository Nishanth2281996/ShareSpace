import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../../src/components/states/EmptyState";
import ErrorState from "../../../src/components/states/ErrorState";
import LoadingState from "../../../src/components/states/LoadingState";

const initialProfileData = {
  fullName: "Name",
  email: "email@email.com",
  phoneNumber: "+94 123123123",
  profileImage:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
};

const Profile = () => {
  const router = useRouter();

  // Temporary UI states for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);

  const handleLogout = () => {
    // UI only for now
    console.log("Logout pressed");
  };

  const handleRetry = () => {
    setError(false);
    setLoading(false);
  };

  // Loading state
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 px-5 pt-4">
          <Text className="text-center text-[22px] font-bold text-[#5F5F5F]">
            Profile
          </Text>

          <LoadingState message="Loading profile..." />
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 px-5 pt-4">
          <Text className="text-center text-[22px] font-bold text-[#5F5F5F]">
            Profile
          </Text>

          <ErrorState
            title="Failed to load profile"
            message="Something went wrong while loading your profile."
            onRetry={handleRetry}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Empty state
  if (!profileData) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 px-5 pt-4">
          <Text className="text-center text-[22px] font-bold text-[#5F5F5F]">
            Profile
          </Text>

          <EmptyState
            icon="person-outline"
            title="Profile not available"
            message="Your profile details are not available right now."
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 px-5 pt-4">
        {/* Title */}
        <Text className="text-center text-[22px] font-bold text-[#5F5F5F]">
          Profile
        </Text>

        {/* Profile image */}
        <View className="mt-8 items-center">
          <Image
            source={{ uri: profileData.profileImage }}
            className="h-[180px] w-[180px] rounded-full"
          />
        </View>

        {/* User info */}
        <View className="mt-5 items-center">
          <Text className="text-[22px] text-[#5F5F5F]">
            {profileData.fullName}
          </Text>
          <Text className="mt-1 text-[16px] text-[#9A9A9A]">
            {profileData.email}
          </Text>
          <Text className="mt-1 text-[16px] text-[#9A9A9A]">
            {profileData.phoneNumber}
          </Text>
        </View>

        {/* Divider */}
        <View className="mt-8 h-[1px] bg-[#7A7A7A]" />

        {/* Buttons */}
        <View className="mt-7" style={{ gap: 18 }}>
          {/* Edit profile */}
          <Pressable
            onPress={() => router.push("/owner/editProfile")}
            className="h-[50px] flex-row items-center justify-center rounded-[4px] bg-[#2DB0EF]"
          >
            <Ionicons name="create-outline" size={22} color="white" />
            <Text className="ml-3 text-[16px] text-white">Edit Profile</Text>
          </Pressable>

          {/* Logout */}
          <Pressable
            onPress={handleLogout}
            className="h-[50px] flex-row items-center justify-center rounded-[4px] border border-[#2E2E2E] bg-white"
          >
            <Ionicons name="log-out-outline" size={22} color="#D91717" />
            <Text className="ml-3 text-[16px] font-semibold text-[#D91717]">
              Log out
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
