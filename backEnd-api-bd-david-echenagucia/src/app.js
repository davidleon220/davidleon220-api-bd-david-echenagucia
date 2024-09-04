import express from "express";
import cors from "cors";
import artistRoutes from "./routes/artist.routes.js";
import songsRoutes from "./routes/songs.routes.js";

const app = express();

// Usa middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use(songsRoutes);
app.use(artistRoutes);

// Exporta la aplicación
export default app;
