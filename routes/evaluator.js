var express = require('express');
var Client = require('node-rest-client').Client
var router = express.Router();

/* GET evaluation listing. */
router.get('/:type/:catalog/:resKey', function(req, res, next) {
  res.json({});
});


function getProcessers(proType, catalog, resKey){
  return [];
}

function locateEngineHub(){
  return "http://localhost:12803/hub";
}

var evaluations = {};
function saveEvaluation(catalog, resKey, procKey){
  var dsKey = catalog + "/" + resKey;
  if(evaluations[dsKey] == null){
    evaluations[dsKey] = [];
  }
  evaluations[dsKey].push(procKey);
  console.log("save evaluation: " + procKey)
  return {
    "key": procKey
  };
}

/* POST evaluation to the resource. */
router.post('/:type/:catalog/:resKey', function(req, res, next) {
  var client = new Client();
  var url = locateEngineHub() + "/processes";
  var args = {
    "processers": [],//getProcessers(req.params.type, req.params.catalog, req.params.resKey),
    "data": req.body
  };
  console.log(url)
  client.post(
    url,
    args,
    function(data, response){
      console.log(data.body);
      var evaluation = saveEvaluation(req.params.catalog, req.params.resKey, data.procKey);
      res.json(evaluation);
    }
  );
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
