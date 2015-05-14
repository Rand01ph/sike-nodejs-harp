module.exports = createMiniHarp;

var connect = require("connect");
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');
var makeLess = require('./lib/processor/less');
var path = require('path');

//route
function setRoute(req, res, next) {
	if (req.url == '/') {
		req.url += 'index.html';
	}
	else {
		next();
	}
}


function createMiniHarp(root) {
	var app = connect();
	app.use(setRoute).use(serveStatic(root)).use(makeJade(root)).use(makeLess(root));
	return app;
}