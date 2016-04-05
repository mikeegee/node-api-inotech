var Product = require('../models/product');


    exports.get = function (req, res) {
        Product.find(function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json({
            success: true,
            food: data
        });
    });
    };
}

