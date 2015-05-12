module.exports = createMiniHarp;

var connect = require("connect");

function createMiniHarp(root){
	return connect(root);
}