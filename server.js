var express = require('express'),
    app = express(),
    OG = require('express-metatag')('og'),
    port = process.env.PORT || 8000;

var tags = {
  jp: {
    url: 'https://www.worksmobile.com/jp',
    type: 'website',
    title: '仕事がはかどる 気持ちが伝わる - Works Mobile',
    description: 'いつでもどこでも、アプリひとつでメッセンジャーもメールもカレンダーが使えて仕事がはかどる。LINEスタンプで気持ちが伝わるビジネスコミュニケーションを。',
    image: 'https://www.worksmobile.com/img/ogtag/ogtag_jp.jpg',
    locale: 'jp',
    'locale:alternate': 'kr'
  },
  kr: {
    url: 'https://www.worksmobile.com/kr/',
    type: 'website',
    title: '업무가 쉬워지는 협업도구, Works Mobile',
    description: '메시지, 이메일, 파일, 일정까지 모든 업무 커뮤니케이션을 한 곳에서 해결! Worksmobile과 함께하면 업무가 더 빠르고 부드러워 집니다',
    image: 'https://www.worksmobile.com/img/ogtag/ogtag_kr.jpg',
    locale: 'kr',
    'locale:alternate': 'jp'
  }
}
app.use(OG([tags.kr]));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  // console.log(req.headers);
  //console.log(req);
  console.log(req.fb_locale);
  res.render('index.html');
  res.end();
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});


// references
// https://www.npmjs.com/package/express-metatag
