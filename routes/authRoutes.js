const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// POST /register - User Registration
router.post('/register', registerUser);

// POST /login - User Login
router.post('/login', loginUser);

// GET /me - Get User Info (Protected)
router.get('/me', authMiddleware, getUserInfo);

module.exports = router;
