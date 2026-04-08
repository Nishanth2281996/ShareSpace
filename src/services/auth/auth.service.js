// Import Firebase Auth functions
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Import Firestore functions
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

// Import shared Firebase services
import { auth, db } from "../../firebase/firebase";

// Allowed app roles
const ALLOWED_ROLES = ["seeker", "owner"];

// Check role before saving
const validateRole = (role) => {
  if (!ALLOWED_ROLES.includes(role)) {
    throw new Error("Invalid role. Role must be seeker or owner.");
  }
};

// Register new user
export const registerUser = async ({ fullName, email, password, role }) => {
  // Check role first
  validateRole(role);

  // Create account in Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    password,
  );

  // Get created user
  const { user } = userCredential;

  // Save user profile in Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    role,
    status: "pending", // admin can review later
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // Return user for screen usage
  return user;
};

// Login existing user
export const loginUser = async ({ email, password }) => {
  // Sign in with Firebase Auth
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password,
  );

  // Return logged in user
  return userCredential.user;
};

// Read user profile from Firestore
export const getUserProfile = async (uid) => {
  // Reference to user document
  const userRef = doc(db, "users", uid);

  // Read document
  const userSnap = await getDoc(userRef);

  // Check if document exists
  if (!userSnap.exists()) {
    throw new Error("User profile not found.");
  }

  // Return profile data
  return userSnap.data();
};

// Send password reset email
export const sendResetPassword = async (email) => {
  // Send reset email to the given address
  await sendPasswordResetEmail(auth, email.trim().toLowerCase());

  // Return simple success value
  return true;
};
