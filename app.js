
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 80);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'hey this isnt dirt'}));
app.use(app.router);
app.use(express['static'](path.join(__dirname, 'build')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/oauth2Response', routes.oauth);
app.get('/api/v1/*', routes.proxy);
app.post('/api/v1/*', routes.proxy);
app.put('/api/v1/*', routes.proxy);
app.del('/api/v1/*', routes.proxy);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

