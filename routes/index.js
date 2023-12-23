var express = require('express');
var router = express.Router();
var Yasuo = require('../models/yasuo.js').Yasuo

/* GET home page. */

router.get('/', async (req, res, next) => {
  try {
    const menu = await Yasuo.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', menu:menu, counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
