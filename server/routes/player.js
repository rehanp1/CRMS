import { Router } from "express";
import { createPlayer } from "../controllers/player.js";
import upload from "../middleware/multer.js";

const playerRouter = Router();

playerRouter.post("/create", upload.single("avatar"), createPlayer);

export default playerRouter;
