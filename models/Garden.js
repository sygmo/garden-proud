const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Garden extends Model {}

Garden.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    plant_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'plant',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'garden',
  }
);

module.exports = Garden;
