// user.js

var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var playerSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	phone_number: {type: String, unique: true, required: true},
	password: {type: String, required: true}
	name: String,
	fname: String,
	lname: String,
	username: String,
	email: String,
	gender: String
	date_of_birth: Date,
	ring_balance: Number,
	score: Number,
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var Player = mongoose.model("Player", playerSchema);

module.exports = Player;
