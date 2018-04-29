var Player = require("../models/player.js");

// Display list of all Players
exports.all = function(req, res) {
  Player.find({}, (err, players) => {
    res.send(players);
  });
};

// Display details for a specific Player
exports.create = function(req, res) {
  console.log(req.body);
  new Player({
    name: req.body.name,
    phone_number: req.body.phone_number,
    password: req.body.password,
  }).save((err, player) => {
    if (err) {
      res.send(err);
    } else{
      req.session.playerId = player._id;
      res.send({ player: player });
    }
  });
};

// Handle Player create on POST.
exports.read = function(req, res) {
  Player.findOne({ phone_number: req.params.phone_number }, (err, player) => {
    if (err) {
      res.send(err);
    }
    if (player) {
      
      res.send(player);
    } else {
      
      res.send("did not find player in db");
    }
  });
};

// Handle Player delete on POST.
exports.update = function(req, res) {
  // res.send("NOT IMPLEMENTED: player UPDATE");

  Player.findOneAndUpdate(
    { phone_number: req.body.phone_number },
    {
      $set: {
        name: req.body.name,
      }
    },
    { new: true },
    (err, newPlayer) => {
      if (err) {
        res.send("Something wrong when updating data!");
      }

      res.send(newPlayer);
    }
  );
};

// Handle Player update on POST.
exports.delete = function(req, res) {
  // res.send("NOT IMPLEMENTED: Contract DELETE");

  Player.findOneAndRemove({ phone_number: req.body.phone_number }, (err, player) => {
    if (err) {
      res.send("Something wrong when removing data!");
    }
    if (player) {
      res.send("player found and removed");
    } else {
      res.send("No player found");
    }
  });
};

//helper functions
