const express = require('express');
const app = express();
const port = 4000;     
app.set('view engine', 'pug');
app.use (express.static('public') );


app.get ( '/',(req,res)=> {
    res.render('index.pug',{
        title: "Page d'acceuil"
    } );
} );

app.get ( '/about',(req,res)=> {
    res.render('about.pug',{
        title: "A propos de nous"
    } );
} );

app.get ( '/contact',(req,res)=> {
    res.render('contact.pug',{
        title: "Nous contactez"
    } );
} );

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