var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var challengeResponseSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	challenge_id: Schema.Types.ObjectId,
	circle_id: Schema.Types.ObjectId,
	description: String,
	created_at: Date,
	creator_id: Schema.Types.ObjectId,
	rating: Number
	
	//rules
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var ChallengeResponse = mongoose.model("ChallengeResponse", challengeResponseSchema);

module.exports = ChallengeResponse;