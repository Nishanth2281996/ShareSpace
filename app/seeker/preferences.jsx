import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Preferences = () => {
  const router = useRouter();

  // City input + selected cities
  const [cityInput, setCityInput] = useState("");
  const [preferredCities, setPreferredCities] = useState([
    "Colombo",
    "Batticaloa",
  ]);

  // Budget
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  // Room type
  const [selectedRoomType, setSelectedRoomType] = useState("Single");

  // Facilities
  const [selectedFacilities, setSelectedFacilities] = useState([
    "Wifi",
    "Parking",
  ]);
  const [customFacilityInput, setCustomFacilityInput] = useState("");

  const roomTypeOptions = ["Single", "Shared Room"];
  const facilityOptions = [
    "Wifi",
    "Attached Bathroom",
    "Parking",
    "Kitchen",
    "A/C",
    "Laundry",
  ];

  // Clean unique facilities for chip display
  const allSelectedFacilities = useMemo(() => {
    return [...new Set(selectedFacilities)];
  }, [selectedFacilities]);

  const handleAddCity = () => {
    const trimmedCity = cityInput.trim();

    // Prevent empty and duplicate cities
    if (!trimmedCity) return;
    if (
      preferredCities.some(
        (city) => city.toLowerCase() === trimmedCity.toLowerCase(),
      )
    ) {
      setCityInput("");
      return;
    }

    setPreferredCities((prev) => [...prev, trimmedCity]);
    setCityInput("");
  };

  const handleRemoveCity = (cityToRemove) => {
    setPreferredCities((prev) => prev.filter((city) => city !== cityToRemove));
  };

  const handleToggleFacility = (facilityName) => {
    setSelectedFacilities((prev) =>
      prev.includes(facilityName)
        ? prev.filter((item) => item !== facilityName)
        : [...prev, facilityName],
    );
  };

  const handleAddCustomFacility = () => {
    const trimmedFacility = customFacilityInput.trim();

    // Prevent empty and duplicate facilities
    if (!trimmedFacility) return;
    if (
      selectedFacilities.some(
        (facility) => facility.toLowerCase() === trimmedFacility.toLowerCase(),
      )
    ) {
      setCustomFacilityInput("");
      return;
    }

    setSelectedFacilities((prev) => [...prev, trimmedFacility]);
    setCustomFacilityInput("");
  };

  const handleRemoveFacility = (facilityToRemove) => {
    setSelectedFacilities((prev) =>
      prev.filter((facility) => facility !== facilityToRemove),
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View className="px-5 pt-4">
          {/* Header */}
          <View className="flex-row items-center">
            <Pressable
              onPress={() => router.back()}
              className="h-[42px] w-[42px] items-center justify-center rounded-full bg-white"
            >
              <Ionicons name="arrow-back" size={22} color="#2DB0EF" />
            </Pressable>

            <Text className="ml-4 text-[22px] font-bold text-[#2DB0EF]">
              Preferences
            </Text>
          </View>

          {/* Intro card */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Room Preferences
            </Text>

            <Text className="mt-2 text-[14px] leading-6 text-[#6B7280]">
              Set your preferred cities, budget, room type, and facilities to
              help us show better matching listings.
            </Text>
          </View>

          {/* Preferred Cities */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Preferred Cities
            </Text>

            <Text className="mt-2 text-[13px] leading-5 text-[#6B7280]">
              Add the cities where you want to find rooms. You can remove them
              anytime.
            </Text>

            {/* Add city row */}
            <View className="mt-4 flex-row items-center">
              <TextInput
                value={cityInput}
                onChangeText={setCityInput}
                placeholder="Enter a city"
                placeholderTextColor="#9CA3AF"
                className="flex-1 rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
              />

              <Pressable
                onPress={handleAddCity}
                className="ml-3 h-[52px] rounded-[16px] bg-[#2DB0EF] px-5 items-center justify-center"
              >
                <Text className="text-[15px] font-semibold text-white">
                  Add
                </Text>
              </Pressable>
            </View>

            {/* City chips */}
            <View className="mt-4 flex-row flex-wrap" style={{ gap: 10 }}>
              {preferredCities.map((city) => (
                <View
                  key={city}
                  className="flex-row items-center rounded-full bg-[#EAF7FE] px-4 py-2"
                >
                  <Text className="text-[14px] font-medium text-[#2DB0EF]">
                    {city}
                  </Text>

                  <Pressable
                    onPress={() => handleRemoveCity(city)}
                    className="ml-2"
                  >
                    <Ionicons name="close" size={16} color="#2DB0EF" />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>

          {/* Budget Range */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Budget Range
            </Text>

            <View className="mt-4" style={{ gap: 14 }}>
              <View>
                <Text className="mb-2 text-[14px] font-medium text-[#5F5F5F]">
                  Minimum Budget
                </Text>
                <TextInput
                  value={minBudget}
                  onChangeText={setMinBudget}
                  placeholder="Enter minimum budget"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  className="rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
                />
              </View>

              <View>
                <Text className="mb-2 text-[14px] font-medium text-[#5F5F5F]">
                  Maximum Budget
                </Text>
                <TextInput
                  value={maxBudget}
                  onChangeText={setMaxBudget}
                  placeholder="Enter maximum budget"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  className="rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
                />
              </View>
            </View>
          </View>

          {/* Room Type */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Room Type
            </Text>

            <View className="mt-4" style={{ gap: 12 }}>
              {roomTypeOptions.map((option) => {
                const isSelected = selectedRoomType === option;

                return (
                  <Pressable
                    key={option}
                    onPress={() => setSelectedRoomType(option)}
                    className={`flex-row items-center justify-between rounded-[16px] border px-4 py-4 ${
                      isSelected
                        ? "border-[#2DB0EF] bg-[#EAF7FE]"
                        : "border-[#E5E7EB] bg-[#FAFAFA]"
                    }`}
                  >
                    <Text
                      className={`text-[15px] ${
                        isSelected
                          ? "font-semibold text-[#2DB0EF]"
                          : "text-[#5F5F5F]"
                      }`}
                    >
                      {option}
                    </Text>

                    <Ionicons
                      name={isSelected ? "radio-button-on" : "radio-button-off"}
                      size={20}
                      color={isSelected ? "#2DB0EF" : "#9CA3AF"}
                    />
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Facilities */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Facilities
            </Text>

            <Text className="mt-2 text-[13px] leading-5 text-[#6B7280]">
              Select the facilities you need. You can also add your own custom
              facility.
            </Text>

            <View className="mt-4" style={{ gap: 12 }}>
              {facilityOptions.map((facility) => {
                const isSelected = selectedFacilities.includes(facility);

                return (
                  <Pressable
                    key={facility}
                    onPress={() => handleToggleFacility(facility)}
                    className={`flex-row items-center justify-between rounded-[16px] border px-4 py-4 ${
                      isSelected
                        ? "border-[#2DB0EF] bg-[#EAF7FE]"
                        : "border-[#E5E7EB] bg-[#FAFAFA]"
                    }`}
                  >
                    <Text
                      className={`text-[15px] ${
                        isSelected
                          ? "font-semibold text-[#2DB0EF]"
                          : "text-[#5F5F5F]"
                      }`}
                    >
                      {facility}
                    </Text>

                    <Ionicons
                      name={isSelected ? "checkbox" : "square-outline"}
                      size={20}
                      color={isSelected ? "#2DB0EF" : "#9CA3AF"}
                    />
                  </Pressable>
                );
              })}
            </View>

            {/* Add custom facility */}
            <View className="mt-4 flex-row items-center">
              <TextInput
                value={customFacilityInput}
                onChangeText={setCustomFacilityInput}
                placeholder="Add other facility"
                placeholderTextColor="#9CA3AF"
                className="flex-1 rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
              />

              <Pressable
                onPress={handleAddCustomFacility}
                className="ml-3 h-[52px] rounded-[16px] border border-[#2DB0EF] bg-white px-5 items-center justify-center"
              >
                <Text className="text-[15px] font-semibold text-[#2DB0EF]">
                  Add
                </Text>
              </Pressable>
            </View>

            {/* Facility chips */}
            <View className="mt-4 flex-row flex-wrap" style={{ gap: 10 }}>
              {allSelectedFacilities.map((facility) => (
                <View
                  key={facility}
                  className="flex-row items-center rounded-full bg-[#EAF7FE] px-4 py-2"
                >
                  <Text className="text-[14px] font-medium text-[#2DB0EF]">
                    {facility}
                  </Text>

                  <Pressable
                    onPress={() => handleRemoveFacility(facility)}
                    className="ml-2"
                  >
                    <Ionicons name="close" size={16} color="#2DB0EF" />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>

          {/* Next button */}
          <Pressable
            onPress={() => router.push("/seeker/preferencesStep2")}
            className="mt-8 h-[52px] items-center justify-center rounded-[16px] bg-[#2DB0EF]"
          >
            <Text className="text-[16px] font-semibold text-white">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Preferences;
