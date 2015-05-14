module.exports = createMiniHarp;

var connect = require("connect");
var serveStatic = require('serve-static');


function createMiniHarp(path){
	var app = connect(path);
	app.use(serveStatic(path));
	return app;
}