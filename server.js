let express = require('express');
let path = require('path');
let swig = require('swig');
let morgan = require("morgan");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let app = express();

// Setup server
app.set('port', (process.env.PORT || 3000));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// Setup client serving
app.use("/assets", express.static(__dirname + '/assets'));
app.set('view engine', 'html');
app.set('view options', {
    layout: false
});

app.use("/", express.static(__dirname + '/public/'));
app.set('views', path.join(__dirname, '/public/'));
app.engine('html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({ cache: false });

require('./routes')(app);

app.get('*', function(req, res) {
    res.render('app');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});