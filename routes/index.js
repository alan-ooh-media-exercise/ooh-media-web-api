var express = require('express');
var router = express.Router();

var queries = require('../db/queries');

router.get('/shoppingcentres', function(req, res, next) {
  queries.getShoppingCentres()
  .then(function(shoppingCentres) {
    res.status(200).json(shoppingCentres);
  })
  .catch(function(error) {
    next(error);
  });
});

module.exports = router;
