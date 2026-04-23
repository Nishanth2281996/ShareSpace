import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PreferencesStep2 = () => {
  const router = useRouter();

  // UI-only local state for now
  const [aboutMe, setAboutMe] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFileUri, setSelectedFileUri] = useState("");

  const handleUploadDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/jpeg", "image/png"],
        copyToCacheDirectory: true,
        multiple: false,
      });

      // User cancelled the picker
      if (result.canceled) {
        return;
      }

      const file = result.assets?.[0];

      if (!file) {
        return;
      }

      // Save file details in local state
      setSelectedFileName(file.name || "Selected document");
      setSelectedFileUri(file.uri || "");
    } catch (error) {
      Alert.alert(
        "Upload failed",
        "Could not pick the document. Please try again.",
      );
      console.log("Document picker error:", error);
    }
  };

  const handleSaveChanges = () => {
    // UI/navigation only for now
    router.push("/seeker/(tabs)/profile");
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
              Final Details
            </Text>

            <Text className="mt-2 text-[14px] leading-6 text-[#6B7280]">
              Add a short introduction about yourself and upload your
              verification document to complete your preferences profile.
            </Text>
          </View>

          {/* About Me */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              About Me
            </Text>

            <Text className="mt-2 text-[13px] leading-5 text-[#6B7280]">
              Write a short description about yourself. This can help with
              future matching and profile completion.
            </Text>

            <TextInput
              value={aboutMe}
              onChangeText={setAboutMe}
              placeholder="Tell us a little about yourself..."
              placeholderTextColor="#9CA3AF"
              multiline
              textAlignVertical="top"
              className="mt-4 min-h-[180px] rounded-[16px] border border-[#D1D5DB] bg-[#FAFAFA] px-4 py-4 text-[15px] text-black"
            />
          </View>

          {/* Verification Document */}
          <View className="mt-6 rounded-[22px] bg-white px-4 py-5">
            <Text className="text-[16px] font-semibold text-[#3A3A3A]">
              Verification Document
            </Text>

            <Text className="mt-2 text-[13px] leading-5 text-[#6B7280]">
              Upload your student ID or work ID. Supported formats: PDF, JPG,
              PNG.
            </Text>

            <Pressable
              onPress={handleUploadDocument}
              className="mt-4 flex-row items-center justify-between rounded-[16px] border border-dashed border-[#2DB0EF] bg-[#F8FCFE] px-4 py-4"
            >
              <View className="flex-1 pr-3">
                <Text className="text-[14px] font-medium text-[#3A3A3A]">
                  {selectedFileName || "Upload your verification document"}
                </Text>

                <Text className="mt-1 text-[12px] text-[#6B7280]">
                  PDF / JPG / PNG
                </Text>
              </View>

              <View className="h-[40px] w-[40px] items-center justify-center rounded-full bg-[#2DB0EF]">
                <Ionicons name="cloud-upload-outline" size={20} color="white" />
              </View>
            </Pressable>

            {/* Show chosen file info */}
            {!!selectedFileName && (
              <View className="mt-4 rounded-[14px] bg-[#EAF7FE] px-4 py-3">
                <Text className="text-[13px] font-semibold text-[#2DB0EF]">
                  Selected File
                </Text>

                <Text className="mt-1 text-[13px] text-[#3A3A3A]">
                  {selectedFileName}
                </Text>

                {!!selectedFileUri && (
                  <Text className="mt-1 text-[12px] text-[#6B7280]">
                    URI: {selectedFileUri}
                  </Text>
                )}
              </View>
            )}
          </View>

          {/* Save button */}
          <Pressable
            onPress={handleSaveChanges}
            className="mt-8 h-[52px] items-center justify-center rounded-[16px] bg-[#2DB0EF]"
          >
            <Text className="text-[16px] font-semibold text-white">
              Save Changes
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreferencesStep2;
