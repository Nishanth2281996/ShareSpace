import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../../src/components/ui/primaryButton";
import TextField from "../../src/components/ui/textField";
import { registerUser } from "../../src/services/auth/auth.service";

const RegisterScreen = () => {
  const router = useRouter();
  const { role } = useLocalSearchParams();

  // Form values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Field errors
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [submitError, setSubmitError] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Validate all fields
  const validateForm = () => {
    let isValid = true;

    // Clear old errors
    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");
    setSubmitError("");

    // Full name check
    if (!fullName.trim()) {
      setFullNameError("Please enter full name");
      isValid = false;
    }

    // Email check
    if (!email.trim()) {
      setEmailError("Please enter email");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    // Password check
    if (!password) {
      setPasswordError("Please enter password");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Minimum 8 characters required");
      isValid = false;
    }

    // Confirm password check
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    // Terms check
    if (!agreed) {
      setTermsError("Please accept terms");
      isValid = false;
    }
    // Role check
    if (!role || (role !== "seeker" && role !== "owner")) {
      setSubmitError("Invalid role. Please go back and select role again.");
      isValid = false;
    }

    return isValid;
  };

  // Handle register button
  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      setSubmitError("");

      await registerUser({
        fullName,
        email,
        password,
        role,
      });

      // Go to login after success
      router.replace("/auth/login_screen");
    } catch (error) {
      // Show Firebase error below the form
      setSubmitError(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

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
          <View>
            <TextField
              icon={<Ionicons name="person" size={22} color="#2DB0EF" />}
              placeholder="Full Name"
              secureTextEntry={false}
              keyboardType="default"
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                setFullNameError("");
                setSubmitError("");
              }}
            />

            {fullNameError ? (
              <Text className="mt-1 text-[13px] text-red-500">
                {fullNameError}
              </Text>
            ) : null}
          </View>
          <View>
            <TextField
              icon={<Ionicons name="mail" size={22} color="#2DB0EF" />}
              placeholder="Email"
              secureTextEntry={false}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError("");
                setSubmitError("");
              }}
            />

            {emailError ? (
              <Text className="mt-1 text-[13px] text-red-500">
                {emailError}
              </Text>
            ) : null}
          </View>

          <View>
            <TextField
              icon={<Ionicons name="lock-closed" size={22} color="#2DB0EF" />}
              placeholder="Password"
              secureTextEntry={true}
              keyboardType="default"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError("");
                setSubmitError("");
              }}
            />

            {passwordError ? (
              <Text className="mt-1 text-[13px] text-red-500">
                {passwordError}
              </Text>
            ) : null}
          </View>

          <View>
            <TextField
              icon={<Ionicons name="lock-closed" size={22} color="#2DB0EF" />}
              placeholder="Confirm Password"
              secureTextEntry={true}
              keyboardType="default"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setConfirmPasswordError("");
                setSubmitError("");
              }}
            />

            {confirmPasswordError ? (
              <Text className="mt-1 text-[13px] text-red-500">
                {confirmPasswordError}
              </Text>
            ) : null}
          </View>
        </View>

        {/*Terms Checkout*/}
        <Pressable
          onPress={() => {
            setAgreed(!agreed);
            setTermsError("");
            setSubmitError("");
          }}
          className="mt-6 flex-row items-center px-2"
        >
          <View className="w-[20px] h-[20px] border border-black mr-3 items-center justify-center">
            {agreed ? (
              <Ionicons name="checkmark" size={16} color="#2DB0EF" />
            ) : null}
          </View>

          <Text className="text-[14px] text-black">
            I agree to Terms & Privacy Policy
          </Text>
        </Pressable>

        {termsError ? (
          <Text className="mt-1 px-2 text-[13px] text-red-500">
            {termsError}
          </Text>
        ) : null}

        {/* Submit error */}
        {submitError ? (
          <Text className="mt-4 px-2 text-[13px] text-red-500">
            {submitError}
          </Text>
        ) : null}

        {/*Create Account Button */}
        <View className="mt-8 px-2">
          <PrimaryButton
            label={loading ? "Creating..." : "Create Account"}
            onPress={handleRegister}
          />
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
          <Pressable
            onPress={() => {
              router.push("/auth/login_screen");
            }}
          >
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
