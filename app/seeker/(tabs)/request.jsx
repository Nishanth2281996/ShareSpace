import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../../src/components/states/EmptyState";

// Dummy request data for UI only
const requestData = [
  {
    id: "1",
    title: "Room in Colombo",
    location: "Colombo, Sri Lanka",
    status: "Pending",
  },
  {
    id: "2",
    title: "Apartment in Batticaloa",
    location: "Batticaloa, Sri Lanka",
    status: "Approved",
  },
  {
    id: "3",
    title: "Shared Room in Jaffna",
    location: "Jaffna, Sri Lanka",
    status: "Rejected",
  },
];

const request = () => {
  const getStatusStyle = (status) => {
    if (status === "Pending") {
      return {
        bg: "bg-[#FEF3C7]",
        text: "text-[#D97706]",
        icon: "time-outline",
      };
    }

    if (status === "Approved") {
      return {
        bg: "bg-[#DCFCE7]",
        text: "text-[#16A34A]",
        icon: "checkmark-circle-outline",
      };
    }

    return {
      bg: "bg-[#FEE2E2]",
      text: "text-[#DC2626]",
      icon: "close-circle-outline",
    };
  };

  const renderRequestCard = ({ item }) => {
    const statusStyle = getStatusStyle(item.status);

    return (
      <View className="mx-5 mb-4 rounded-[14px] border border-[#2DB0EF] bg-white p-4">
        <Text className="text-[16px] font-semibold text-[#5F5F5F]">
          {item.title}
        </Text>

        <View className="mt-2 flex-row items-center">
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text className="ml-2 text-[14px] text-[#6B7280]">
            {item.location}
          </Text>
        </View>

        <View className="mt-4 h-[1px] bg-[#E5E7EB]" />

        <View className="mt-4 flex-row items-center justify-between">
          <Text className="text-[14px] text-[#6B7280]">Request Status</Text>

          <View
            className={`flex-row items-center rounded-full px-3 py-2 ${statusStyle.bg}`}
          >
            <Ionicons
              name={statusStyle.icon}
              size={16}
              color={
                item.status === "Pending"
                  ? "#D97706"
                  : item.status === "Approved"
                    ? "#16A34A"
                    : "#DC2626"
              }
            />
            <Text
              className={`ml-2 text-[13px] font-medium ${statusStyle.text}`}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  if (requestData.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1 pt-4">
          <Text className="text-center text-[24px] font-bold text-[#2DB0EF]">
            Request Status
          </Text>

          <EmptyState
            icon="document-text-outline"
            title="No requests yet"
            message="Your room requests will appear here."
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 pt-4">
        {/* Title */}
        <Text className="text-center text-[24px] font-bold text-[#2DB0EF]">
          Request Status
        </Text>

        {/* Request list */}
        <FlatList
          data={requestData}
          keyExtractor={(item) => item.id}
          renderItem={renderRequestCard}
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

export default request;
