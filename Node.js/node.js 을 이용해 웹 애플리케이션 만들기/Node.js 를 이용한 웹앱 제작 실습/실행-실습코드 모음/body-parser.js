app.post('/topic',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
	res.send('title is' + title);
});
// bodyParser 를 통해서 req 객체에 body 라는 객체가 생성
// title 과 description 변수를 설정한다. req.body 를 사용
