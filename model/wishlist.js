var mongoose = require('../scripts/node_modules/mongoose'); // blueprint

var Schema = mongoose.Schema; // like plans for house
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new Schema({
    title: {type: String, default: "Cool Wish List"},
    products:[{type: ObjectId, ref:'Product'}] // ref relations like primary key
});

module.exports = mongoose.model('WishList', wishList);