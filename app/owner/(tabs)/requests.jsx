import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../../src/components/states/EmptyState";
import ErrorState from "../../../src/components/states/ErrorState";
import LoadingState from "../../../src/components/states/LoadingState";

const initialRequestsData = [
  {
    id: "1",
    name: "Seeker Name",
    room: "Room Title",
    moveIn: "24 May 2024",
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    id: "2",
    name: "Seeker Name",
    room: "Room Title",
    moveIn: "24 May 2024",
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
  },
];

const requests = () => {
  const router = useRouter();

  // Temporary UI states for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestsData, setRequestsData] = useState(initialRequestsData);

  // Temporary retry function
  const handleRetry = () => {
    setError(false);
    setLoading(false);
  };

  // Temporary remove function for UI testing
  const handleRemoveRequest = (requestId) => {
    setRequestsData((prevRequests) =>
      prevRequests.filter((request) => request.id !== requestId),
    );
  };

  const renderRequestCard = ({ item }) => {
    return (
      <View className="mx-4 mb-6 rounded-[12px] border border-[#2DB0EF] bg-white p-4">
        <View className="flex-row">
          {/* Profile image */}
          <Image
            source={{ uri: item.image }}
            className="h-[60px] w-[60px] rounded-full"
          />

          {/* Info */}
          <View className="ml-4 flex-1">
            <Text className="text-[18px] font-semibold text-[#2DB0EF]">
              {item.name}
            </Text>

            <Text className="mt-1 text-[15px] text-[#5F5F5F]">{item.room}</Text>

            <Text className="mt-1 text-[13px] text-[#8A8A8A]">
              Move-in : {item.moveIn}
            </Text>
          </View>

          {/* Message button */}
          <Pressable
            onPress={() => router.push("/owner/chat")}
            className="h-[32px] w-[80px] items-center justify-center rounded-[6px] bg-[#2DB0EF]"
          >
            <Text className="text-[13px] text-white">Message</Text>
          </Pressable>
        </View>

        {/* Bottom row */}
        <View className="mt-4 flex-row items-center justify-between">
          {/* Status */}
          <View className="rounded-[6px] bg-[#5AA469] px-3 py-1">
            <Text className="text-[14px] text-white">{item.status}</Text>
          </View>
        </View>
      </View>
    );
  };

  // Loading state
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-5">
          <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
            Request
          </Text>

          <LoadingState message="Loading requests..." />
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
            Request
          </Text>

          <ErrorState
            title="Failed to load requests"
            message="Something went wrong while loading your requests."
            onRetry={handleRetry}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Empty state
  if (requestsData.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-5">
          <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
            Request
          </Text>

          <EmptyState
            icon="mail-open-outline"
            title="No requests yet"
            message="Incoming seeker requests will appear here."
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 pt-5">
        {/* Title */}
        <Text className="text-center text-[22px] font-bold text-[#2DB0EF]">
          Request
        </Text>

        {/* List */}
        <FlatList
          data={requestsData}
          keyExtractor={(item) => item.id}
          renderItem={renderRequestCard}
          contentContainerStyle={{
            paddingTop: 25,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default requests;
