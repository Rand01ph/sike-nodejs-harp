module.exports = createMiniHarp;

function createMiniHarp(){
	var connect = require('connect');
	return connect();
}