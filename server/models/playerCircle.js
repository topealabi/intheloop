var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var playerCircleSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,

	group_id: Schema.Types.ObjectId,
	player_id: Schema.Types.ObjectId,
	date_created: Date,
	date_removed: Date,
	//rules
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var PlayerCircle = mongoose.model("PlayerCircle", playeCircleSchema);

module.exports = PlayerCircle;