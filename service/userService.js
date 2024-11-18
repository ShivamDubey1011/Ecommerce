const User = require("../models/User");

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId).select("-password").lean();
    if (!user) {
      throw new Error("User Not Found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find().select("-password").lean();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserById, getAllUsers };
