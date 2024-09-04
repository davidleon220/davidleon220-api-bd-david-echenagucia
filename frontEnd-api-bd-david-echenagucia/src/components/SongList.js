import React, { useState, useEffect } from "react";
import axios from "axios";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/songs");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="container">
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} by Artist ID: {song.artistId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
