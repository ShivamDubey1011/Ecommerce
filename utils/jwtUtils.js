const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Generate JWT Token
const generateToken = (userId) => {
  const payload = {
    user: {
      id: userId,
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

module.exports = { generateToken, verifyToken };
