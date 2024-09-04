// Importación del modelo de canciones
import { Song } from "../models/songs.model.js";

// Obtener todas las canciones
export async function getSong(req, res) {
  try {
    const songs = await Song.findAll({
      attributes: [
        "id",
        "title",
        "artistId",
        "releaseYear",
        "duration",
        "coverUrl",
      ],
      order: [["id", "DESC"]],
    });
    res.json(songs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Obtener una canción por su ID
export async function getSongid(req, res) {
  const { id } = req.params; // Obtiene el ID desde los parámetros de la URL
  try {
    const song = await Song.findOne({
      where: { id },
      attributes: [
        "id",
        "title",
        "artistId",
        "releaseYear",
        "duration",
        "coverUrl",
      ],
    });

    // Verifica si la canción existe antes de enviar la respuesta
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.json(song); // Envía la canción encontrada como respuesta
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Crear una nueva canción
export async function createSong(req, res) {
  try {
    const { title, artistId, releaseYear, duration, coverUrl } = req.body;
    const newSong = await Song.create({
      title,
      artistId,
      releaseYear,
      duration,
      coverUrl,
    });
    res.json(newSong);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Actualizar una canción existente por su ID
export async function updateSong(req, res) {
  const { id } = req.params; // Obtiene el ID desde los parámetros de la URL
  try {
    // Busca la canción por ID
    const song = await Song.findOne({
      where: { id },
      attributes: [
        "id",
        "title",
        "artistId",
        "releaseYear",
        "duration",
        "coverUrl",
      ],
    });

    // Verifica si la canción existe
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    // Actualiza los campos de la canción
    song.set(req.body);
    await song.save();

    res.json(song); // Envía la canción actualizada como respuesta
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Eliminar una canción por su ID
export async function deleteSong(req, res) {
  const { id } = req.params; // Obtiene el ID desde los parámetros de la URL
  try {
    const result = await Song.destroy({
      where: { id },
    });

    // Verifica si la eliminación fue exitosa
    if (result === 0) {
      return res.status(404).json({ message: "Song not found" });
    }

    return res.sendStatus(204); // Responde con No Content si la eliminación fue exitosa
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
