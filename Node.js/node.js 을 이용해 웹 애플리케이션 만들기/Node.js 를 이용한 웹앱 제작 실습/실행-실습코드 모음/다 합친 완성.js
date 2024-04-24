app.get('/topic/:id',function(req,res){
  var id = req.params.id;
  fs.readdir('data',function(err,files){
    if (err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    fs.readFile('data/'+id,'utf8',function(err,data){
      if (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
      res.render('view',{topics:files, title:id, description:data});
    });
  })
});
