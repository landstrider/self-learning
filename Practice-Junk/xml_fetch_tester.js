var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function pr() {
  var request = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        resolve(request.responseText);
      }
    }
	request.open('GET', 'http://hvs:8081/bdo-unibank-sit.apigee.net/v1/accounts/$name/$params', true)
    request.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
  });
}

pr().then(function(val) {
  console.log(val)
}, function(err) {
  console.log(err)
}) 

