module.exports = createMiniHarp;

var connect = require("connect");
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');
var makeLess = require('./lib/processor/less');
var path = require('path');


//route
function setRoute() {
	return function (req, res, next) {
		if (req.url === '/') {
			req.url += 'index.html';
		}
		else {
			next();
		}
	}

}


//404
function prevent() {
	return function (req, res, next) {
		if (path.extname(req.url) == '.jade' || path.extname(req.url) == '.less') {
            res.statusCode = 404;
            res.end();
        }
		else {
			next();
		}
	}
}

function createMiniHarp(root) {
	var app = connect();
	app.use(setRoute()).use(prevent()).use(serveStatic(root)).use(makeJade(root)).use(makeLess(root));
	return app;
}