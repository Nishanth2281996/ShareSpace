import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../src/components/states/EmptyState";
import ErrorState from "../../src/components/states/ErrorState";
import LoadingState from "../../src/components/states/LoadingState";

const initialMessages = [
  {
    id: "1",
    text: "Hi, Is this Room available",
    sender: "seeker",
    time: "10:30 AM",
  },
  {
    id: "2",
    text: "Hi, Yes, this room is available",
    sender: "owner",
    time: "10:32 AM",
  },
  {
    id: "3",
    text: "Can I visit this place tomorrow?",
    sender: "seeker",
    time: "10:35 AM",
  },
];

const chat = () => {
  const router = useRouter();

  // Temporary UI states for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Store message input
  const [message, setMessage] = useState("");

  // Store message list
  const [messages, setMessages] = useState(initialMessages);

  // Retry button action
  const handleRetry = () => {
    setError(false);
    setLoading(false);
  };

  // Send new message
  const handleSendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      text: trimmedMessage,
      sender: "owner",
      time: "Now",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
  };

  const renderMessage = ({ item }) => {
    const isOwner = item.sender === "owner";

    return (
      <View className={`mb-4 ${isOwner ? "items-end" : "items-start"}`}>
        <View
          className={`max-w-[78%] rounded-[14px] px-4 py-3 ${
            isOwner ? "bg-[#2DB0EF]" : "border border-[#D9D9D9] bg-white"
          }`}
        >
          <Text
            className={`text-[15px] ${
              isOwner ? "text-white" : "text-[#4F4F4F]"
            }`}
          >
            {item.text}
          </Text>
        </View>

        <Text className="mt-1 text-[11px] text-[#9A9A9A]">{item.time}</Text>
      </View>
    );
  };

  // Loading state
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center border-b border-[#D9D9D9] bg-white px-4 py-3">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="#2DB0EF" />
            </Pressable>

            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
              }}
              className="ml-4 h-[45px] w-[45px] rounded-full"
            />

            <View className="ml-3">
              <Text className="text-[17px] font-semibold text-[#2DB0EF]">
                Seeker Name
              </Text>
              <Text className="text-[13px] text-[#7A7A7A]">Room Title</Text>
            </View>
          </View>

          <LoadingState message="Loading messages..." />
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center border-b border-[#D9D9D9] bg-white px-4 py-3">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="#2DB0EF" />
            </Pressable>

            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
              }}
              className="ml-4 h-[45px] w-[45px] rounded-full"
            />

            <View className="ml-3">
              <Text className="text-[17px] font-semibold text-[#2DB0EF]">
                Seeker Name
              </Text>
              <Text className="text-[13px] text-[#7A7A7A]">Room Title</Text>
            </View>
          </View>

          <ErrorState
            title="Failed to load messages"
            message="Something went wrong while loading this chat."
            onRetry={handleRetry}
          />
        </View>
      </SafeAreaView>
    );
  }

  // Empty state
  if (messages.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#F3F3F3]">
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center border-b border-[#D9D9D9] bg-white px-4 py-3">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="#2DB0EF" />
            </Pressable>

            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
              }}
              className="ml-4 h-[45px] w-[45px] rounded-full"
            />

            <View className="ml-3">
              <Text className="text-[17px] font-semibold text-[#2DB0EF]">
                Seeker Name
              </Text>
              <Text className="text-[13px] text-[#7A7A7A]">Room Title</Text>
            </View>
          </View>

          <EmptyState
            icon="chatbubble-ellipses-outline"
            title="No messages yet"
            message="Start the conversation by sending a message."
          />

          {/* Message input */}
          <View className="flex-row items-center border-t border-[#D9D9D9] bg-white px-3 py-3">
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
              placeholderTextColor="#9A9A9A"
              className="flex-1 rounded-[24px] border border-[#D0D0D0] bg-[#F8F8F8] px-4 py-3 text-[15px] text-black"
            />

            <Pressable
              onPress={handleSendMessage}
              className="ml-3 h-[46px] w-[46px] items-center justify-center rounded-full bg-[#2DB0EF]"
            >
              <Ionicons name="send" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F3F3F3]">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center border-b border-[#D9D9D9] bg-white px-4 py-3">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#2DB0EF" />
          </Pressable>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
            }}
            className="ml-4 h-[45px] w-[45px] rounded-full"
          />

          <View className="ml-3">
            <Text className="text-[17px] font-semibold text-[#2DB0EF]">
              Seeker Name
            </Text>
            <Text className="text-[13px] text-[#7A7A7A]">Room Title</Text>
          </View>
        </View>

        {/* Messages */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 18,
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        />

        {/* Message input */}
        <View className="flex-row items-center border-t border-[#D9D9D9] bg-white px-3 py-3">
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            placeholderTextColor="#9A9A9A"
            className="flex-1 rounded-[24px] border border-[#D0D0D0] bg-[#F8F8F8] px-4 py-3 text-[15px] text-black"
          />

          <Pressable
            onPress={handleSendMessage}
            className="ml-3 h-[46px] w-[46px] items-center justify-center rounded-full bg-[#2DB0EF]"
          >
            <Ionicons name="send" size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default chat;
