var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var Yas = mongoose.model('Yasuo', { name: String })
var fid = new Yas({ name: 'Nightbringer' })
fid.save().then(() => {
    console.log('Хасаги!');
})
.catch((err) => {
console.error(err);
});