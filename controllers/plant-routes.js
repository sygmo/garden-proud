const router = require('express').Router();
const { User, Plant, Garden } = require('../models');

// Create route for initial selection option based on season

router.get('/:id', async (req, res) => {
    try {
        const dbPlantData = await Plant.findByPk(req.params.id);
          
        const plant = dbPlantData.get({ plain: true});
console.log(plant)
        res.render('plant', { 
            plant,
            loggedIn: req.session.loggedIn 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//post route for plant to save
router.post('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const dbPlantData = await Garden.create(req.params.id);
          
        const plant = dbPlantData.get({ plain: true});
//console.log(plant)
        res.render('profile', { plant });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;