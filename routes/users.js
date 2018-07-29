const express = require('express');
const router = express.Router();

const queries = require('../db/queries');
const authHelpers = require('../auth/_helpers');

/* GET users listing. */
router.get('/', authHelpers.loginRequired, function(req, res, next) {
  queries.getUsers()
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});

// Get User Instance
router.get('/:id', authHelpers.loginRequired, function(req, res, next) {
  queries.getUser(req.body.id)
  .then(function(user) {
    res.status(200).json(user);
  })
  .catch(function(error) {
    next(error);
  });
});

module.exports = router;
