const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Generate JWT Token
const generateToken = (userId, email) => {
  const payload = {
    user: {
      id: userId,
      email: email,
    },
  };
  return jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
};

// Verify JWT Token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (err) {
    return null;
  }
};

const decodeToken = (token) => {
  try {
    return jwt.decode(token); // Decodes the token without verifying its signature
  } catch (err) {
    return null; // Returns null if decoding fails
  }
};
module.exports = { generateToken, verifyToken, decodeToken };
