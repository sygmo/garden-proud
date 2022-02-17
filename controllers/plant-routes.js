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
    console.log(req.session.user_id);
    try {
        const dbPlantData = await Garden.create({ 
            user_id: req.session.user_id, 
            plant_id: req.params.id
        }, {
            fields: ["user_id", "plant_id"]
        });
          
        const plant = dbPlantData.get({ plain: true});
//console.log(plant)
        res.render('profile', { plant });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
        const dbPlantData = await Plant.findAll({
            where: Garden.plant_id = Plant.id,
        });
        const plants = dbPlantData.map((plant) =>
        plant.get({ plain: true })
        );
        res.render('profile', {
            plants
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;