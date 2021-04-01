const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getExperiments = function(callback) {
  var queryString = //TODO
  connection.query(queryString, function(error, results) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const getData = function(callback) {
  var queryString = //TODO
  connection.query(queryString, function(error, results) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const addData = function(/*TODO*/) {
  var queryString = //TODO
  connection.query(queryString, function(error, results) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getExperiments,
  getData,
  addData
};
