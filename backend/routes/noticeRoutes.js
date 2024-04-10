const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNoticesByCategory,
  updateNotice,
  deleteNotice,
} = require("../controllers/noticeController");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.post("/", authenticateToken, createNotice);
router.get("/", authenticateToken, getAllNoticesByCategory);
router.put("/:id", authenticateToken, updateNotice);
router.delete("/:id", authenticateToken, deleteNotice);

module.exports = router;
