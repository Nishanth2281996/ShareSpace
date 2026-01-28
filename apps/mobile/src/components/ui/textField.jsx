import { StyleSheet, TextInput, View } from "react-native";

const TextField = ({
  icon = null,
  placeholder,
  secureTextEntry = False,
  keyboardType = "default",
}) => {
  return (
    <View
      className="flex-row items-center rounded-[16px] h-[52px] bg-white"
      style={styles.border}
    >
      {icon}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        className="flex-1 ml-3 text-[16px] text-black"
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1.5,
    borderColor: "#2DB0EF",
    paddingLeft: 18,
    paddingRight: 16,
  },
});
