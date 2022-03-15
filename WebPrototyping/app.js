var express = require('express');
var app = express();
var server = app.listen(8080, function(){
    console.log("Linknode Server Started at :8080");
});

app.get('/',function(req,res){
   res.render('index')
});

app.get('/d3example',function(req,res){
   res.render('d3example')
});

// Views
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
