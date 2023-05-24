#!/usr/bin/node
const fs = require('fs');

fs.readFile('cisfun', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
