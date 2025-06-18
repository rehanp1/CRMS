import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import playerRouter from "./routes/player.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

// Player Routes
app.use("/api/player", playerRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection FAILED: ", err);
  });
