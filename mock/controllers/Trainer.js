'use strict';

var url = require('url');


var Trainer = require('./TrainerService');


module.exports.engineTrainersTrainerKeyGet = function engineTrainersTrainerKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.engineTrainersTrainerKeyGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineTrainersTrainerKeyDelete = function engineTrainersTrainerKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.engineTrainersTrainerKeyDelete(trainerKey);

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
  

  var result = Trainer.engineTrainersTrainerKeyHistoryEvaKeyGet(trainerKey, evaKey);

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
  

  var result = Trainer.engineTrainersTrainerKeyHistoryEvaKeyDelete(trainerKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyGet = function repoTrainersTrainerKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.repoTrainersTrainerKeyGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyDelete = function repoTrainersTrainerKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.repoTrainersTrainerKeyDelete(trainerKey);

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
  

  var result = Trainer.repoTrainersTrainerKeyHistoryEvaKeyGet(trainerKey, evaKey);

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
  

  var result = Trainer.repoTrainersTrainerKeyHistoryEvaKeyDelete(trainerKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
