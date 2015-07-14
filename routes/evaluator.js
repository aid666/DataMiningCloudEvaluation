var express = require('express');
var router = express.Router();

/* GET evaluation listing. */
router.get('/:type/:catalog/:resKey', function(req, res, next) {
  res.json({});
});

/* POST evaluation to the resource. */
router.post('/:type/:catalog/:resKey', function(req, res, next) {
  res.json({});
});

/* DELETE evaluation to the resource. */
router.delete('/:type/:catalog/:resKey', function(req, res, next) {
  res.json({});
});

/* GET evaluation listing. */
router.get('/:type/:catalog/:resKey/:evaKey', function(req, res, next) {
  res.json({});
});

/* DELETE evaluation to the resource. */
router.delete('/:type/:catalog/:resKey/:evaKey', function(req, res, next) {
  res.json({});
});


module.exports = router;
