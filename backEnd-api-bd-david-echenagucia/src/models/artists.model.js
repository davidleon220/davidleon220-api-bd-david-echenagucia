import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Song } from "./songs.model.js";

export const Artist = sequelize.define("Artist", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Equivale a SERIAL en SQL
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255), // Equivale a VARCHAR(255)
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT, // Equivale a TEXT en SQL
    allowNull: true, // Por defecto es true, pero se puede omitir si se desea
  },
  photoUrl: {
    type: DataTypes.STRING(255), // Equivale a VARCHAR(255)
    allowNull: true,
  },
});
sequelize
  .sync()
  .then(() => {
    console.log("Tabla `Artist` creada exitosamente.");
  })
  .catch((error) => {
    console.error("Error al crear la tabla:", error);
  });

// Un artista puede tener muchas canciones
Artist.hasMany(Song, {
  foreignKey: "artistId",
  sourceKey: "id",
});

// Cada canción pertenece a un único artista
Song.belongsTo(Artist, {
  foreignKey: "artistId",
  targetId: "id",
});
