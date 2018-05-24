#!/usr/bin/env node

/* eslint-disable */

// Search endpoint in order to obtain band id
// Revocation "id": "78107"
// http://em.wemakesites.net/search/band_name/revocation?api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1

var jsonfile = require('jsonfile');
var request = require('request');
var Promise = require('promise');

var bandList = './src/data/band-list.json';
var read = Promise.denodeify(jsonfile.readFile);

const apiUrl = 'http://em.wemakesites.net/search/band_name/';
const apiKey = 'api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1';
const [, , ...bandArgs] = process.argv;

// See denodify https://github.com/then/promise#promisedenodeifyfn
// When reading, writing, and pulling fromt he API we will probably want to use promises
var readPromise = read(bandList).then(function(obj) {
  console.dir(obj);
});

// In terminal type yarn generate Some Band Name
function searchBand(url) {
  var options = {
    url: `${apiUrl}${bandArgs}?${apiKey}`
  };

  return new Promise(function(resolve, reject) {
    request(options, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

var dataPromise = searchBand();
dataPromise.then(
  function(result) {
    console.log(result);
  },
  function(error) {
    console.log(error);
  }
);
