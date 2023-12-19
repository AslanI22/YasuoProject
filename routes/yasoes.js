var express = require('express');
var router = express.Router();
var Yasuo = require('../models/yasuo.js').Yasuo;
var async = require("async")

router.get('/:nick', async function(req, res, next) {
    try {
      const [yasuo, yasuos] = await Promise.all([
        Yasuo.findOne({ nick: req.params.nick }),
        Yasuo.find({}, { _id: 0, title: 1, nick: 1 })
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
    console.log(yasuos);
  
    res.render('yasuo', {
      title: title,
      picture: picture,
      desc: desc,
      menu: yasuos
    });
  }

module.exports = router;
