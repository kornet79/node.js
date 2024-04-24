fs.readFile('data/'+id,'utf8',function(err,data){
      if (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
      res.render('view',{title:id, description:data});
    });
