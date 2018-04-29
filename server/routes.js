var express = require("express");
var router = express.Router();
var rp = require("request-promise");

var players_controller = require("./controllers/playersController");
var authentication_controller = require("./controllers/authenticationController");
var loops_controller = require("./controllers/loopsController");


//useful for routes that require authentication
function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

//EXAMPLE OF LOG-IN REQUIREMENT
// router.get('/profile', mid.requiresLogin, function(req, res, next) {
//   //...
// });

router.get("/", function(req, res, next) {
	res.send("Stay in loop!");
});

router.post("/login", authentication_controller.login);
router.post("/logout", authentication_controller.logout);
router.post("/reset-password", authentication_controller.resetPassword);

//player routes
router.get("/players", players_controller.all); 
router.post("/players/create", players_controller.create);
router.post("/players/update", players_controller.update);
router.delete("/players/delete", players_controller.delete);
router.get("/players/:phone_number", players_controller.read);

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