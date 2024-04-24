var express = require('express');
var bodyParser = require('body-Parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.locals.pretty = true;

app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {
      topics: files
    })
  });
});
// 하나의 라우터에 여러 경로를 합치는 과정 [ ] 안에 넣으면된다.
// 중복되지 않는 부분을 합친다.
app.get(['/topic', '/topic/:id'], function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id;
    if (id) {
      // id 값이 있을 때
      fs.readFile('data/' + id, 'utf8', function(err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {
          topics: files,
          title: id,
          description: data
        });
      })
    } else {
      //id 값이 없을 때, /topic 으로 검색하고 들어왔을 때
      res.render('view', {
        topics: files,
        title: 'Welcome',
        description: 'Hello, Javascript for server.'
      });
    }
  })
});

// app.get('/topic/:id', function(req, res) {
//   var id = req.params.id;
//   fs.readdir('data', function(err, files) {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Internal Server Error');
//     }
//   })
// });
app.post('/topic', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/' + title, description, function(err) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } // 글을 잘 작성했는지 볼 수 있게, 경로로 보내준다.
    // redirect 를 통해서 처리를 하고 나서, 사용자를 해당 경로로 다시 보내준다.
    res.redirect('/topic/'+title);
  });
})

app.listen(3000, function() {
  console.log('Connected, 3000 port!');
})
