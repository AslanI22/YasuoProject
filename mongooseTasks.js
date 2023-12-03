var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var schema = mongoose.Schema({ name: String })


schema.methods.fidim = function(){
    console.log(this.get("name") + " жестко нафидил")
    }

var Yas = mongoose.model('Yasuo', schema);
var fid = new Yas({ name: 'Nightbringer' })
fid.save().then(() => {
    fid.fidim();
    console.log('Хасаги!');
})
.catch((err) => {
console.error(err);
});