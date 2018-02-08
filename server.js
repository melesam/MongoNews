
//require packages
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var request = require("request");
const cheerio = require('cheerio');


//initialize express
var app = express();

//connect to body-parser
app.use(bodyParser.json())
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//connect to express-handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});


// configure database with mongoose
mongoose.connect('mongodb://localhost/my_database');
var db = mongoose.connection;

//show any mongoose errors
db.on("error", function(error) {
	console.log("Mongoose Error:", error);
});




//use cheerio to scrape news
const $ = cheerio.load('<h2 class="">Hello world</h2>');

request('http://www.thefader.com/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Fader homepage.
});

 
app.listen(3000);







