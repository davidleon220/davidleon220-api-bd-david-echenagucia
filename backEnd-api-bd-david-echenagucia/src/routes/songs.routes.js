import { Router } from "express";
import {
  getSong,
  createSong,
  updateSong,
  deleteSong,
  getSongid,
} from "../controllers/songs.controller.js";

const router = Router();

// Ruta para obtener una canción por ID
router.get("/songs/:id", getSongid);

// Ruta para obtener todas las canciones
router.get("/songs", getSong);

// Ruta para crear una nueva canción
router.post("/songs", createSong);

// Ruta para actualizar una canción por ID
router.put("/songs/:id", updateSong);

// Ruta para eliminar una canción por ID
router.delete("/songs/:id", deleteSong);

export default router;
