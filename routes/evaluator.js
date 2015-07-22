var express = require('express');
var Client = require('node-rest-client').Client
var router = express.Router();

/* GET evaluation listing. */
router.get('/:type/:catalog/:resKey', function(req, res, next) {
  res.json({});
});

function locateRepo(){
  return "http://localhost:12616/";
}

function locateEngineHub(){
  return "http://localhost:12803/hub";
}

var evaluations = {};

//This is a mock
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

function assembleProcessers(type, flow){
  //for the cross validation, do cross validation
  return flow;
}

/* POST evaluation to the resource. */
router.post(
  '/:type/:catalog/:resKey',
  function(req, res, next) {
    var client = new Client();
    var url = locateRepo() + req.params.catalog + "/svcs/" + req.params.resKey;
    console.log("Request the process flow from " + url)
    client.get(
      url,
      function(data, response){
        if(response.statusCode == 200){
          console.log("Get the process flow from " + url)
          var flow = JSON.parse(data.toString('utf-8'));
          var adhocRequest = {
            "flow": assembleProcessers(req.params.type, flow),
            "data": req.body
          };
          next(adhocRequest);
        }
        else {
          res.json({error: 1});
        }
      });
  },
  function(adhocRequest, req, res, next) {
    var client = new Client();
    var url = locateEngineHub() + "/adhoc";
    var args = {
      data: adhocRequest,
      headers:{
        "Content-Type": "application/json"
      }
    }
    console.log("Request HUB to create a new adhoc process")
    client.post(
      url,
      args,
      function(data, response){
        if(response.statusCode == 200){
          console.log("HUB created a new adhoc process")
          var newProc = JSON.parse(data.toString('utf-8'));
          var evaluation = saveEvaluation(req.params.catalog, req.params.resKey, newProc.procKey);
          res.json(evaluation);
        }
        else {
          res.json({error: 1});
        }
      });
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
