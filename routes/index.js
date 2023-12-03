var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Nightbringer', function (req, res, next) {
  res.render('skin', {
    title: "Nightbringer Yasuo",
    picture: "images/Nightbringer.jpg",
    desc: "Ясуо, рожденный из гноящихся отголосков на заре творения, является адским воплощением хаоса в космосе. Обреченный навсегда сразиться с Несущим Рассвет, он ждет дня, когда его тьма наконец рассечет ее свет."
  });
});


router.get('/seadog', function (req, res, next) {
  res.render('skin', {
    title: "Sea Dog yasuo",
    picture: "images/SeaDog.jpg",
    desc: "Получив силу от Бухру во время битвы против Вьего из Камавора, Ясуо стал маловероятным защитником для детей Нагакабуроса — его одержимость прошлыми событиями шла вразрез со всем, во что они верили. силы тьмы одерживают победу."
  });
});


router.get('/truthdragon', function (req, res, next) {
  res.render('skin', {
    title: "Truth Dragon",
    picture: "images/TruthDragon.jpg",
    desc: "В одиночку против армии Ясуо решил выстоять и сражаться. Он заблокировал узкий проход между двумя горами, позволив невинным избежать кровопролития. Владея истиной стали как танцем, он сразил бесчисленное количество врагов, но даже он не смог продержаться вечно. Дракон спустился с небес и одарил Ясуо силой небес."
  });
});


module.exports = router;
