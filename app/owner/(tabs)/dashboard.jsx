import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dashboard = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 px-3 pt-6">
        {/* Screen title */}
        <Text className="text-[22px] font-bold text-[#2DB0EF] text-center">
          Dashboard
        </Text>

        {/* Summary cards */}
        <View className="flex-row justify-between mt-10">
          {/* Total listings card */}
          <View className="w-[48%] rounded-[12px] border border-[#2DB0EF] bg-white px-3 py-4">
            <View className="flex-row items-center">
              <Ionicons name="home-outline" size={24} color="#2DB0EF" />
              <Text className="ml-2 text-[14px] text-black">
                Total Listings
              </Text>
            </View>
            <Text className="text-[32px] text-center text-black mt-3">3</Text>
          </View>

          {/* Pending requests card */}
          <View className="w-[48%] rounded-[12px] border border-[#2DB0EF] bg-white px-3 py-4">
            <View className="flex-row items-center">
              <Ionicons name="mail-outline" size={24} color="#2DB0EF" />
              <Text className="ml-2 text-[14px] text-black">
                Pending Requests
              </Text>
            </View>
            <Text className="text-[32px] text-center text-black mt-3">5</Text>
          </View>
        </View>

        {/* Action buttons */}
        <View className="mt-12" style={{ gap: 22 }}>
          {/* Create listing button */}
          <Pressable
            onPress={() => router.push("/owner/create-listing/step1")}
            className="h-[52px] rounded-[12px] border border-[#2DB0EF] bg-white flex-row items-center justify-center"
          >
            <Ionicons name="add-circle-outline" size={24} color="#2DB0EF" />
            <Text className="ml-3 text-[16px] text-black">Create Listings</Text>
          </Pressable>

          {/* Manage listings button */}
          <Pressable
            onPress={() => router.push("/owner/listings")}
            className="h-[52px] rounded-[12px] border border-[#2DB0EF] bg-white flex-row items-center justify-center"
          >
            <Ionicons name="list-outline" size={24} color="#2DB0EF" />
            <Text className="ml-3 text-[16px] text-black">Manage Listings</Text>
          </Pressable>

          {/* Manage requests button */}
          <Pressable
            onPress={() => router.push("/owner/requests")}
            className="h-[52px] rounded-[12px] border border-[#2DB0EF] bg-white flex-row items-center justify-center"
          >
            <Ionicons name="mail-outline" size={24} color="#2DB0EF" />
            <Text className="ml-3 text-[16px] text-black">Manage Requests</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default dashboard;
