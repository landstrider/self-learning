var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function pr() {
  var request = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        resolve(request.responseText);
      }
    }
	request.open('POST', 'http://18.224.82.70:8080/backend-0.0.1-SNAPSHOT/getHistoricalData', true)
    request.send(JSON.stringify({ "fromDate": "12-12-2018", "toDate": "12-12-2018", "frequency":"Past two months" }));
  });
}

pr().then(function(val) {
  console.log(val)
}, function(err) {
  console.log(err)
}) 

