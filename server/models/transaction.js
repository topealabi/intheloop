var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	sending_player_id: Schema.Types.ObjectId,
	recieving_player_id: Schema.Types.ObjectId,
	value: Number,
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;