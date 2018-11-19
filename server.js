// //  var http = require('http');
// //  var fs = require('fs');
 
// //   var server = http.createServer(function(req, res)
// //   {
// //     res.statusCode = 200;
// //     // res.setHeader('Content-Type', 'text/plain');
// //     // res.end("Hello World\n");
    
// //         res.setHeader('Content-Type', 'text/html');
// //         fs.readFile('index.html', function(err, data){
        
// //         if(err)
// //         {
// //             return console.log('File Read Error!');
// //         }
        
// //         res.end(data);
        
// //         });
        
// //   });
// //   server.listen(process.env.PORT, process.env.IP, function(){
// //     console.log('Server running');
// //   });






// var http = require('http');
// var express = require('express');
// var app = express();
// var server = http.Server(app);

// var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({encoded:true}));


// app.get('/', function(request, response){
//     response.sendFile(__dirname+'/index.html');
    

    
// });




// app.get('/about', function(request, response){
//     response.sendFile(__dirname+'/about.html');
    

    
// });


//  app.get('/new-article', function(request, response)
//   {
//       response.sendFile(__dirname+'/form.html');
//   });
  
 
//  var article = {} 
  
//   app.post('/api/article/create', function(request, response)
//   {
//       console.log(request.body);
//       if(!request.body.title){
         
//           return response.status(400).json({error: 'PLease add a title!'});
//       }
//       response.status(200).json({message: 'Article Created!'});
//   });
  

//  server.listen(process.env.PORT, process.env.IP, function(){
//     console.log('Server running');
    
//   });
  
  
  
  
  
 var http = require('http');
// Using express to start the server and add routes
var express = require("express");
var app = express();            // The express app
var server = http.Server(app);  // Adding the server
var bodyParser = require('body-parser');

// Configuring app for body-parser
app.use(bodyParser.json());
// Ensuring it uses encoded URLs
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){                 // '/' is the root URL
  response.sendFile(__dirname+'/index.html');
});

app.get('/about-page', function(request, response){       // '/' is the root URL
  response.sendFile(__dirname+'/about.html');
});

app.get('/new-article', function(request, response){
  response.sendFile(__dirname+'/form.html');
});

var article = [];

app.post('/article/create', function(request, response){
  console.log(request.body);
  // Required field: Title
  if(!request.body.title){
    return response.status(400).json({error:"Please add a title"});
  }
  article.push(request.body);
  return response.status(200).json({message: "Article successfully created"});
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
});