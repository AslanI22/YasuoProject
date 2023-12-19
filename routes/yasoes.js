var express = require('express');
var router = express.Router();
var Yasuo = require('../models/yasuo.js').Yasuo

router.get('/:nick', async function(req, res, next) {
    try {
        const myYasuo = await Yasuo.findOne({ nick: req.params.nick }).exec();
        if (!myYasuo) {
            throw new Error("такого yasuo пока нет на сайте");
        }
        res.render('yasuo', {
            title: myYasuo.title,
            picture: myYasuo.avatar,
            desc: myYasuo.desc,
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
