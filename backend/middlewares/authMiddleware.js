const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = { userId: user._id };
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
