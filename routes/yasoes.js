var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Yasuo = require('../models/yasuo.js').Yasuo;
var async = require("async");
//var checkAuth = require("./../middleware/checkAuth.js")


/* GET cats listing. */
router.get('/', function (req, res, next) {
  res.send('<h1>Это экран для списка скинов на Ясуо</h1>');
});

router.get("/:nick", function (req, res, next) {
  db.query(`SELECT * FROM yasuos WHERE yasuos.nick = '${req.params.nick}'`, (err,
    yasuos) => {
    if (err) {
      console.log(err);
      if (err) return next(err)
    } else {
      if (yasuos.length == 0) return next(new Error("Нет такого Ясуо"))
      var yasuo = yasuos[0];
      res.render('yasuo', {
        title: yasuo.title,
        picture: yasuo.avatar,
        desc: yasuo.about
      })
    }
  })
});
/* router.get('/:nick',checkAuth, async function(req, res, next) {
  try {
      const [yasuo, yasuos] = await Promise.all([
        Yasuo.findOne({ nick: req.params.nick })
      ]);
    
      if (!yasuo) {
        throw new Error("Нет такого");
      }
      
      renderYasuo(res, yasuo.title, yasuo.avatar, yasuo.desc, yasuos);
    } catch (err) {
      next(err);
    }
  });
  
  function renderYasuo(res, title, picture, desc, yasuos) {
    res.render('yasuo', {
      title: title,
      picture: picture,
      desc: desc,
      menu: yasuos
    });
  } */

module.exports = router;
