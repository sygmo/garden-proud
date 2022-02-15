const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const seasonRoutes = require('./seasonRoutes');
const plantRoutes = require('./plant-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/season', seasonRoutes);
router.use('/plant', plantRoutes);

module.exports = router;