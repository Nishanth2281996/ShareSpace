import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const Roleselection = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        <View className="items-center pt-24">
          <Text className="text-[32px] font-bold text-[#2DB0EF]">
            Choose Your Role
          </Text>
        </View>
        <View className="flex-row justify-center mt-20" style={{ gap: 36 }}>
          <Pressable
            onPress={() => setSelectedRole("seeker")}
            className="w-[130px] h-[130px] rounded-[16px] bg-[#2DB0EF] items-center justify-center"
            style={{
              opacity: selectedRole === "seeker" ? 1 : 0.92,
              transform: [{ scale: selectedRole === "seeker" ? 1.02 : 1 }],
            }}
          >
            <Ionicons name="search" size={72} color="#fff" />
          </Pressable>

          <Pressable
            onPress={() => setSelectedRole("owner")}
            className="w-[130px] h-[130px] rounded-[16px] bg-[#2DB0EF] items-center justify-center"
            style={{
              opacity: selectedRole === "owner" ? 1 : 0.92,
              transform: [{ scale: selectedRole === "owner" ? 1.02 : 1 }],
            }}
          >
            <Ionicons name="home-outline" size={72} color="#fff" />
          </Pressable>
        </View>

        <View className="flex-1 justify-end items-center pb-16">
          <Pressable className="w-[252px] h-[48px] rounded-full bg-[#2DB0EF] items-center justify-center">
            <View className="flex-row items-center" style={{ gap: 10 }}>
              <Text className="text-white text-[24] font-normal">Continue</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Roleselection;
