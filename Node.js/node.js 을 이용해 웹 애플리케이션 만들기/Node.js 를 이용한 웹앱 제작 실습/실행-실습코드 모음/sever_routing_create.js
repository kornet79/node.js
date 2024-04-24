app.get('/topic/new',function(req,res){
  res.render('new');
})
// /topic/new 라는 경로로 접근하면, new.jade 파일을 보여줄 것이다.
app.post('/topic',function(req,res){
  res.send('Hi');
})
// 사용자가 /topic 경로로 POST 방식으로 글을 작성해서 보내면, 
// 서버로 보내져서 다루는 과정으로 진행할 것이다.
