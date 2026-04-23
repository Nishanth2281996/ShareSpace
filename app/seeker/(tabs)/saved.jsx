import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../../src/components/states/EmptyState";

// Dummy saved listings for UI only
const initialSavedListings = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    price: "LKR 25,000",
    location: "Colombo",
    match: "85%",
    roomType: "Single Room",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    price: "LKR 30,000",
    location: "Batticaloa",
    match: "80%",
    roomType: "Shared Room",
  },
];

const Saved = () => {
  const router = useRouter();
  const [savedListings, setSavedListings] = useState(initialSavedListings);

  const handleRemoveSaved = (id) => {
    // UI only remove action
    const updatedListings = savedListings.filter((item) => item.id !== id);
    setSavedListings(updatedListings);
  };

  const renderSavedCard = ({ item }) => {
    return (
      <Pressable
        onPress={() => router.push("/seeker/listingDetails")}
        className="mx-5 mb-4 rounded-[18px] border border-[#2DB0EF] bg-white p-3"
      >
        <View className="flex-row">
          {/* Listing image */}
          <Image
            source={{ uri: item.image }}
            className="h-[100px] w-[100px] rounded-[14px]"
            resizeMode="cover"
          />

          {/* Listing content */}
          <View className="ml-3 flex-1 justify-between">
            <View className="pr-8">
              {/* Price */}
              <Text className="text-[17px] font-bold text-[#3A3A3A]">
                {item.price}
              </Text>

              {/* Location */}
              <View className="mt-1 flex-row items-center">
                <Ionicons name="location-outline" size={15} color="#6B7280" />
                <Text className="ml-1 text-[14px] text-[#6B7280]">
                  {item.location}
                </Text>
              </View>

              {/* Room type */}
              <Text className="mt-2 text-[13px] font-medium text-[#2DB0EF]">
                {item.roomType}
              </Text>
            </View>

            {/* Bottom row */}
            <View className="mt-3 flex-row items-center justify-between">
              <Text className="text-[12px] text-[#9CA3AF]">Saved listing</Text>

              {/* Match badge */}
              <View className="rounded-full bg-[#E8F8EE] px-3 py-1">
                <Text className="text-[11px] font-semibold text-[#22A45D]">
                  {item.match} Match
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Saved heart button */}
        <Pressable
          onPress={() => handleRemoveSaved(item.id)}
          className="absolute right-3 top-3 h-8 w-8 items-center justify-center rounded-full bg-white"
        >
          <Ionicons name="heart" size={20} color="#EF4444" />
        </Pressable>
      </Pressable>
    );
  };

  if (savedListings.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-4">
          {/* Title */}
          <Text className="text-center text-[24px] font-bold text-[#2DB0EF]">
            Saved Listings
          </Text>

          <View className="flex-1 justify-center px-5">
            <EmptyState
              icon="heart-outline"
              title="No saved listings yet"
              message="Listings you save will appear here."
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 pt-4">
        {/* Title */}
        <Text className="text-center text-[24px] font-bold text-[#2DB0EF]">
          Saved Listings
        </Text>

        {/* Saved cards */}
        <FlatList
          data={savedListings}
          keyExtractor={(item) => item.id}
          renderItem={renderSavedCard}
          contentContainerStyle={{
            paddingTop: 22,
            paddingBottom: 28,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Saved;
