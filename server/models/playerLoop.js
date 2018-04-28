var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var playerLoopSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,

	group_id: Schema.Types.ObjectId,
	player_id: Schema.Types.ObjectId,
	date_created: Date,
	date_removed: Date,
	//rules
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var PlayerLoop = mongoose.model("PlayerLoop", playerLoopSchema);

module.exports = PlayerLoop;