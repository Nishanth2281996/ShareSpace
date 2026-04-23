import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Dummy listing data for UI only
const initialListingsData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    price: "LKR 18,000",
    location: "Colombo",
    roomType: "Single",
    budgetValue: 18000,
    match: "85%",
    facilities: ["bed-outline", "water-outline", "wifi-outline"],
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    price: "LKR 25,000",
    location: "Batticaloa",
    roomType: "Shared",
    budgetValue: 25000,
    match: "80%",
    facilities: ["bed-outline", "car-outline", "wifi-outline"],
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    price: "LKR 32,000",
    location: "Jaffna",
    roomType: "Single",
    budgetValue: 32000,
    match: "78%",
    facilities: ["bed-outline", "water-outline", "wifi-outline"],
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    price: "LKR 42,000",
    location: "Kandy",
    roomType: "Shared",
    budgetValue: 42000,
    match: "82%",
    facilities: ["bed-outline", "car-outline", "wifi-outline"],
  },
];

// Filter options
const locationOptions = ["All", "Colombo", "Batticaloa", "Jaffna", "Kandy"];
const budgetOptions = [
  "All",
  "Below 20K",
  "20K - 30K",
  "30K - 40K",
  "Above 40K",
];
const roomTypeOptions = ["All", "Single", "Shared"];

