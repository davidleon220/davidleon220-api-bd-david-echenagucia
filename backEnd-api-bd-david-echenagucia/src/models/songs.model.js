import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Song = sequelize.define("Song", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Equivale a SERIAL en SQL
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255), // Equivale a VARCHAR(255)
    allowNull: false,
  },
  artistId: {
    type: DataTypes.INTEGER,
    // references: {
    //     model: Artist, // Nombre del modelo al que se hace referencia
    //     key: 'id' // Nombre de la columna en el modelo de referencia
    // },
    allowNull: true,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  coverUrl: {
    type: DataTypes.STRING(255), // Equivale a VARCHAR(255)
    allowNull: true,
  },
});
