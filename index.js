module.exports = createMiniHarp;

var connect = require("connect");
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');
var makeLess = require('./lib/processor/less');
var path = require('path');

function setRoute(req, res, next) {
	if (path.extname(req.url) == '.jade') {
		console.log('a jade file');
	}
	else{
		next();
	}
}


function createMiniHarp(root){
	var app = connect();
	app.use(setRoute).use(serveStatic(root)).use(makeJade(root)).use(makeLess(root));
	return app;
}