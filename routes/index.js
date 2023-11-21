var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Nightbringer', function(req, res, next) {
  res.send("<h1>Страница Nightbringer Yasuo</h1>")
});

router.get('/SeaDog', function(req, res, next) {
  res.send("<h1>Страница Sea Dog Yasuo</h1>")
});

router.get('/TruthDragon', function(req, res, next) {
    res.send("<h1>Страница Truth Dragon Yasuo</h1>")
});

module.exports = router;
