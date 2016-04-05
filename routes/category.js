var express = require('express');




var routes = function (Category) {
    var router = express.Router();
    router.route('/')
     router.route('/')
        .post(function (req, res) {
            var category = new Category(req.body);
            category.save();
            res.status(201).send(category);

        })
        .get(function (req, res) {
            var query = req.query;
            Category.find(function (err, categories) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(categories)
            });
        });

     router.route('/:categoryId')
        .get(function (req, res) {
            Category.findById(req.params.categoryId, function (err, category) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(category)
            });
        });

    return router;
};
module.exports = routes;
