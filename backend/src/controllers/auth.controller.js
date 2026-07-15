import {
  registerUser,
  loginUser,
} from "../services/auth.service.js";

/**
 * Register Controller
 */
export const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });

    }

    const data = await registerUser({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      ...data,
    });

  } catch (error) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

/**
 * Login Controller
 */
export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });

    }

    const data = await loginUser({
      email,
      password,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      ...data,
    });

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message,
    });

  }

};