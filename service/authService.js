const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwtUtils");

const registerUser = async (name, email, password) => {
  try {
    // const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    const token = generateToken(user.id);
    return token;
  } catch (err) {
    console.error("An Error occurred", err);
    throw err;
  }
};

const login = async (email, password) => {
  try {
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const token = generateToken(user.id);
    return token;
  } catch (err) {
    console.error(err);
    throw error;
  }
};

module.exports = { registerUser, login };
