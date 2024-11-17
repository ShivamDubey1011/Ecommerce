const express = require('express');
const { getProfile } = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile/:userId', authMiddleware, getProfile);

module.exports = router;
