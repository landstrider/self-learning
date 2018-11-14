var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function pr() {
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
	      request.onreadystatechange = function() {
			      if (request.readyState == 4) {
					        resolve(request.responseText);
					      }
			    }
	      request.open('get', 'https://api.github.com/users/landstrider', true)
	      request.send();
	    });
}

pr().then(function(val) {
    console.log(val)
}, function(err) {
    console.log(err)
}) 
