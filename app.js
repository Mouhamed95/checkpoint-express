const express = require('express');
const app = express();
const port = 4000;     
app.get('/', function(req, res){
      res.end("Voici Notre Page");
 });
 app.get('/service', function(req, res){
    res.end("On vous propose des services qui sont a vos Besoin");
});
app.get('/contact', function(req, res){
    res.end("Contactez-nous au 778645458");
});
app.use('/ouverture', function(req, res, next){
    res.end("L'application web est disponible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h)." + Date().toString());
    next();
 });

  app.listen(port, function(){
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  }); 
  
 
 


//app.get('*', function(req, res){  res.end('Hello World');  });
//app.listen(port, function() {
    //console.log('The server is running, ' +
        //' please, open your browser at http://localhost:%s', 
        //port);
  //});