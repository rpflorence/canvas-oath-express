var request = require('request');
var canvas = 'https://canvas.instructure.com';

exports.index = function(req, res){
  if (req.session.token) {
    res.render('index', {});
  } else {
    res.redirect('/login');
  }
};

var sharedParams = {
  client_id: '10000000000378',
  response_type: 'code',
  redirect_uri: 'http://canvas-20x6.herokuapp.com/oauth2response'
};

exports.login = function(req, res) {
  var url = canvas+'/login/oauth2/auth?';
  var params = parameterize(sharedParams);
  res.redirect(url + params);
};

exports.oauth = function(req, res) {
  if (req.query.error || !req.query.code) {
    res.send('That did not work, <a href="/login">try again</a>');
    return;
  }
  var params = merge({
    code: req.query.code,
    client_secret: 'Y6rnuFohY6wRmVRt6b894jEypsyzyHUgNFCWZTbuTXRytZKKbwSXdCY8JRQ3oNuz'
  }, sharedParams);
  var url = canvas+'/login/oauth2/token';
  request.post(url, {form: params}, function(error, response, json) {
    var data = JSON.parse(json);
    req.session.token = data.access_token;
    res.redirect('/');
  });
};

exports.proxy = function(req, res) {
  if (!req.session.token) {
    res.json({error: "please login at /login to get a token"});
    return;
  }
  var opts = {
    url: canvas+'/'+req.url,
    method: req.method,
    headers: {
      Authorization: 'Bearer '+req.session.token
    }
  };
  console.log('Requesting canvas api with opts:');
  console.log(opts);
  request(opts, function(err, data) {
    if (err) {
      console.log(err);
      res.json({error: err});
    }
    res.json(JSON.parse(data.body));
  });
};

function parameterize(params) {
  var ary = [];
  for (var key in params) {
    ary.push(key + '=' + params[key]);
  }
  return ary.join('&');
}

function merge(target, extension) {
  for (var key in extension) {
    target[key] = extension[key];
  }
  return target;
}

