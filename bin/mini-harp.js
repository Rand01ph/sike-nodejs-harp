#!/usr/bin/env node


var createMiniHarp = require("mini-harp");
var argv = require('minimist')(process.argv.slice(2));

//PORT
var port = 4000;
if (argv.port) {
	port = argv.port;
}

//PATH
var path = process.cwd();
if (argv._[0]) {
	path = argv._[0];
}


var app = createMiniHarp(path);
console.log("Starting mini-harp on http://localhost:" + port);

app.use(function(req, res, next){
	if (req.url == '/current-time') {
		res.end(new Date().toISOString());
	} else {
		next();
	}
}).listen(port);