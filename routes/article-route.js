module.exports= function(app){
    var Article=require('./../')
    app.get('/new-article', function(request, response){
  response.sendFile(__dirname+'/form.html');
});

var article = [];

app.post('/article/create', function(request, response){
  var new_article = new Article(request.body);
  new_article.save(function(err, data){
    if(err)
    return response.status(400).json({error:"Please add a title"}); 
    console.log(data);
    return response.status(200).json({message: "Article successfully created"});
  })
  console.log(request.body);
  /* Required field: Title
  /if(!request.body.title){
    return response.status(400).json({error:"Please add a title"});
  }
  save(request.body);
  return response.status(200).json({message: "Article successfully created"});*/
});

app.get('/article/list', function(request, response){
  return response.status(200).json({articles: article});
});

server.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server running');
});

// Remove the file serving code and add the express.js code
// var fs = require('fs');
//   var server = http.createServer(function(req, res){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     fs.readFile('index.html', function(err, data){
//         if(err){
//             return console.log("File system read error");
//         }
//         res.end(data);
//     });
//     // res.end("Hello World\n");
//   });
//   server.listen(process.env.PORT, process.env.IP, function(){
//     console.log('Server running');
//   });


article.push({title:'Test Article 1', content:'content',})
article.push({title:'Test Article 2', content:'content',})

app.get('/article/:articleID', function(request, response){
  response.render('../article.ejs', {
    article: article[request.params.articleID]
  })
}