const router = require('express').Router();

const apiRoutes = require('./api');
const plantRoutes = require('./plant-routes.js');

router.use('/', plantRoutes);
router.use('/api', apiRoutes);

module.exports = router;