const router = require('express').Router();
const{User,Plant,Garden} =require("../models")

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
// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  console.log(req.session, "ww")
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Plant ,through :Garden }],
    });
console.log(userData)
    const user = userData.get({ plain: true });
    console.log(user)
    res.render('profile', {
      ...user,
      loggedIn: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;