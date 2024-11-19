const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserInfo,
  changePassword,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST /register - User Registration
router.post("/register", registerUser);

// POST /login - User Login
router.post("/login", loginUser);

router.post("/resetPassword", changePassword);

// GET /me - Get User Info (Protected)
// router.get("/profile", authMiddleware, getUserInfo);

module.exports = router;
