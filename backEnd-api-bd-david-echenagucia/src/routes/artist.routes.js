import { Router } from "express";
import {
  getArtistSong,
  createArtists,
  deleteArtist,
  getArtists,
  updateArtist,
  getArtist,
} from "../controllers/artists.controller.js";
const router = Router();

router.get("/artist", getArtists);
router.post("/artist", createArtists);
router.put("/artist/:id", updateArtist);
router.delete("/artist/:id", deleteArtist);
router.get("/artist/:id", getArtist);
router.get("/artist/:id/songs", getArtistSong);

export default router;