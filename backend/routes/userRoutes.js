const express = require("express");
const router = express.Router();
const { getAllUserNotices } = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.get("/notices", authenticateToken, getAllUserNotices);

module.exports = router;
