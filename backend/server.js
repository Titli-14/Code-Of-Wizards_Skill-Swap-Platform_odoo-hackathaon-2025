const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/user", require("./routes/userroutes"));

// Home route (optional test)
app.get("/", (req, res) => {
  res.send("Skill Swap Platform Backend Running 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`🚀 Server running at http://localhost:${PORT}`);
});
