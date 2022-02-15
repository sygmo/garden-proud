const router = require('express').Router();
const { User, Plant, Garden } = require('../models');

// Create route for initial selection option based on season

router.get('/:id', async (req, res) => {
    try {
        const dbPlantData = await Plant.findByPk(req.params.id);
          
        const plant = dbPlantData.get({ plain: true});

        res.render('plant', { plant });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;