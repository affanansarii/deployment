const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  .then(() => console.log("MongoDB connected"))
  .catch(() => console.error(error));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/notice", require("./routes/noticeRoutes"));
app.use("/api/user", require(".//routes/userRoutes"));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
