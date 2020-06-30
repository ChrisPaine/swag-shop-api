var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// need mongod running to connect
var db =  mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('../model/product');
var WishList = require('../model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(req, res){
    var product = new Product();
    // var product = new Product(req.body); opt2
    // var product = new Product({title:req.body.title, price:res.body.price}) opt3
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function(err, savedProduct){
        if(err){
            res.status(500).send({error:"Could not save product"});
        } else {
            res.send(savedProduct);
            //res.status(200).json(savedProduct); opt2
        }
    });
});

app.get('/product', function(req, res){
    Product.find({}, function(err, products){ // find async
        if(err){
            res.status(500).send({error: "Could not fetch products"});
        } else {
            res.send(products); // response and error inside callback because of async
        }
    });
    
});

app.listen(3000, function(){
    console.log("\n>>> Swag Shop API running on port 3000...");
});
 