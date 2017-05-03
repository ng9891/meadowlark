var express = require ('express');
var handlebars = require('express3-handlebars')
		.create({ defaultLayout:'main' });
var fortune = require('./lib/fortune.js'); //Self-made module

var app = express();

//Set the view engine in Express to Handlebars
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Setting public folder so middleware can fetch from there
app.use(express.static(__dirname + '/public')); //static is a middleware of express

app.set('port', process.env.PORT || 8888);

//sets showTests variable for testing environment in Mocha
app.use(function(req,res,next){
		res.locals.showTests = app.get('env') !== 'production' &&
				req.query.test === '1';
				next();
});

//Home page router
app.get('/', function(req,res){
	res.render('home'); //viewsfolder
});

//about page router
app.get('/about',function(req,res){
	//res.render(PATH, obj);
	res.render('about', {
				fortune: fortune.getFortune(),
				pageTestScript:'/qa/tests-about.js'
	}); 			
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