#!/usr/bin/env node

/* eslint-disable */

// Search endpoint in order to obtain band id
// Revocation "id": "78107"
// http://em.wemakesites.net/search/band_name/revocation?api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1

var jsonfile = require('jsonfile');
var request = require('request');

var bandList = './src/data/band-list.json';

const apiUrl = 'http://em.wemakesites.net/search/band_name/';
const apiKey = 'api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1';
const [, , ...bandArgs] = process.argv;

// console.dir(jsonfile.readFileSync(bandList));

// In terminal type yarn generate Some Band Name
request(`${apiUrl}${bandArgs}?${apiKey}`, function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
