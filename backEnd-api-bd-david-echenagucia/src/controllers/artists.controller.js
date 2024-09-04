import { Artist } from "../models/artists.model.js";
import { Song } from "../models/songs.model.js";

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function getArtist(req, res) {
  const { id } = req.params;
  try {
    const artist = await Artist.findOne({
      where: {
        id,
      },
    });
    res.json(artist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const createArtists = async (req, res) => {
  const { name, bio, photoUrl } = req.body;

  try {
    const newArtist = await Artist.create({
      name,
      bio,
      photoUrl,
    });
    res.json(newArtist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio, photoUrl } = req.body;

    const artist = await Artist.findByPk(id);

    artist.name = name;
    artist.bio = bio;
    artist.photoUrl = photoUrl;
    await artist.save();

    res.json(artist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    await Artist.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getArtistSong = async (req, res) => {
  const { id } = req.params;
  const songs = await Song.findAll({
    where: { artistId: id },
  });
  res.json(songs);
};
