const router = require('express').Router();
const { User, Plant, Garden } = require('../models');

// render flowers of a given season
router.get('/:season', async (req, res) => {
    try {
        let chosenSeason = req.params.season;
        
        const dbPlantData = await Plant.findAll({
            where:
                {
                    season: chosenSeason.toLowerCase()
                }
        });

        const plants = dbPlantData.map((plant) =>
        plant.get({ plain: true })
        );

        res.render('seasonpage', {
            plants
        });
    } catch (err) {}
});

module.exports = router;