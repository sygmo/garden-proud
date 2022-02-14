const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Garden extends Model {}

Garden.init(
  {
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
    freezeTableName: true,
    underscored: true,
    modelName: 'garden',
  }
);

module.exports = Garden;
