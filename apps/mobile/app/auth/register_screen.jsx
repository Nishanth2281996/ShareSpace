import { Ionicons } from "@expo/vector-icons";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../../src/components/ui/primaryButton";
import TextField from "../../src/components/ui/textField";

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/*Title */}
        <View className="items-center pt-16">
          <Text className="text-[28px] font-bold text-black">
            Create Account
          </Text>

          <Text className="mt-1 text-[16px] text-gray-500">
            Register to get Start
          </Text>
        </View>

        {/*Input*/}
        <View className="mt-12 px-2" style={{ gap: 18 }}>
          <TextField
            icon={<Ionicons name="person" size={22} color="#2DB0EF" />}
            placeholder="Full Name"
            secureTextEntry={false}
            keyboardType="default"
          />

          <TextField
            icon={<Ionicons name="mail" size={22} color="#2DB0EF" />}
            placeholder="Email or Phone"
            secureTextEntry={false}
            keyboardType="default"
          />

          <TextField
            icon={<Ionicons name="lock-closed" size={22} color="#2DB0EF" />}
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="default"
          />

          <TextField
            icon={<Ionicons name="lock-closed" size={22} color="#2DB0EF" />}
            placeholder="Contirm Password"
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>

        {/*Terms Checkout*/}
        <View className="mt-6 flex-row items-center px-2">
          <View className="w-[20px] h-[20px] border border-black mr-3" />
          <Text className="text-[14px] text-black">
            I agree to Terms & Privacy Policy
          </Text>
        </View>

        {/*Create Account Button */}
        <View className="mt-8 px-2">
          <PrimaryButton label="Create Account" onPress={() => {}} />
        </View>

        {/* ===== Divider ===== */}
        <View className="mt-10 flex-row items-center justify-center">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-3 text-[14px] text-gray-500">or</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        {/*Bottom Login Link */}
        <View className="mt-8 flex-row justify-center">
          <Text className="text-[16px] text-black">
            Already have an Account?{" "}
          </Text>
          <Pressable>
            <Text className="text-[16px] text-[#2DB0EF] font-medium">
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
