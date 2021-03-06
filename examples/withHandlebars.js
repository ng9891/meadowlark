var express = require ('express');
var handlebars = require('express3-handlebars')
		.create({ defaultLayout:'main' });

var app = express();

//Set the view engine in Express to Handlebars
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Setting public folder so middleware can fetch from there
app.use(express.static(__dirname + '/public')); //static is a middleware of express

app.set('port', process.env.PORT || 8888);


//Home page router
app.get('/', function(req,res){
	res.render('home'); //viewsfolder
});

//random cookie fortune
var fortunes =[
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

//about page router
app.get('/about',function(req,res){
	var randomFortune = 
			fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune}); 
});


//custom 404 page
app.use(function(req,res,next){
		res.status(404);
		res.render('404'); //view
});

//custom 500 page
app.use(function(err, req, res, next){
		console.error(err.stack);
		res.status(500);
		res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on localhost:' +
		app.get('port') + ': press Ctrl-C to terminate.');
});