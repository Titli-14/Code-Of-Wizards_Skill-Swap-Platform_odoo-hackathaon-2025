// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  getUserProfile,
  updateUserProfile
} = require("../controllers/userController");

// @route   GET /api/user/me
// @desc    Get logged-in user's profile
// @access  Private
router.get("/me", auth, getUserProfile);

// @route   PUT /api/user/me
// @desc    Update logged-in user's profile
// @access  Private
router.put("/me", auth, updateUserProfile);

module.exports = router;
