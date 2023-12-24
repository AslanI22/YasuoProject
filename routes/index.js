const express = require('express');
const router = express.Router();
const Yasuo = require('../models/yasuo.js').Yasuo;

/* GET home page. */

router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});

router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});
  

module.exports = router;
