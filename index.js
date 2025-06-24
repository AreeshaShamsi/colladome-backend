import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"; // <-- Import user routes

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(json());

// Register user routes for register and login
app.use("/api/users", userRoutes); // <-- Add this line

// MongoDB Connection
connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Example Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
