const User = require('../models/User');
const { successResponse, errorResponse } = require('../utils/response');

const getProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    if (!userId) return res.status(400).json(errorResponse('User Not Found'));

    // Use lean to return a plain object without MongoDB-specific properties
    const user = await User.findById(userId).lean();

    if (!user) return res.status(404).json(errorResponse('User Not Found'));

    const { password, ...userWithoutPassword } = user;
    return res
      .status(200)
      .json(successResponse('User fetched successfully', userWithoutPassword));
  } catch (err) {
    console.error(err.message);
    return res.status(500).json(errorResponse('Server error', err));
  }
};

module.exports = { getProfile };
