const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { name, location, photo, skillsOffered, skillsWanted, availability, isPublic } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        location,
        photo,
        skillsOffered,
        skillsWanted,
        availability,
        isPublic
      },
      { new: true }
    ).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
