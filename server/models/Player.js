import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema(
  {
    name: String,
    role: String,
    avatar: String,
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
