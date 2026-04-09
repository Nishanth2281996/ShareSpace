import { ActivityIndicator, Text, View } from "react-native";

const LoadingState = ({ message = "Loading..." }) => {
  return (
    <View className="flex-1 items-center justify-center px-6">
      {/* Loading spinner */}
      <ActivityIndicator size="large" color="#2DB0EF" />

      {/* Loading text */}
      <Text className="mt-4 text-center text-[16px] text-[#5F5F5F]">
        {message}
      </Text>
    </View>
  );
};

export default LoadingState;
