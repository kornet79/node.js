(3) app_file.js 서버 파일에 view 설정을 한다.


app.set('views','./views_file');
// views 를 /views_file 폴더로 설정한다.
app.set('view engine', 'jade');
// view 엔진으로 jade를 사욯알 것이다.

(4) 간단하게 라우팅할 서버를 생성한다.

  app.get('/topic/new',function(req,res){
  res.render('new');
})
// /topic/new 라는 경로로 접근하면, new.jade 파일을 보여줄 것이다.
app.post('/topic',function(req,res){
  res.send('Hi');
})
// 사용자가 /topic 경로로 POST 방식으로 글을 작성해서 보내면, 
// 서버로 보내져서 다루는 과정으로 진행할 것이다.

(5) 사용할 new.jade 파일을 작성한다.

  doctype html
html
  head
    meta(charset='utf-8')
  body
    form(action='/topic' method='post')
      p
        input(type='text' name='title' placeholder='title')
      p
        textarea(name='description')
      p
        input(type='submit')

- meta 를 통해서, 사용할 방식은 utf-8 이라는 것을 보여준다.
- form 을 통해서, action 으로 사용할 라우터와 연결하고, 전송방식을 설정한다. (post 방식으로 보낼것)
- input 과 textarea 를 작성한다. (사용자가 정보를 입력할 공간)

(6) jade 파일의 자동 줄 바꿈을 위해서, 자동 줄 바꿈 코드를 사용한다.

          app.locals.pretty = true;
// jade 파일을 자동 줄바꿈함으로써, 이쁘게 보이도록 설정한다.
