var express = require('express');




var routes = function (Brand) {
    var router = express.Router();
    router.route('/')
        .get(function (req, res) {
        var query = req.query;
            Brand.find(function (err, brands) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(brands)
            });
        });

     router.route('/:brandId')
        .get(function (req, res) {
            Brand.findById(req.params.brandId, function (err, brand) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(brand)
            });
        });

    return router;
};
module.exports = routes;
