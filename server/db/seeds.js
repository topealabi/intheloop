//database functions

var mongoose = require("./connector");
var Schema = mongoose.Schema;

var Player = require("../models/player.js");

var drop = function() {
	Player.remove({}, function(err, holders) {
		if (err) {
			consoel.log("err");
		}
		console.log("deleted all players");
	});
};

drop();
