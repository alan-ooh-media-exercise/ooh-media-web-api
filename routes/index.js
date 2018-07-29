const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

// Start Shopping Centre Endpoints
router.get('/shoppingcentres', function(req, res, next) {
  queries.getShoppingCentres()
  .then(function(shoppingCentres) {
    res.status(200).json(shoppingCentres);
  })
  .catch(function(error) {
    next(error);
  });
});

router.post('/shoppingcentres', function(req, res, next) {
  queries.addShoppingCentre(req.body)
  .then(function(id) {
    return queries.getShoppingCentre(id);
  })
  .then(function(shoppingCentre) {
    res.status(201).json(shoppingCentre);
  })
  .catch(function(error) {
    next(error);
  });
});

router.get('/shoppingcentres/:id', function(req, res, next) {
  const id = req.params.id;
  queries.getShoppingCentre(id)
  .then(function(shoppingCentre) {
    res.status(200).json(shoppingCentre);
  })
  .catch(function(error) {
    next(error);
  });
});

router.patch('/shoppingcentres/:id', function(req, res, next) {
  const id = req.params.id;
  queries.updateShoppingCentre(id, req.body)
  .then(function(id) {
    return queries.getShoppingCentre(id);
  })
  .then(function(shoppingCentre) {
    res.status(200).json(shoppingCentre);
  })
  .catch(function(error) {
    next(error);
  });
});

router.delete('/shoppingcentres/:id', function(req, res, next) {
  const id = req.params.id;
  queries.deleteShoppingCentre(id)
  .then(function() {
    res.status(204);
  })
  .catch(function(error) {
    next(error);
  });
});

// END Shopping Centre Endpoints// Start Shopping Centre Endpoints

// START Asset End Points
router.get('/assets', function(req, res, next) {
  queries.getAssets()
  .then(function(assets) {
    res.status(200).json(assets);
  })
  .catch(function(error) {
    next(error);
  });
});

router.post('/assets', function(req, res, next) {
  queries.addAsset(req.body)
  .then(function(id) {
    return queries.getAsset(id);
  })
  .then(function(asset) {
    res.status(201).json(asset);
  })
  .catch(function(error) {
    next(error);
  });
});

router.get('/assets/:id', function(req, res, next) {
  const id = req.params.id;
  queries.getAsset(id)
  .then(function(asset) {
    res.status(200).json(asset);
  })
  .catch(function(error) {
    next(error);
  });
});

router.patch('/assets/:id', function(req, res, next) {
  const id = req.params.id;
  queries.updateAsset(id, req.body)
  .then(function(id) {
    return queries.getAsset(id);
  })
  .then(function(asset) {
    res.status(200).json(asset);
  })
  .catch(function(error) {
    next(error);
  });
});

router.delete('/assets/:id', function(req, res, next) {
  const id = req.params.id;
  queries.deleteAsset(id)
  .then(function() {
    res.status(204);
  })
  .catch(function(error) {
    next(error);
  });
});

// END Assets Endpoints



module.exports = router;
