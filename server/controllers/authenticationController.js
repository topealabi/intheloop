var Player = require("../models/player.js");

exports.login = function(req, res) {
  if (req.body.phone_number && req.body.password) {
	  Player.authenticate(req.body.phone_number, req.body.password, function (error, user) {
	    if (error || !user) {
	      var err = new Error('Wrong email or password.');
	      err.status = 401;
	      return next(err);
	    } else {
	      req.session.userId = user._id;
	      return res.send({"session": req.session});
	    }
	  });
	}
};

exports.logout = function(req, res) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.send({"session": req.session});
      }
    });
  }
};

exports.resetPassword = function(req, res) {
  //...
};

 