const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      let seasons = ["Spring", "Summer", "Autumn"];

      // Pass serialized data and session flag into template
      res.render('homepage', { 
        seasons,
        loggedIn: req.session.loggedIn 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
  module.exports = router;