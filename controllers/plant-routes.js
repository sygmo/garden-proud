const router = require('express').Router();
const { User, Plant, Garden } = require('../models');

// Create route for initial selection option based on season

router.get('/plant/:id', async (req, res) => {
    try {
        const dbPlantData = await Plant.findAll({
            where:
                {
                    season: 'summer'
                },
            include: [
                {
                    model: Plant,
                    attributes: [
                        'common_name',
                        'latin_name',
                        'description',
                        'season',
                        'fileName',
                    ]
                },
            ]
        });

        const plants = dbPlantData.map((plant) =>
        plant.get({ plain: true })
        );

        res.render('plant', {
            plants
        });
    } catch (err) {}
})

module.exports = router;