var express = require('express');
//var controller = require('../controllers/products');




var routes = function (Product) {
    var router = express.Router();
    router.route('/')
        .post(function (req, res) {
            var product = new Product(req.body);
            product.save();
            res.status(201).send(product);

        })
        .get(function (req, res) {
            var query = {};
            if (req.query.category) {
                req.query = req.query.category;
            }
            Product.find(function (err, products) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(products)
            });
        });

    router.route('/:productId')
        .get(function (req, res) {
            Product.findById(req.params.productId, function (err, product) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(product)
            });
        });


    return router;
};
module.exports = routes;
