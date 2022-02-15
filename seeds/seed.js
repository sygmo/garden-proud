const sequelize = require('../config/connection');
const { User, Plant } = require('../models');

const userData = require('./userData.json');
const plantData = require('./plantData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const plants = await Plant.bulkCreate(plantData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();