import { Ionicons } from "@expo/vector-icons";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import PrimaryButton from "../../src/components/ui/primaryButton";
import TextField from "../../src/components/ui/textField";

const ResetPassword = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-1 px-6 justify-center ">
        {/*Title*/}
        <View className="items-center pt-20">
          <Text className="text-[26px] font-bold text-black">
            Reset Password
          </Text>
          <Text className="mt-2 text-[15px] text-gray-500 text-center px-6">
            Enter your email to receive a reset link or code
          </Text>
        </View>

        {/*Input*/}
        <View className="mt-16 px-2">
          <TextField
            icon={<Ionicons name="mail" size={22} color="#2DB0EF" />}
            placeholder="Email or Phone"
            secureTextEntry={false}
            keyboardType="default"
          />
        </View>

        {/*Reset Button*/}
        <View className="mt-10 px-2">
          <PrimaryButton label="Send Reset Link / Code" onPress={() => {}} />
        </View>

        {/*Back to Login */}
        <View className="mt-10 items-center">
          <Pressable>
            <Text className="text-[16px] text-black">Back to Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
