import Player from "../models/Player.js";
import { uploadOnCloudinary } from "../utils/index.js";

export const createPlayer = async (req, res) => {
  try {
    const { name, role } = req.body;

    if (!name || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Name or Role is not provided" });
    }

    const playerExist = await Player.findOne({ name, role });

    if (playerExist) {
      return res
        .status(400)
        .json({ success: false, message: "Player already exist" });
    }

    const fileUploaded = await uploadOnCloudinary(req.file.path);

    const playerCreated = await Player.create({
      name,
      role,
      avatar: fileUploaded.secure_url,
    });

    res.status(200).json({ success: true, result: playerCreated });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};
