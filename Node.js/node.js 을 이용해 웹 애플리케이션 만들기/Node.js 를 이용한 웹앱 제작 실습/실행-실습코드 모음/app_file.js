var express = require('express');
// express 를 사용한다.
var app = express();
// 애플리케이션 객체를 app 에 넣는다.
app.listen(3000,function(){
	console.log('Connected, 3000 port!');
})
// 객체 app 에 있는 메서드 중에서 listen 메서드를 사용하여 3000번 포트로 설정한다.
// connection 완료
