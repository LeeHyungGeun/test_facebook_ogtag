var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;


app.get('/', function (req, res) {
  // console.log(req.headers);
  console.log(req);
  res.send('Hello World!');

});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
