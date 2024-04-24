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
