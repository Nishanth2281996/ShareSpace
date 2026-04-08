import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../src/components/ui/primaryButton";
import TextField from "../../src/components/ui/textField";
import {
  getUserProfile,
  loginUser,
} from "../../src/services/auth/auth.service";

const LoginScreen = () => {
  const router = useRouter();

  // Store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Store UI states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    // Clear old error
    setErrorMsg("");

    // Simple validation
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const user = await loginUser({
        email: email.trim(),
        password,
      });

      // get profile from Firestore
      const profile = await getUserProfile(user.uid);

      // redirect by role
      if (profile.role === "owner") {
        router.push("/owner/dashboard");
      } else if (profile.role === "seeker") {
        router.push("/seeker/home");
      } else {
        setErrorMsg("Invalid user role.");
      }
    } catch (error) {
      setErrorMsg(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Error message */}
          {errorMsg ? (
            <Text className="mt-4 text-red-500 text-[14px] px-1">
              {errorMsg}
            </Text>
          ) : null}

          {/*Login Button*/}
          <View className="mt-10">
            <PrimaryButton label="Login" onPress={handleLogin} />
          </View>

          {/* Divide */}
          <View className="mt-10 flex-row items-center justify-center">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-3 text-[14px] text-gray-500">or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Bottom Links */}
          <View className="mt-8 flex-row justify-between px-2">
            <Pressable
              onPress={() => {
                router.push("/auth/registerScreen");
              }}
            >
              <Text className="text-[16px] text-black">Register</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/auth/resetPassword");
              }}
            >
              <Text className="text-[16px] text-black">Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
