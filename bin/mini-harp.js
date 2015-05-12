#!/usr/bin/env node

var createMiniHarp = require("mini-harp");
var argv = require('minimist')(process.argv.slice(2));
var port = 4000;
if (argv.port) {
	port = argv.port;
}

var app = createMiniHarp();
console.log("Starting mini-harp on http://localhost:" + port);

app.use(function(req, res){
	if (req.url == '/current-time') {
		res.end(new Date().toISOString());
	}
}).listen(port);