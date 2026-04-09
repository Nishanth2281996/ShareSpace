import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step2 = () => {
  const router = useRouter();

  // Get Step 1 data
  const params = useLocalSearchParams();

  // Step 2 local state
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  // Temporary photo add function
  const handleAddPhoto = () => {
    // Temporary dummy photo for UI testing
    const newPhoto = {
      id: Date.now().toString(),
      uri: "temp-photo-uri",
    };

    // Limit to 4 photos
    if (photos.length >= 4) {
      Alert.alert("Limit reached", "You can add only 4 photos.");
      return;
    }

    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  // Remove one photo
  const handleRemovePhoto = (photoId) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((photo) => photo.id !== photoId),
    );
  };

  // Temporary map picker function
  const handlePickLocation = () => {
    // Temporary dummy coordinates for UI testing
    setLocation({
      latitude: 7.717,
      longitude: 81.7,
    });

    Alert.alert("Location Selected", "Temporary map location saved.");
  };

  // Go to Step 3 with Step 1 + Step 2 data
  const handleNext = () => {
    router.push({
      pathname: "/owner/create-listing/step3",
      params: {
        ...params,
        city,
        area,
        photos: JSON.stringify(photos),
        latitude: location.latitude !== null ? String(location.latitude) : "",
        longitude:
          location.longitude !== null ? String(location.longitude) : "",
      },
    });
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

        <View className="mt-10">
          {/* City / District */}
          <Text className="text-[16px] font-semibold text-[#5F5F5F]">
            City / District
          </Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter city or district"
            placeholderTextColor="#9A9A9A"
            className="mt-4 h-[48px] rounded-[2px] border border-[#7A7A7A] bg-white px-3 text-[15px] text-black"
          />

          {/* Area / Landmark */}
          <Text className="mt-8 text-[16px] font-semibold text-[#5F5F5F]">
            Area / Landmark
          </Text>
          <TextInput
            value={area}
            onChangeText={setArea}
            placeholder="Enter area or landmark"
            placeholderTextColor="#9A9A9A"
            className="mt-4 h-[48px] rounded-[2px] border border-[#7A7A7A] bg-white px-3 text-[15px] text-black"
          />

          {/* Upload Photos */}
          <Text className="mt-8 text-[16px] font-semibold text-[#5F5F5F]">
            Upload Photos
          </Text>

          <View className="mt-5 flex-row justify-between">
            {[0, 1, 2, 3].map((index) => {
              const photo = photos[index];

              return (
                <View
                  key={index}
                  className="h-[72px] w-[72px] items-center justify-center border border-[#8A8A8A] bg-white"
                >
                  {photo ? (
                    <Pressable
                      onPress={() => handleRemovePhoto(photo.id)}
                      className="items-center justify-center"
                    >
                      <Ionicons
                        name="image-outline"
                        size={28}
                        color="#2DB0EF"
                      />
                      <Text className="mt-1 text-[10px] text-[#5F5F5F]">
                        Photo {index + 1}
                      </Text>
                      <Text className="text-[9px] text-red-500">Remove</Text>
                    </Pressable>
                  ) : (
                    <Ionicons name="add" size={34} color="#B0B0B0" />
                  )}
                </View>
              );
            })}
          </View>

          {/* Add Photo button */}
          <Pressable
            onPress={handleAddPhoto}
            className="mt-6 h-[44px] flex-row items-center justify-center rounded-[2px] border border-[#2DB0EF] bg-white"
          >
            <Ionicons name="add-circle-outline" size={22} color="#2DB0EF" />
            <Text className="ml-2 text-[16px] text-[#6B6B6B]">Add Photo</Text>
          </Pressable>

          {/* Map section */}
          <Text className="mt-10 text-[16px] font-semibold text-[#5F5F5F]">
            Pick the Location on the Map
          </Text>

          <Pressable
            onPress={handlePickLocation}
            className="mt-5 h-[190px] items-center justify-center rounded-[2px] border border-[#7A7A7A] bg-white"
          >
            <Ionicons name="location-outline" size={40} color="#2DB0EF" />
            <Text className="mt-2 text-[15px] text-[#5F5F5F]">
              Tap to select location
            </Text>

            {location.latitude !== null && location.longitude !== null && (
              <View className="mt-3 items-center">
                <Text className="text-[13px] text-[#5F5F5F]">
                  Latitude: {location.latitude}
                </Text>
                <Text className="text-[13px] text-[#5F5F5F]">
                  Longitude: {location.longitude}
                </Text>
              </View>
            )}
          </Pressable>
        </View>

        {/* Next button */}
        <View className="mt-auto pb-8">
          <Pressable
            onPress={handleNext}
            className="h-[52px] items-center justify-center rounded-[10px] bg-[#2DB0EF]"
          >
            <Text className="text-[16px] font-medium text-white">Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step2;
