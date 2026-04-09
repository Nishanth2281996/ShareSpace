import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

const ErrorState = ({
  title = "Something went wrong",
  message = "We could not load the data. Please try again.",
  buttonText = "Try Again",
  onRetry,
}) => {
  return (
    <View className="flex-1 items-center justify-center px-6">
      {/* Error icon */}
      <Ionicons name="alert-circle-outline" size={64} color="#D91717" />

      {/* Error title */}
      <Text className="mt-4 text-center text-[20px] font-semibold text-[#5F5F5F]">
        {title}
      </Text>

      {/* Error message */}
      <Text className="mt-2 text-center text-[15px] leading-6 text-[#8A8A8A]">
        {message}
      </Text>

      {/* Retry button */}
      {onRetry && (
        <Pressable
          onPress={onRetry}
          className="mt-6 h-[46px] min-w-[130px] items-center justify-center rounded-[10px] bg-[#2DB0EF] px-5"
        >
          <Text className="text-[15px] font-medium text-white">
            {buttonText}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default ErrorState;
