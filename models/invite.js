var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var inviteSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	invitor: Schema.Types.ObjectId,
	phone_number: String,
	email: String,
	
	//rewards: [{ type: Schema.Types.ObjectId, ref: "Rewards" }]
});

var Invite = mongoose.model("Invite", inviteSchema);

module.exports = Invite;