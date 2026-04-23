import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mapViewScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-5 pt-4">
          <Pressable
            onPress={() => router.back()}
            className="h-[40px] w-[40px] items-center justify-center rounded-full bg-white"
          >
            <Ionicons name="arrow-back" size={22} color="#2DB0EF" />
          </Pressable>

          <Text className="ml-4 text-[20px] font-bold text-[#2DB0EF]">
            Map View
          </Text>
        </View>

        {/* Map Placeholder */}
        <View className="mx-5 mt-5 flex-1 items-center justify-center rounded-[20px] border border-[#D1D5DB] bg-[#E5E7EB]">
          <Ionicons name="map-outline" size={60} color="#2DB0EF" />

          <Text className="mt-4 text-[16px] text-[#5F5F5F]">
            Map will be shown here
          </Text>

          <Text className="mt-2 text-center text-[13px] text-[#9CA3AF] px-6">
            This will later be replaced with Google Maps integration
          </Text>
        </View>

        {/* Bottom Info Card */}
        <View className="mx-5 mb-5 mt-4 rounded-[16px] border border-[#2DB0EF] bg-white p-4">
          <Text className="text-[16px] font-semibold text-[#5F5F5F]">
            Selected Location
          </Text>

          <View className="mt-2 flex-row items-center">
            <Ionicons name="location-outline" size={18} color="#2DB0EF" />
            <Text className="ml-2 text-[14px] text-[#5F5F5F]">
              Colombo, Sri Lanka
            </Text>
          </View>

          {/* Button */}
          <Pressable
            onPress={() => router.back()}
            className="mt-4 h-[46px] items-center justify-center rounded-[12px] bg-[#2DB0EF]"
          >
            <Text className="text-white text-[15px] font-medium">
              Back to Details
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default mapViewScreen;
