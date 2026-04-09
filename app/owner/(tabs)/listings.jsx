import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../../src/components/states/EmptyState";
import ErrorState from "../../../src/components/states/ErrorState";
import LoadingState from "../../../src/components/states/LoadingState";

const initialListingsData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    price: "xxxx Month",
    city: "City , Area",
    roomType: "BedRoom , Kitchen",
    date: "April 25 , 2025",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    price: "xxxx Month",
    city: "City , Area",
    roomType: "BedRoom , Kitchen",
    date: "April 25 , 2025",
  },
];

const listings = () => {
  const router = useRouter();

  // Temporary UI states for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listingsData, setListingsData] = useState(initialListingsData);

  // Temporary retry function
  const handleRetry = () => {
    setError(false);
    setLoading(false);
  };

  // Temporary delete function for UI testing
  const handleDelete = (listingId) => {
    setListingsData((prevListings) =>
      prevListings.filter((listing) => listing.id !== listingId),
    );
  };

  const renderListingCard = ({ item }) => {
    return (
      <View className="mx-3 mb-8 rounded-[12px] border border-[#2DB0EF] bg-white px-3 py-4">
        <View className="flex-row">
          {/* Listing image */}
          <Image
            source={{ uri: item.image }}
            className="h-[120px] w-[125px] rounded-[10px]"
            resizeMode="cover"
          />

          {/* Listing details */}
          <View className="ml-4 flex-1 justify-center">
            <Text className="text-[18px] text-[#5F5F5F]">{item.price}</Text>
            <Text className="mt-1 text-[18px] text-[#5F5F5F]">{item.city}</Text>
            <Text className="mt-1 text-[18px] text-[#5F5F5F]">
              {item.roomType}
            </Text>

            <View className="mt-4 flex-row">
              {/* Edit button */}
              <Pressable
                onPress={() => router.push("/owner/create-listing/step1")}
                className="h-[38px] w-[68px] items-center justify-center rounded-[4px] bg-[#153EAD]"
              >
                <Text className="text-[16px] text-white">Edit</Text>
              </Pressable>

              {/* Delete button */}
              <Pressable
                onPress={() => handleDelete(item.id)}
                className="ml-5 h-[38px] w-[68px] items-center justify-center rounded-[4px] bg-[#D91717]"
              >
                <Text className="text-[16px] text-white">Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Date */}
        <Text className="mt-4 text-[18px] text-[#5F5F5F]">{item.date}</Text>
      </View>
    );
  };

  // Loading state
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-5">
          <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
            Manage Listings
          </Text>

          <LoadingState message="Loading listings..." />
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-5">
          <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
            Manage Listings
          </Text>

          <ErrorState
            title="Failed to load listings"
            message="Something went wrong while loading your listings."
            onRetry={handleRetry}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Empty state
  if (listingsData.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-5">
          <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
            Manage Listings
          </Text>

          <EmptyState
            icon="home-outline"
            title="No listings yet"
            message="Create your first listing to see it here."
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 pt-5">
        {/* Screen title */}
        <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
          Manage Listings
        </Text>

        {/* Listings list */}
        <FlatList
          data={listingsData}
          keyExtractor={(item) => item.id}
          renderItem={renderListingCard}
          contentContainerStyle={{
            paddingTop: 28,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default listings;
