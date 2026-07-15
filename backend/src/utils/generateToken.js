import jwt from "jsonwebtoken";

/**
 * Generate JWT token
 * @param {string} userId
 * @returns {string}
 */
export const generateToken = (userId) => {

  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

};