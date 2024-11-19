const express = require("express");
const { getProfile, getAllUsers } = require("../controllers/userController");
const   router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/profile/:userId", authMiddleware, getProfile);
router.get("/getAll", authMiddleware, getAllUsers);

module.exports = router;
