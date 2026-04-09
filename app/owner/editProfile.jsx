import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../src/components/states/EmptyState";
import ErrorState from "../../src/components/states/ErrorState";
import LoadingState from "../../src/components/states/LoadingState";

const initialProfileForm = {
  fullName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  verificationDocument: null,
};

const editProfile = () => {
  const router = useRouter();

  // Temporary UI states for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Store form values
  const [profileForm, setProfileForm] = useState(initialProfileForm);

  // Temporary retry action
  const handleRetry = () => {
    setError(false);
    setLoading(false);
  };

  // Update one form field
  const handleChange = (field, value) => {
    setProfileForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  // Temporary change photo action
  const handleChangePhoto = () => {
    Alert.alert("Change Photo", "Temporary photo action for UI testing.");
  };

  // Temporary document pick action
  const handlePickDocument = () => {
    handleChange("verificationDocument", "nic_document.pdf");
    Alert.alert("Document Selected", "Temporary verification document added.");
  };

  // Temporary date action
  const handlePickDate = () => {
    handleChange("dateOfBirth", "2000-05-24");
    Alert.alert("Date Selected", "Temporary date selected for UI testing.");
  };

  // Temporary save action
  const handleSaveChanges = () => {
    Alert.alert("Saved", "Profile UI is ready. Next step is Firebase update.");
  };

  // Loading state
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 px-4 pt-4">
          <View className="flex-row items-center">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={30} color="#6B6B6B" />
            </Pressable>

            <Text className="ml-10 text-[21px] text-[#5F5F5F]">
              Edit Profile
            </Text>
          </View>

          <LoadingState message="Loading profile form..." />
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 px-4 pt-4">
          <View className="flex-row items-center">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={30} color="#6B6B6B" />
            </Pressable>

            <Text className="ml-10 text-[21px] text-[#5F5F5F]">
              Edit Profile
            </Text>
          </View>

          <ErrorState
            title="Failed to load edit profile"
            message="Something went wrong while loading your profile form."
            onRetry={handleRetry}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Empty state
  if (!profileForm) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 px-4 pt-4">
          <View className="flex-row items-center">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={30} color="#6B6B6B" />
            </Pressable>

            <Text className="ml-10 text-[21px] text-[#5F5F5F]">
              Edit Profile
            </Text>
          </View>

          <EmptyState
            icon="create-outline"
            title="Profile form not available"
            message="Your profile details are not ready to edit right now."
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 px-4 pt-4">
        {/* Header */}
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#6B6B6B" />
          </Pressable>

          <Text className="ml-10 text-[21px] text-[#5F5F5F]">Edit Profile</Text>
        </View>

        {/* Profile image */}
        <View className="mt-8 items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
            }}
            className="h-[150px] w-[150px] rounded-full"
          />

          <Pressable
            onPress={handleChangePhoto}
            className="mt-5 h-[44px] w-[170px] items-center justify-center border border-[#2DB0EF] bg-white"
          >
            <Text className="text-[16px] text-[#2DB0EF]">Change Photo</Text>
          </Pressable>
        </View>

        {/* Form */}
        <View className="mt-6">
          {/* Full Name */}
          <Text className="text-[16px] text-[#5F5F5F]">Full Name</Text>
          <TextInput
            value={profileForm.fullName}
            onChangeText={(value) => handleChange("fullName", value)}
            className="mt-2 h-[42px] border border-[#8A8A8A] bg-white px-3 text-[15px] text-black"
          />

          {/* Email */}
          <Text className="mt-4 text-[16px] text-[#5F5F5F]">Email</Text>
          <TextInput
            value={profileForm.email}
            onChangeText={(value) => handleChange("email", value)}
            keyboardType="email-address"
            autoCapitalize="none"
            className="mt-2 h-[42px] border border-[#8A8A8A] bg-white px-3 text-[15px] text-black"
          />

          {/* Phone Number */}
          <Text className="mt-4 text-[16px] text-[#5F5F5F]">Phone Number</Text>
          <TextInput
            value={profileForm.phoneNumber}
            onChangeText={(value) => handleChange("phoneNumber", value)}
            keyboardType="phone-pad"
            className="mt-2 h-[42px] border border-[#8A8A8A] bg-white px-3 text-[15px] text-black"
          />

          {/* Date of birth */}
          <Text className="mt-4 text-[16px] text-[#5F5F5F]">Date Of Birth</Text>
          <Pressable
            onPress={handlePickDate}
            className="mt-2 h-[42px] flex-row items-center justify-between border border-[#8A8A8A] bg-white px-3"
          >
            <Text
              className={`text-[15px] ${
                profileForm.dateOfBirth ? "text-black" : "text-[#9A9A9A]"
              }`}
            >
              {profileForm.dateOfBirth || ""}
            </Text>
            <Ionicons name="calendar-outline" size={22} color="#8A8A8A" />
          </Pressable>

          {/* Verification Document */}
          <Text className="mt-4 text-[16px] text-[#5F5F5F]">
            Verification Document
          </Text>
          <Pressable
            onPress={handlePickDocument}
            className="mt-2 h-[48px] flex-row items-center justify-between border border-[#8A8A8A] bg-white px-3"
          >
            <View className="flex-1 pr-3">
              <Text className="text-[13px] text-[#9A9A9A]">
                {profileForm.verificationDocument ||
                  "Upload your NIC / Driving License\n(PDF / JPG / PNG)"}
              </Text>
            </View>

            <View className="h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-[#2DB0EF]">
              <Ionicons name="cloud-upload-outline" size={18} color="white" />
            </View>
          </Pressable>
        </View>

        {/* Save button */}
        <View className="mt-auto pb-6">
          <Pressable
            onPress={handleSaveChanges}
            className="h-[50px] items-center justify-center rounded-[10px] bg-[#2DB0EF]"
          >
            <Text className="text-[17px] text-white">Save Changes</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default editProfile;
