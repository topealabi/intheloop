var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var challengeSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	circle_id: Schema.Types.ObjectId,
	creator_id: Schema.Types.ObjectId,
	description: String,
	created_at: Date,
	expiration_date: Date,
	rating: Number
	
	//rules
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;