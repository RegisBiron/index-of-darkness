#!/usr/bin/env node

/* eslint-disable */

// Search endpoint in order to obtain band id
// Revocation "id": "78107"
// http://em.wemakesites.net/search/band_name/revocation?api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1

var jsonfile = require('jsonfile');
var request = require('request');
var Promise = require('promise');

// var bandList = './src/data/band-list.json';
var bandList = ['revocation', 'aborted', 'cemetary']
var read = Promise.denodeify(jsonfile.readFile);

const apiUrl = 'http://em.wemakesites.net/search/band_name/';
const apiKey = 'api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1';
// const [, , ...bandArgs] = process.argv;


// See denodify https://github.com/then/promise#promisedenodeifyfn
// When reading, writing, and pulling fromt he API we will probably want to use promises
// var readPromise = read(bandList).then(function(obj) {
//   for (var alpha in obj) {
//     for(var lettergroup in obj[alpha]){
//       for(var band in obj[alpha][lettergroup]){
//         console.log( obj[alpha][lettergroup][band])
//       }
//     }
//   }
// });


bandList.forEach(function(element) {
  var dataPromise = searchBand(element);
  dataPromise.then(
    function(result) {
      // console.log(result);
    },
    function(error) {
      console.log(error);
    }
  );
});


// In terminal type yarn generate Some Band Name
function searchBand(band) {
  var options = {
    url: `${apiUrl}${band}?${apiKey}`
  };

  return new Promise(function(resolve, reject) {
    request(options, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body);
        parsedBody = JSON.parse(body);
        firstResult = parsedBody.data.search_results[0];
        console.log(firstResult);
        // resultName = JSON.parse(firstResult);
        // console.log(resultName.)
        // console.log(response);
      }
    });
  });
}




