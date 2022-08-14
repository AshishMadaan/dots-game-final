// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var sassMiddleware = require('node-sass-middleware');

app.use(
  sassMiddleware({
    src: __dirname + '/dist',
    dest: '/tmp',
  })
);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));
app.use(express.static('/tmp'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
