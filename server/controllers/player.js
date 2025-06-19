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

export const getAllPlayer = async (req, res) => {
  try {
    const result = await Player.find({});

    res.status(200).json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;

    const playerExists = await Player.findOne({ _id: playerId });

    if (!playerExists) {
      return res
        .status(400)
        .json({ success: false, message: "Player does not exists" });
    }

    await Player.deleteOne({ _id: playerId });

    res.status(200).json({ success: true, message: "Player deleted !" });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const { name, role } = req.body;
    const { playerId } = req.params;

    if (!name || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Name or Role is not provided" });
    }

    const playerExist = await Player.findOne({ _id: playerId });

    if (!playerExist) {
      return res
        .status(400)
        .json({ success: false, message: "Player does not exist" });
    }

    const fileUploaded = await uploadOnCloudinary(req.file.path);

    playerExist.name = name;
    playerExist.role = role;
    playerExist.avatar = fileUploaded.secure_url;

    await playerExist.save();

    res.status(200).json({
      success: true,
      result: { name, role, avatar: fileUploaded.secure_url },
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};
