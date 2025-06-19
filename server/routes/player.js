import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  getAllPlayer,
  updatePlayer,
} from "../controllers/player.js";
import upload from "../middleware/multer.js";

const playerRouter = Router();

playerRouter.post("/create", upload.single("avatar"), createPlayer);
playerRouter.get("/getall", getAllPlayer);
playerRouter.post("/delete/:playerId", deletePlayer);
playerRouter.post("/update/:playerId", upload.single("avatar"), updatePlayer);

export default playerRouter;
