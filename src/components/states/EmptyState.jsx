import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const EmptyState = ({
  icon = "folder-open-outline",
  title = "No Data Found",
  message = "There is nothing to show right now.",
}) => {
  return (
    <View className="flex-1 items-center justify-center px-6">
      {/* Empty icon */}
      <Ionicons name={icon} size={64} color="#2DB0EF" />

      {/* Empty title */}
      <Text className="mt-4 text-center text-[20px] font-semibold text-[#5F5F5F]">
        {title}
      </Text>

      {/* Empty message */}
      <Text className="mt-2 text-center text-[15px] leading-6 text-[#8A8A8A]">
        {message}
      </Text>
    </View>
  );
};

export default EmptyState;
