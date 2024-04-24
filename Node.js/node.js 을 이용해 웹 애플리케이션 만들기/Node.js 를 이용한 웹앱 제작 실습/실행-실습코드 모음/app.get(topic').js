app.get('/topic',function(req,res){
  fs.readdir('data',function(err,files){
    if (err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('view', {topics:files});
  })
});
