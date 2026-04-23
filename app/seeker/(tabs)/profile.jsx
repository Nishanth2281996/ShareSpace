import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { logoutUser } from "../../../src/services/auth/auth.service";

const profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();

      // Redirect to login screen
      router.replace("/auth/loginScreen");
    } catch (error) {
      console.log("Logout failed:", error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 px-5 pt-4">
        {/* Title */}
        <Text className="text-center text-[24px] font-bold text-[#2DB0EF]">
          Profile
        </Text>

        {/* Profile image */}
        <View className="mt-8 items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
            }}
            className="h-[110px] w-[110px] rounded-full"
            resizeMode="cover"
          />

          <Text className="mt-4 text-[22px] font-semibold text-[#5F5F5F]">
            Nishanth
          </Text>

          <Text className="mt-1 text-[15px] text-[#9CA3AF]">
            seeker@email.com
          </Text>
        </View>

        {/* Action cards */}
        <View className="mt-10" style={{ gap: 14 }}>
          <Pressable
            onPress={() => router.push("/seeker/editProfile")}
            className="flex-row items-center justify-between rounded-[14px] bg-white px-4 py-4"
          >
            <View className="flex-row items-center">
              <View className="h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EAF7FE]">
                <Ionicons name="create-outline" size={20} color="#2DB0EF" />
              </View>
              <Text className="ml-3 text-[16px] font-medium text-[#5F5F5F]">
                Edit Profile
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </Pressable>

          <Pressable
            onPress={() => router.push("/seeker/preferences")}
            className="flex-row items-center justify-between rounded-[14px] bg-white px-4 py-4"
          >
            <View className="flex-row items-center">
              <View className="h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EAF7FE]">
                <Ionicons name="options-outline" size={20} color="#2DB0EF" />
              </View>
              <Text className="ml-3 text-[16px] font-medium text-[#5F5F5F]">
                Preferences
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </Pressable>

          <Pressable
            onPress={handleLogout}
            className="flex-row items-center justify-between rounded-[14px] bg-white px-4 py-4"
          >
            <View className="flex-row items-center">
              <View className="h-[42px] w-[42px] items-center justify-center rounded-full bg-[#FEF2F2]">
                <Ionicons name="log-out-outline" size={20} color="#EF4444" />
              </View>
              <Text className="ml-3 text-[16px] font-medium text-[#EF4444]">
                Logout
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
