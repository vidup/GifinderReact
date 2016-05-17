//Dependencies
var express = require('express');
var app = express();

//Middlewares
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/views/index.html');
});

app.use('/account', require('./routes/account'));

//Server start-up
app.listen(process.env.PORT || 3000 , function(){
  if(process.env.PORT){
    console.log("Listening on "+process.env.PORT);
  }else{
    console.log("Listening on port 3000");
  }
});
