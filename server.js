var express = require('express'),
    app = express(),
    OG = require('express-metatag')('og'),
    port = process.env.PORT || 8000;

app.use(OG([{
  url: 'https://www.worksmobile.com/jp',
  type: 'website',
  title: '仕事がはかどる 気持ちが伝わる - Works Mobile',
  description: 'いつでもどこでも、アプリひとつでメッセンジャーもメールもカレンダーが使えて仕事がはかどる。LINEスタンプで気持ちが伝わるビジネスコミュニケーションを。',
  image: 'https://www.worksmobile.com/img/ogtag/ogtag_jp.jpg',
  locale: 'ja_JP'
}]));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  // console.log(req.headers);
  // console.log(req);
  res.render('index.html');
  res.end();
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
