import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const defaultFacilities = [
  "Wifi",
  "Kitchen",
  "Attached Bathroom",
  "A/C",
  "Parking",
  "Laundry",
];

const step3 = () => {
  const router = useRouter();

  // Get data from Step 1 and Step 2
  const params = useLocalSearchParams();

  // Store selected facilities
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  // Store custom facility input
  const [customFacility, setCustomFacility] = useState("");

  // Store verification document
  const [verificationDocument, setVerificationDocument] = useState(null);

  // Select or unselect default facilities
  const toggleFacility = (facility) => {
    setSelectedFacilities((prevFacilities) =>
      prevFacilities.includes(facility)
        ? prevFacilities.filter((item) => item !== facility)
        : [...prevFacilities, facility],
    );
  };

  // Add custom facility
  const handleAddFacility = () => {
    const trimmedFacility = customFacility.trim();

    if (!trimmedFacility) {
      return;
    }

    if (selectedFacilities.includes(trimmedFacility)) {
      setCustomFacility("");
      return;
    }

    setSelectedFacilities((prevFacilities) => [
      ...prevFacilities,
      trimmedFacility,
    ]);
    setCustomFacility("");
  };

  // Remove selected facility tag
  const handleRemoveFacility = (facility) => {
    setSelectedFacilities((prevFacilities) =>
      prevFacilities.filter((item) => item !== facility),
    );
  };

  // Temporary document picker
  const handlePickDocument = () => {
    // Temporary dummy file for UI testing
    setVerificationDocument({
      name: "utility_bill.pdf",
    });

    Alert.alert("Document Selected", "Temporary verification document added.");
  };

  // Temporary publish action
  const handlePublishListing = () => {
    const listingData = {
      ...params,
      facilities: selectedFacilities,
      verificationDocument,
    };

    Alert.alert("Listing Ready", "UI is complete. Next step is Firebase save.");

    console.log("Final Listing Data:", listingData);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1 px-4 pt-4">
        {/* Header */}
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#2DB0EF" />
          </Pressable>

          <Text className="ml-8 text-[20px] font-bold text-[#2DB0EF]">
            Create Listing
          </Text>
        </View>

        <View className="mt-12">
          {/* Facilities title */}
          <Text className="text-[16px] font-semibold text-[#5F5F5F]">
            Facilities
          </Text>

          {/* Default facilities */}
          <View className="mt-5 flex-row justify-between">
            <View style={{ gap: 14 }}>
              {defaultFacilities.slice(0, 3).map((facility) => (
                <Pressable
                  key={facility}
                  onPress={() => toggleFacility(facility)}
                  className="flex-row items-center"
                >
                  <Ionicons
                    name={
                      selectedFacilities.includes(facility)
                        ? "checkbox-outline"
                        : "square-outline"
                    }
                    size={20}
                    color="#6B6B6B"
                  />
                  <Text className="ml-3 text-[16px] text-[#5F5F5F]">
                    {facility}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={{ gap: 14 }}>
              {defaultFacilities.slice(3).map((facility) => (
                <Pressable
                  key={facility}
                  onPress={() => toggleFacility(facility)}
                  className="flex-row items-center"
                >
                  <Ionicons
                    name={
                      selectedFacilities.includes(facility)
                        ? "checkbox-outline"
                        : "square-outline"
                    }
                    size={20}
                    color="#6B6B6B"
                  />
                  <Text className="ml-3 text-[16px] text-[#5F5F5F]">
                    {facility}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Add other facilities */}
          <View className="mt-6 flex-row items-center justify-between">
            <TextInput
              value={customFacility}
              onChangeText={setCustomFacility}
              placeholder="Add other Facilities"
              placeholderTextColor="#9A9A9A"
              className="h-[40px] w-[74%] border border-[#7A7A7A] bg-white px-3 text-[14px] text-black"
            />

            <Pressable
              onPress={handleAddFacility}
              className="h-[40px] w-[20%] items-center justify-center border border-[#2DB0EF] bg-white"
            >
              <Text className="text-[15px] text-[#6B6B6B]">Add</Text>
            </Pressable>
          </View>

          {/* Selected facility tags */}
          <View className="mt-7 flex-row flex-wrap" style={{ gap: 12 }}>
            {selectedFacilities
              .filter((facility) => !defaultFacilities.includes(facility))
              .map((facility) => (
                <Pressable
                  key={facility}
                  onPress={() => handleRemoveFacility(facility)}
                  className="flex-row items-center bg-[#2DB0EF] px-3 py-1"
                >
                  <Text className="text-[14px] text-white">{facility}</Text>
                  <Text className="ml-1 text-[14px] text-white">×</Text>
                </Pressable>
              ))}
          </View>

          {/* Verification document */}
          <Text className="mt-12 text-[16px] font-semibold text-[#5F5F5F]">
            Verification Document
          </Text>

          <Pressable
            onPress={handlePickDocument}
            className="mt-4 h-[48px] flex-row items-center justify-between border border-[#7A7A7A] bg-white px-3"
          >
            <View className="flex-1 pr-3">
              <Text className="text-[13px] text-[#9A9A9A]">
                {verificationDocument
                  ? verificationDocument.name
                  : "Utility bill (Electric/Water) / tax receipt) \n(PDF / JPG / PNG)"}
              </Text>
            </View>

            <View className="h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-[#2DB0EF]">
              <Ionicons name="cloud-upload-outline" size={18} color="white" />
            </View>
          </Pressable>
        </View>

        {/* Publish button */}
        <View className="mt-auto pb-8">
          <Pressable
            onPress={handlePublishListing}
            className="h-[52px] items-center justify-center rounded-[10px] bg-[#2DB0EF]"
          >
            <Text className="text-[16px] font-medium text-white">
              Publish Listings
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default step3;