const home = () => {
  const router = useRouter();

  // Local UI-only state
  const [savedIds, setSavedIds] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [selectedRoomType, setSelectedRoomType] = useState("All");
  const [activeFilter, setActiveFilter] = useState(null);

  // Toggle heart watchlist state
  const handleToggleSave = (listingId) => {
    setSavedIds((prev) =>
      prev.includes(listingId)
        ? prev.filter((id) => id !== listingId)
        : [...prev, listingId],
    );
  };

  // Open or close filter options
  const handleOpenFilter = (filterName) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  };

  // Return option list based on selected filter
  const getCurrentOptions = () => {
    if (activeFilter === "location") return locationOptions;
    if (activeFilter === "budget") return budgetOptions;
    if (activeFilter === "roomType") return roomTypeOptions;
    return [];
  };

  // Save selected filter option
  const handleSelectOption = (option) => {
    if (activeFilter === "location") {
      setSelectedLocation(option);
    } else if (activeFilter === "budget") {
      setSelectedBudget(option);
    } else if (activeFilter === "roomType") {
      setSelectedRoomType(option);
    }

    setActiveFilter(null);
  };

  // Filter listing data based on selected options
  const filteredListings = useMemo(() => {
    return initialListingsData.filter((item) => {
      const locationMatch =
        selectedLocation === "All" || item.location === selectedLocation;

      const roomTypeMatch =
        selectedRoomType === "All" || item.roomType === selectedRoomType;

      let budgetMatch = true;

      if (selectedBudget === "Below 20K") {
        budgetMatch = item.budgetValue < 20000;
      } else if (selectedBudget === "20K - 30K") {
        budgetMatch = item.budgetValue >= 20000 && item.budgetValue <= 30000;
      } else if (selectedBudget === "30K - 40K") {
        budgetMatch = item.budgetValue > 30000 && item.budgetValue <= 40000;
      } else if (selectedBudget === "Above 40K") {
        budgetMatch = item.budgetValue > 40000;
      }

      return locationMatch && roomTypeMatch && budgetMatch;
    });
  }, [selectedLocation, selectedBudget, selectedRoomType]);

  // Listing card UI
  const renderListingCard = ({ item }) => {
    const isSaved = savedIds.includes(item.id);

    return (
      <View className="mx-5 mb-4 rounded-[18px] border border-[#2DB0EF] bg-white p-3">
        {/* Card press area */}
        <Pressable onPress={() => router.push("/seeker/listingDetails")}>
          <View className="flex-row">
            {/* Image */}
            <Image
              source={{ uri: item.image }}
              className="h-[100px] w-[100px] rounded-[14px]"
              resizeMode="cover"
            />

            {/* Content */}
            <View className="ml-3 flex-1 justify-between pr-8">
              <View>
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
                  {item.roomType} Room
                </Text>
              </View>

              {/* Bottom row */}
              <View className="mt-3 flex-row items-center justify-between">
                {/* Facilities */}
                <View className="flex-row items-center" style={{ gap: 10 }}>
                  {item.facilities.map((iconName, index) => (
                    <Ionicons
                      key={index}
                      name={iconName}
                      size={18}
                      color="#6B7280"
                    />
                  ))}
                </View>

                {/* Match badge */}
                <View className="rounded-full bg-[#E8F8EE] px-3 py-1">
                  <Text className="text-[11px] font-semibold text-[#22A45D]">
                    {item.match} Match
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>

        {/* Heart button (FIXED POSITION) */}
        <Pressable
          onPress={() => handleToggleSave(item.id)}
          className="absolute right-3 top-3 h-8 w-8 items-center justify-center rounded-full bg-white"
        >
          <Ionicons
            name={isSaved ? "heart" : "heart-outline"}
            size={20}
            color={isSaved ? "#EF4444" : "#5F5F5F"}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 pt-4">
        {/* Title */}
        <Text className="text-center text-[24px] font-bold text-[#2DB0EF]">
          Share Space
        </Text>

        {/* Filter row */}
        <View className="mt-6 flex-row justify-between px-5">
          {/* Location filter */}
          <Pressable
            onPress={() => handleOpenFilter("location")}
            className="h-[42px] flex-1 flex-row items-center justify-center rounded-[10px] border border-[#BDBDBD] bg-white"
          >
            <Ionicons name="location-outline" size={16} color="#5F5F5F" />
            <Text className="mx-1 text-[13px] text-[#5F5F5F]">
              {selectedLocation}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#5F5F5F" />
          </Pressable>

          <View className="w-2" />

          {/* Budget filter */}
          <Pressable
            onPress={() => handleOpenFilter("budget")}
            className="h-[42px] flex-1 flex-row items-center justify-center rounded-[10px] border border-[#BDBDBD] bg-white"
          >
            <Ionicons name="wallet-outline" size={16} color="#5F5F5F" />
            <Text className="mx-1 text-[13px] text-[#5F5F5F]">
              {selectedBudget}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#5F5F5F" />
          </Pressable>

          <View className="w-2" />

          {/* Room type filter */}
          <Pressable
            onPress={() => handleOpenFilter("roomType")}
            className="h-[42px] flex-1 flex-row items-center justify-center rounded-[10px] border border-[#BDBDBD] bg-white"
          >
            <Ionicons name="home-outline" size={16} color="#5F5F5F" />
            <Text className="mx-1 text-[13px] text-[#5F5F5F]">
              {selectedRoomType}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#5F5F5F" />
          </Pressable>
        </View>

        {/* Option chips */}
        {activeFilter && (
          <View className="mx-5 mt-4 rounded-[12px] border border-[#2DB0EF] bg-white p-3">
            <View className="flex-row flex-wrap" style={{ gap: 10 }}>
              {getCurrentOptions().map((option) => (
                <Pressable
                  key={option}
                  onPress={() => handleSelectOption(option)}
                  className="rounded-full border border-[#2DB0EF] px-4 py-2"
                >
                  <Text className="text-[13px] text-[#2DB0EF]">{option}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Search button */}
        <Pressable className="mx-5 mt-5 h-[48px] items-center justify-center rounded-[12px] bg-[#2DB0EF]">
          <Text className="text-[16px] font-medium text-white">Search</Text>
        </Pressable>

        {/* Applied filters */}
        <View className="mx-5 mt-4 rounded-[12px] border border-[#2DB0EF] bg-white px-4 py-3">
          <Text className="text-[14px] font-medium text-[#2DB0EF]">
            Applied Filters :
          </Text>

          <Text className="mt-2 text-[13px] text-[#5F5F5F]">
            Location: {selectedLocation} | Budget: {selectedBudget} | Room Type:{" "}
            {selectedRoomType}
          </Text>
        </View>

        {/* Listing list */}
        <FlatList
          data={filteredListings}
          keyExtractor={(item) => item.id}
          renderItem={renderListingCard}
          contentContainerStyle={{
            paddingTop: 18,
            paddingBottom: 28,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default home;
