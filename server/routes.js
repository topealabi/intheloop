var express = require("express");
var router = express.Router();
var rp = require("request-promise");

var users_controller = require("./controllers/usersController");
// var challenges_controller = require("./controllers/challengesController");
//etc

router.get("/", function(req, res, next) {
	res.send("Stay in loop!");
});

//error handling
router.use((req, res) => {
	res.status(400).json({
		title: "This route does not exist",
		description: `Could not find the url: '${req.originalUrl}' `
	});
});


router.use((error, req, res, next) => {
	res.status(500).json({
		title: "Something went wrong",
		description: error.message
	});
});

module.exports = router;