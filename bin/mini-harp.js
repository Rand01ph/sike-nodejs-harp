#!/usr/bin/env node

var createMiniHarp = require("mini-harp");
var argv = require('minimist')(process.argv.slice(2));
var port = argv.port;

var app = createMiniHarp();
console.log("Starting mini-harp on http://localhost:" + port);
app.listen(port);