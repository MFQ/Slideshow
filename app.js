var express = require('express')
var app = express();
// var engines = require('consolidate');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);


// app.get('/', function (req, res) {
//   res.render('index');
// });

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

