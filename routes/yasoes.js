var express = require('express');
var router = express.Router();
var Yasuo = require('../models/yasuo.js').Yasuo;
var async = require("async")
var checkAuth = require("./../middleware/checkAuth.js")

router.get('/:nick',checkAuth, async function(req, res, next) {
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
  }

module.exports = router;
