var mongoose = require('../scripts/node_modules/mongoose'); // blueprint
var Schema = mongoose.Schema; // like plans for house

// setting up rules
var product = new Schema({ 
    title: String,
    price: Number,
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model('Product', product); // Products