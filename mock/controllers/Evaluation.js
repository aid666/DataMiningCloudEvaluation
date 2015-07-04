'use strict';

var url = require('url');


var Evaluation = require('./EvaluationService');


module.exports.engineSvcsSvcKeyGet = function engineSvcsSvcKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Evaluation.engineSvcsSvcKeyGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineSvcsSvcKeyDelete = function engineSvcsSvcKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Evaluation.engineSvcsSvcKeyDelete(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineSvcsSvcKeyHistoryEvaKeyGet = function engineSvcsSvcKeyHistoryEvaKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.engineSvcsSvcKeyHistoryEvaKeyGet(svcKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineSvcsSvcKeyHistoryEvaKeyDelete = function engineSvcsSvcKeyHistoryEvaKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.engineSvcsSvcKeyHistoryEvaKeyDelete(svcKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineTrainersTrainerKeyGet = function engineTrainersTrainerKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Evaluation.engineTrainersTrainerKeyGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineTrainersTrainerKeyDelete = function engineTrainersTrainerKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Evaluation.engineTrainersTrainerKeyDelete(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineTrainersTrainerKeyHistoryEvaKeyGet = function engineTrainersTrainerKeyHistoryEvaKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.engineTrainersTrainerKeyHistoryEvaKeyGet(trainerKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineTrainersTrainerKeyHistoryEvaKeyDelete = function engineTrainersTrainerKeyHistoryEvaKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.engineTrainersTrainerKeyHistoryEvaKeyDelete(trainerKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyGet = function repoSvcsSvcKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Evaluation.repoSvcsSvcKeyGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyDelete = function repoSvcsSvcKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Evaluation.repoSvcsSvcKeyDelete(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyHistoryEvaKeyGet = function repoSvcsSvcKeyHistoryEvaKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.repoSvcsSvcKeyHistoryEvaKeyGet(svcKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyHistoryEvaKeyDelete = function repoSvcsSvcKeyHistoryEvaKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.repoSvcsSvcKeyHistoryEvaKeyDelete(svcKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyGet = function repoTrainersTrainerKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Evaluation.repoTrainersTrainerKeyGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyDelete = function repoTrainersTrainerKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Evaluation.repoTrainersTrainerKeyDelete(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyHistoryEvaKeyGet = function repoTrainersTrainerKeyHistoryEvaKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.repoTrainersTrainerKeyHistoryEvaKeyGet(trainerKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyHistoryEvaKeyDelete = function repoTrainersTrainerKeyHistoryEvaKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var evaKey = req.swagger.params['evaKey'].value;
  

  var result = Evaluation.repoTrainersTrainerKeyHistoryEvaKeyDelete(trainerKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
