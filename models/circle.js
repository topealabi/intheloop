var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var circleSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	name: String,
	created_at: Date,
	creator_id: Schema.Types.ObjectId,
	ring_jackpot: Number,
	//rules
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var Circle = mongoose.model("Circle", circleSchema);

module.exports = Circle;