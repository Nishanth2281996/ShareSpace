// Import Firebase app functions
import { getApp, getApps, initializeApp } from "firebase/app";

// Import Firestore
import { getFirestore } from "firebase/firestore";

// Import Auth with persistence support
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// Import AsyncStorage (for saving login)
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Check if any env value is missing
Object.entries(firebaseConfig).forEach(([key, value]) => {
  if (!value) {
    console.warn(`[firebase] Missing env value for ${key}`);
  }
});

// Create Firebase app only once
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Auth with persistence (keeps user logged in)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Create Firestore service from the app
export const db = getFirestore(app);

// Temporary test log
console.log("[firebase] Firebase initialized successfully");
