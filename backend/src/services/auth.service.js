import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

/**
 * Register a new user
 */
export const registerUser = async ({
  name,
  email,
  password,
}) => {

  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  // Create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  // Generate JWT
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  };

};


/**
 * Login user
 */
export const loginUser = async ({
  email,
  password,
}) => {

  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  // Compare password
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  // Generate JWT
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  };

};