'use strict';

var url = require('url');


var Svcs = require('./SvcsService');


module.exports.engineSvcsSvcKeyPost = function engineSvcsSvcKeyPost (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.engineSvcsSvcKeyPost(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineTrainersTrainerKeyPost = function engineTrainersTrainerKeyPost (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.engineTrainersTrainerKeyPost(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyPost = function repoSvcsSvcKeyPost (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.repoSvcsSvcKeyPost(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoTrainersTrainerKeyPost = function repoTrainersTrainerKeyPost (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.repoTrainersTrainerKeyPost(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
