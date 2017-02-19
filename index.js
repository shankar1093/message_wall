
var express = require('express');
var app = express();
var fs = require('fs');
var jsonObj = {
      "hero": "CHO CHO",
      "name": "Peter Benjamin Parker", 
      "img":  "https://s3-us-west-2.amazonaws.com/ichodesign/gsjam/IMG_0274.JPG",
      "size": 40000
};

function appendObj(obj){
	var jsonFile = fs.readFileSync('marvel.json');
	var _file = JSON.parse(jsonFile);
	_file.children.push(obj);
	var ichoJson = JSON.stringify(_file);
	fs.writeFileSync('marvel.json', ichoJson);
}


appendObj(jsonObj);
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/upload', function(request, response) {
  response.render('upload.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



