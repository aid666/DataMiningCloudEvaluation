'use strict';

var url = require('url');


var Svc = require('./SvcService');


module.exports.engineSvcsSvcKeyGet = function engineSvcsSvcKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svc.engineSvcsSvcKeyGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.engineSvcsSvcKeyDelete = function engineSvcsSvcKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svc.engineSvcsSvcKeyDelete(svcKey);

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
  

  var result = Svc.engineSvcsSvcKeyHistoryEvaKeyGet(svcKey, evaKey);

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
  

  var result = Svc.engineSvcsSvcKeyHistoryEvaKeyDelete(svcKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyGet = function repoSvcsSvcKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svc.repoSvcsSvcKeyGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.repoSvcsSvcKeyDelete = function repoSvcsSvcKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svc.repoSvcsSvcKeyDelete(svcKey);

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
  

  var result = Svc.repoSvcsSvcKeyHistoryEvaKeyGet(svcKey, evaKey);

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
  

  var result = Svc.repoSvcsSvcKeyHistoryEvaKeyDelete(svcKey, evaKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
