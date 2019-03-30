const Joi = require('joi'); //returns a class, so (J)oi
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());


//respond with json file, found in query Param
app.get('/getUnProcessedGiftCards', function (req, res, next) {

  var options = {
	root: __dirname + '/public/bdofiles',
	dotfiles: 'deny',
	headers: {
	  'x-timestamp': Date.now(),
	  'x-sent': true
	}
  };

  var filename = 'consolidationTable' + ".json";
  console.log("filename: " + filename);
  res.sendfile(filename, options, function (err) {
	if (err) {
	  next(err);
	} else {
	  console.log('sent:', filename);
	}
  });
});


app.post('/storeGiftCardData', function (req, res) {
  res.status(200).send('data stored successfully');
});

app.post('/getHistoricalData', function (req, res, next) {

  var options = {
	root: __dirname + '/public/bdofiles',
	dotfiles: 'deny',
	headers: {
	  'x-timestamp': Date.now(),
	  'x-sent': true
	}
  };

  var filename = 'consolidationTable' + ".json";
  console.log("filename: " + filename);
  res.sendfile(filename, options, function (err) {
	if (err) {
	  next(err);
	} else {
	  console.log('sent:', filename);
	}
  });
});

app.get('/casa/:name', function (req, res, next) {

  var options = {
	root: __dirname + '/public/bdoFiles',
	dotfiles: 'deny',
	headers: {
	  'x-timestamp': Date.now(),
	  'x-sent': true
	}
  };

  console.log("hey: " + options.root);

  var fileName = req.params.name + ".json";
  console.log("fileName: " + fileName);
  res.sendFile(fileName, options, function (err) {
	if (err) {
	  next(err);
	} else {
	  console.log('Sent:', fileName);
	}
  });
});

app.post('/login', (req, res, next) => {

  var options = {
	root: __dirname + '/public/bdoFiles',
	dotfiles: 'deny',
	headers: {
	  'x-timestamp': Date.now(),
	  'x-sent': true
	}
  };

  console.log("hey: " + options.root);

  var fileName = "loginAuth.json";
  console.log("fileName: " + fileName);
  res.sendFile(fileName, options, function (err) {
	if (err) {
	  next(err);
	} else {
	  console.log('Sent:', fileName);
	}
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

