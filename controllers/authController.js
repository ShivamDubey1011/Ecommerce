const User = require("../models/User");
const authService = require("../service/authService");
const { successResponse, errorResponse } = require("../utils/response");

// User Registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userToken = await authService.registerUser(name, email, password);
    return res
      .status(200)
      .json(successResponse("Registration Completed Successfully", userToken));
  } catch (err) {
    console.error(err.message);
    return res.status(400).json(errorResponse(err.message, err));
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    console.log(token);
    return res.status(200).json(successResponse("logged in", token));
  } catch (err) {
    console.error(err);
    return res.status(400).json(errorResponse(err.message, err));
  }
};

// Get User Info (Protected Route)
const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { registerUser, loginUser, getUserInfo };
