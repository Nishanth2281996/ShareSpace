import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import PrimaryButton from "../../src/components/ui/primaryButton";
import TextField from "../../src/components/ui/textField";
import { sendResetPassword } from "../../src/services/auth/auth.service";

const ResetPassword = () => {
  const router = useRouter();

  // Store typed email
  const [email, setEmail] = useState("");

  // UI states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleResetPassword = async () => {
    setErrorMsg("");
    setSuccessMsg("");

    if (!email.trim()) {
      setErrorMsg("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      await sendResetPassword(email.trim());

      setSuccessMsg("Password reset email sent successfully.");
    } catch (error) {
      setErrorMsg(error.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

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
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Error message */}
        {errorMsg ? (
          <Text className="mt-4 px-2 text-[14px] text-red-500">{errorMsg}</Text>
        ) : null}

        {/*Reset Button*/}
        <View className="mt-10 px-2">
          <PrimaryButton
            label={loading ? "Sending..." : "Send Reset Link"}
            onPress={handleResetPassword}
          />
        </View>

        {/*Back to Login */}
        <View className="mt-10 items-center">
          <Pressable onPress={() => router.push("/auth/login_screen")}>
            <Text className="text-[16px] text-black">Back to Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
