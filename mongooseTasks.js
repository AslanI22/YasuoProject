var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var Yas = require("./models/yasuo.js").Yas
var fid = new Yas({
title: "Как мы проиграли?",
nick: "ff15"
})
console.log(fid)

fid.save()
.then((yasik) => {
        console.log("Saved Yasuo with title:", yasik.title);
})
.catch((err) => {
        console.error(err);
});
