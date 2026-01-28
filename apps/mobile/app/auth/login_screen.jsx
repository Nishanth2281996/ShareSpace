import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../src/components/ui/primaryButton";
import TextField from "../../src/components/ui/textField";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="flex-1 px-6">
          {/* Logo */}
          <View className="items-center pt-20">
            <Image
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
              className="w-[300px] h-[300px]"
            />
          </View>

          {/*Input*/}
          <View className="mt-16" style={{ gap: 18 }}>
            <TextField
              icon={<Ionicons name="mail-outline" size={22} color="#2DB0EF" />}
              placeholder="Email or Phone"
              keyboardType="default"
              secureTextEntry={false}
            />
            <TextField
              icon={
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color="#2DB0EF"
                />
              }
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>

          {/*Login Button*/}
          <View className="mt-10">
            <PrimaryButton label="Login" onPress={() => {}} />
          </View>

          {/* Divide */}
          <View className="mt-10 flex-row items-center justify-center">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-3 text-[14px] text-gray-500">or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Bottom Links */}
          <View className="mt-8 flex-row justify-between px-2">
            <Pressable onPress={() => {}}>
              <Text className="text-[16px] text-black">Register</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text className="text-[16px] text-black">Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
