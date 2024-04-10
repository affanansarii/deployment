const Notice = require("../models/Notice");

exports.createNotice = async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const notice = new Notice({
      title,
      body,
      category,
      userId: req.user.userId,
    });
    await notice.save();
    res.status(201).json({ message: "Notice created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getAllNoticesByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const notices = await Notice.find({ category });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const { title, body, category } = req.body;
    await Notice.findByIdAndUpdate(req.params.id, { title, body, category });
    res.json({ message: "Notice updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
