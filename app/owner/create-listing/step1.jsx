import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const step1 = () => {
  const router = useRouter();

  // Store form values
  const [roomTitle, setRoomTitle] = useState("");
  const [roomType, setRoomType] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 px-4 pt-4">
        {/* Header */}
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#2DB0EF" />
          </Pressable>

          <Text className="ml-8 text-[20px] font-bold text-[#2DB0EF]">
            Create Listing
          </Text>
        </View>

        {/* Form */}
        <View className="mt-10">
          {/* Room title */}
          <Text className="text-[16px] font-semibold text-[#5F5F5F]">
            Room Title
          </Text>
          <TextInput
            value={roomTitle}
            onChangeText={setRoomTitle}
            className="mt-4 h-[48px] rounded-[2px] border border-[#7A7A7A] bg-white px-3 text-[15px] text-black"
          />

          {/* Room type */}
          <Text className="mt-7 text-[16px] text-[#5F5F5F]">Room Type</Text>

          <View className="mt-4" style={{ gap: 10 }}>
            <Pressable
              onPress={() => setRoomType("single")}
              className="flex-row items-center"
            >
              <Ionicons
                name={
                  roomType === "single"
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={22}
                color="#6B6B6B"
              />
              <Text className="ml-3 text-[16px] text-[#5F5F5F]">
                Single Room
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setRoomType("shared")}
              className="flex-row items-center"
            >
              <Ionicons
                name={
                  roomType === "shared"
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={22}
                color="#6B6B6B"
              />
              <Text className="ml-3 text-[16px] text-[#5F5F5F]">
                Shared Room
              </Text>
            </Pressable>
          </View>

          {/* Monthly rent */}
          <Text className="mt-8 text-[16px] font-semibold text-[#5F5F5F]">
            Monthly Rent
          </Text>
          <TextInput
            value={monthlyRent}
            onChangeText={setMonthlyRent}
            placeholder="LKR"
            placeholderTextColor="#9A9A9A"
            keyboardType="numeric"
            className="mt-4 h-[48px] rounded-[2px] border border-[#7A7A7A] bg-white px-3 text-[15px] text-black"
          />

          {/* Description */}
          <Text className="mt-8 text-[16px] font-semibold text-[#5F5F5F]">
            Description
          </Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Enter the brief Description of your Room..."
            placeholderTextColor="#B0B0B0"
            multiline
            maxLength={300}
            textAlignVertical="top"
            className="mt-4 h-[230px] rounded-[2px] border border-[#7A7A7A] bg-white px-3 py-3 text-[14px] text-black"
          />
          <Text className="mt-1 text-[13px] text-[#8A8A8A]">
            Max 300 Characters
          </Text>
        </View>

        {/* Next button */}
        <View className="mt-auto pb-8">
          <Pressable
            onPress={() => router.push("/owner/create-listing/step2")}
            className="h-[52px] items-center justify-center rounded-[10px] bg-[#2DB0EF]"
          >
            <Text className="text-[16px] font-medium text-white">Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default step1;
