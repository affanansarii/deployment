const User = require("../models/User");
const Notice = require("../models/Notice");

exports.getAllUserNotices = async (req, res) => {
  try {
    const notices = await Notice.find({ userId: req.user.userId });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
