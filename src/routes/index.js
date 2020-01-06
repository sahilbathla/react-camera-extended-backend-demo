const express = require('express');
const router = express.Router();
const ImagesController = require('../controllers/ImagesController');

/* GET home page. */
router.post('/images', function(req, res, next) {
  new ImagesController().create(req, res);
});

module.exports = router;
