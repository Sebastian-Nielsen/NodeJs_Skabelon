const console = require('../config/prettifyConsole');
console.init('[init router] base');
const bodyParser = require('body-parser');
const path = require('path');




const app = require('express').Router();


app.get(/\/(homepage(\.pug)?)?$/i, (req, res) => {
	console.log('[get:] "/"');
	// if user enters eg "/" og "/homepage.pug" change it "/homepage"
	if (req.url !== '/homepage') return res.redirect('/homepage');
	res.render('homepage.pug')
});


module.exports = app;


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
	console.log('404: PAGE NOT FOUND');
	res.status(404).render("error.pug");
});


