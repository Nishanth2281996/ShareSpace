import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
  const router = useRouter();

  // UI-only local state
  const [fullName, setFullName] = useState("Nishanth");
  const [email, setEmail] = useState("seeker@email.com");
  const [phone, setPhone] = useState("+94 77 123 4567");
  const [city, setCity] = useState("Batticaloa");

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View className="px-5 pt-4">
          {/* Header */}
          <View className="flex-row items-center">
            <Pressable
              onPress={() => router.back()}
              className="h-[42px] w-[42px] items-center justify-center rounded-full bg-white"
            >
              <Ionicons name="arrow-back" size={22} color="#2DB0EF" />
            </Pressable>

            <Text className="ml-4 text-[22px] font-bold text-[#2DB0EF]">
              Edit Profile
            </Text>
          </View>

          {/* Profile section card */}
          <View className="mt-8 items-center rounded-[22px] bg-white px-5 py-7">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
              }}
              className="h-[110px] w-[110px] rounded-full"
              resizeMode="cover"
            />

            <Pressable className="mt-4 rounded-full border border-[#2DB0EF] px-5 py-2">
              <Text className="text-[14px] font-medium text-[#2DB0EF]">
                Change Photo
              </Text>
            </Pressable>
          </View>

          {/* Form card */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Personal Information
            </Text>

            <View className="mt-5" style={{ gap: 16 }}>
              {/* Full name */}
              <View>
                <Text className="mb-2 text-[14px] font-medium text-[#5F5F5F]">
                  Full Name
                </Text>
                <TextInput
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Enter your full name"
                  placeholderTextColor="#9CA3AF"
                  className="rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
                />
              </View>

              {/* Email */}
              <View>
                <Text className="mb-2 text-[14px] font-medium text-[#5F5F5F]">
                  Email
                </Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
                />
              </View>

              {/* Phone */}
              <View>
                <Text className="mb-2 text-[14px] font-medium text-[#5F5F5F]">
                  Phone Number
                </Text>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                  className="rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
                />
              </View>

              {/* City */}
              <View>
                <Text className="mb-2 text-[14px] font-medium text-[#5F5F5F]">
                  City
                </Text>
                <TextInput
                  value={city}
                  onChangeText={setCity}
                  placeholder="Enter your city"
                  placeholderTextColor="#9CA3AF"
                  className="rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
                />
              </View>
            </View>
          </View>

          {/* Save button */}
          <Pressable className="mt-6 h-[52px] items-center justify-center rounded-[16px] bg-[#2DB0EF]">
            <Text className="text-[16px] font-semibold text-white">
              Save Changes
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
