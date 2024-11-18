const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwtUtils");

const registerUser = async (name, email, password) => {
  try {
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
    const token = generateToken(user.id, user.email);
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const changePassword = async (email, password, newPassword) => {
  try {
    const user = await User.findOne({ email });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new Error("Invalid credentials");
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
  } catch (err) {
    console.error("failed");
    throw err;
  }
};

module.exports = { registerUser, login, changePassword };
