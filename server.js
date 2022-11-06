var express = require("express");
var bodyParser = require('body-parser');
// var session = require("express-session");

var app = express();
// app.use(session({secret:'codigosecreto'}));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.use(express.static(__dirname + "/static"));
app.use("/recursos", express.static(__dirname + "/public"));

let arrayLocation = ['Loc 1','Loc 2','Loc 3','Loc 4','Loc 5']
let arrayLanguage = ['Lan 1','Lan 2','Lan 3','Lan 4','Lan 5']

app.get('/', function(req, res) {
    res.render('index', {Location:arrayLocation, Language:arrayLanguage});
})
 
app.post('/resultado', function(req, res) {
    let salida = {Name:req.body.Name,Location:arrayLocation[req.body.Location],Language:arrayLanguage[req.body.Language],Comment:req.body.Comment};
    res.render('resultado', {encuesta:salida});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
}) 