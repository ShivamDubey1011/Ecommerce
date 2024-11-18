const { successResponse, errorResponse } = require("../utils/response");
const userService = require("../service/userService");

// Get a single user's profile by userId
const getProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    if (!userId) return res.status(400).json(errorResponse("User Not Found"));
    const user = await userService.getUserById(userId);
    return res
      .status(200)
      .json(successResponse("User fetched successfully", user));
  } catch (err) {
    console.error(err.message);
    return res
      .status(400)
      .json(errorResponse("Server error", err.message || err));
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(successResponse("Fetched Successfully", users));
  } catch (err) {
    console.error(err.message);
    return res
      .status(400)
      .json(errorResponse("Server error", err.message || err));
  }
};

module.exports = { getProfile, getAllUsers };
