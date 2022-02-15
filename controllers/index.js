const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const seasonRoutes = require('./seasonRoutes');
//const plantRoutes = require('./plant-routes.js');

//router.use('/', plantRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/season', seasonRoutes);


module.exports = router;