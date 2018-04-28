// player.js

var mongoose = require("../db/connector");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var playerSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	phone_number: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	name: String,
	fname: String,
	lname: String,
	username: String,
	email: String,
	gender: String,
	date_of_birth: Date,
	ring_balance: Number,
	score: Number
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

playerSchema.statics.authenticate = function(phone_number, password, callback) {
	Player.findOne({ phone_number: phone_number }).exec(function(err, player) {
		if (err) {
			return callback(err);
		} else if (!player) {
			var err = new Error("Player not found.");
			err.status = 401;
			return callback(err);
		}
		bcrypt.compare(password, player.password, function(err, result) {
			if (result === true) {
				return callback(null, player);
			} else {
				return callback();
			}
		});
	});
};

//hashing a password before saving it to the database
playerSchema.pre('save', function (next) {
  var player = this;
  bcrypt.hash(player.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    player.password = hash;
    next();
  })
});

var Player = mongoose.model("Player", playerSchema);

module.exports = Player;
