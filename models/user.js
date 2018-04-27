// user.js

var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	name: String,
	phone_number: Number,
	balance: Number,
	//groups: [{ type: Schema.Types.ObjectId, ref: "Groups" }]
});

var User = mongoose.model("User", userSchema);

module.exports = User;
