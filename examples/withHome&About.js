var express = require ('express');
var handlebars = require('express3-handlebars')
		.create({ defaultLayout:'main' });

var app = express();

app.engine ('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 8888);

//Home page router
app.get('/', function(req,res){
	res.type('text/plain'); //Express way of writeHead
	res.send('Meadowlark Travel'); //Express way of res.end();
});

//about page router
app.get('/about',function(req,res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});


//custom 404 page
app.use(function(req,res){
		res.type('text/plain');
		res.status(404);
		res.send('404 - Not Found');
});

//custom 500 page
app.use(function(err, req, res, next){
		console.error(err.stack);
		res.type('text/plain');
		res.status(500);
		res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on localhost:' +
		app.get('port') + ': press Ctrl-C to terminate.');
});