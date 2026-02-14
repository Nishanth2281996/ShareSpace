import { Pressable, StyleSheet, Text } from "react-native";

const PrimaryButton = ({ label, onPress }) => {
  return (
    <Pressable
      className="w-full rounded-[16px] bg-[#2DB0EF] items-center h-54 justify-center"
      style={styles.buttonStyle}
      onPress={onPress}
    >
      <Text className="text-white text-[18px] font-medium">{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
  },
});
