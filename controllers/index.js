const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const plantRoutes = require('./plant-routes.js');

//router.use('/', plantRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;