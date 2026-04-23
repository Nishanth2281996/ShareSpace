import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const listingDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top image section */}
        <View className="relative">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
            }}
            className="h-[260px] w-full"
            resizeMode="cover"
          />

          {/* Back button */}
          <Pressable
            onPress={() => router.back()}
            className="absolute left-4 top-4 h-[40px] w-[40px] items-center justify-center rounded-full bg-white"
          >
            <Ionicons name="arrow-back" size={22} color="#2DB0EF" />
          </Pressable>

          {/* Save button */}
          <Pressable className="absolute right-4 top-4 h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
            <Ionicons name="heart-outline" size={22} color="#2DB0EF" />
          </Pressable>
        </View>

        {/* Content card */}
        <View className="mt-[-18px] rounded-t-[24px] bg-white px-5 pt-5 pb-7">
          {/* Price and match */}
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-[24px] font-bold text-[#5F5F5F]">
                LKR 25,000
              </Text>

              <View className="mt-2 flex-row items-center">
                <Ionicons name="location-outline" size={18} color="#6B7280" />
                <Text className="ml-2 text-[15px] text-[#6B7280]">
                  Colombo, Sri Lanka
                </Text>
              </View>
            </View>

            <View className="rounded-[10px] bg-[#34C759] px-3 py-2">
              <Text className="text-[12px] font-medium text-white">
                Match 85%
              </Text>
            </View>
          </View>

          {/* Room info row */}
          <View className="mt-5 flex-row justify-between rounded-[14px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-4">
            <View className="items-center">
              <Ionicons name="bed-outline" size={22} color="#2DB0EF" />
              <Text className="mt-2 text-[13px] text-[#5F5F5F]">1 Room</Text>
            </View>

            <View className="items-center">
              <Ionicons name="water-outline" size={22} color="#2DB0EF" />
              <Text className="mt-2 text-[13px] text-[#5F5F5F]">1 Bath</Text>
            </View>

            <View className="items-center">
              <Ionicons name="car-outline" size={22} color="#2DB0EF" />
              <Text className="mt-2 text-[13px] text-[#5F5F5F]">Parking</Text>
            </View>

            <View className="items-center">
              <Ionicons name="wifi-outline" size={22} color="#2DB0EF" />
              <Text className="mt-2 text-[13px] text-[#5F5F5F]">WiFi</Text>
            </View>
          </View>

          {/* Description */}
          <View className="mt-6">
            <Text className="text-[18px] font-semibold text-[#5F5F5F]">
              Description
            </Text>

            <Text className="mt-3 text-[15px] leading-6 text-[#6B7280]">
              A clean and comfortable rental space located in a peaceful area.
              This place includes a bedroom, kitchen access, bathroom, and
              essential facilities for daily living. It is suitable for students
              or working individuals looking for a convenient and safe place to
              stay.
            </Text>
          </View>

          {/* Facilities */}
          <View className="mt-6">
            <Text className="text-[18px] font-semibold text-[#5F5F5F]">
              Facilities
            </Text>

            <View className="mt-3 flex-row flex-wrap" style={{ gap: 10 }}>
              <View className="rounded-full border border-[#2DB0EF] px-4 py-2">
                <Text className="text-[13px] text-[#2DB0EF]">WiFi</Text>
              </View>

              <View className="rounded-full border border-[#2DB0EF] px-4 py-2">
                <Text className="text-[13px] text-[#2DB0EF]">Parking</Text>
              </View>

              <View className="rounded-full border border-[#2DB0EF] px-4 py-2">
                <Text className="text-[13px] text-[#2DB0EF]">Water</Text>
              </View>

              <View className="rounded-full border border-[#2DB0EF] px-4 py-2">
                <Text className="text-[13px] text-[#2DB0EF]">Kitchen</Text>
              </View>
            </View>
          </View>

          {/* Map section */}
          <View className="mt-6">
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-semibold text-[#5F5F5F]">
                Location
              </Text>

              <Pressable onPress={() => router.push("/seeker/mapView")}>
                <Text className="text-[14px] font-medium text-[#2DB0EF]">
                  View Map
                </Text>
              </Pressable>
            </View>

            <Pressable
              onPress={() => router.push("/seeker/mapView")}
              className="mt-3 h-[140px] items-center justify-center rounded-[16px] border border-[#D1D5DB] bg-[#E5E7EB]"
            >
              <Ionicons name="map-outline" size={34} color="#2DB0EF" />
              <Text className="mt-2 text-[14px] text-[#5F5F5F]">
                Tap to open map view
              </Text>
            </Pressable>
          </View>

          {/* Request button */}
          <Pressable className="mt-8 h-[52px] items-center justify-center rounded-[14px] bg-[#2DB0EF]">
            <Text className="text-[16px] font-semibold text-white">
              Send Request
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default listingDetails;
