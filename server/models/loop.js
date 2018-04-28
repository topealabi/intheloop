var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var loopSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	name: String,
	created_at: Date,
	creator_id: Schema.Types.ObjectId,
	ring_jackpot: Number,
	//rules
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var Loop = mongoose.model("Loop", loopSchema);

module.exports = Loop;