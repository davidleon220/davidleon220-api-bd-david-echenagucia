import React, { useState, useEffect } from "react";
import axios from "axios";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:3001/artist");
        setArtists(response.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };
    fetchArtists();
  }, []);

  return (
    <div className="container">
      <h2>Artist List</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
