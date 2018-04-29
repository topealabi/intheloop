//loopsController.js

var Loop = require("../models/loop.js");

// Display list of all Loops
exports.all = function(req, res) {
  Loop.find({}, (err, loop) => {
    console.log('loooooopx!');
    res.send(loop);
  });
}

// Display details for a specific Loop
exports.create = function(req, res) {
  new Loop({
    name: req.body.date,
    description: req.body.description,
    created_at: Time.now(),
    ring_jackpot: req.body.jackpot
    // creator_id: currentPlayer
  }).save((err, loop) => {
    if (err) {
      console.log(err);
    }
    res.send(loop);
  });
}

// Handle Loop create on POST.
exports.read = function(req, res) {
  Loop.findOne({ _id: req.params.id }, (err, loop) => {
    if (err) {
      console.log(err);
    }
    if (loop) {
      res.send(loop);
    } else {
      res.send("did not find loop in db");
    }
  });
}

exports.update = function(req, res) {
  Loop.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { name: req.body.date,
              description: req.body.description,
              created_at: Time.now(),
              ring_jackpot: req.body.jackpot 
            } 
    },
    { new: true },
    (err, newLoop) => {
      if (err) {
        res.send("Something wrong when updating data!");
      }

      res.send(newLoop);
    }
  );
}

// Handle Loop update on POST.
exports.delete= function(req, res) {
  
  Loop.findOneAndRemove({ _id: req.body._id }, (err, loop) => {
    if (err) {
      res.send("Something wrong when removing data!");
    }
    if (loop) {
      res.send("Holder found and removed");
    } else {
      res.send("No user found");
    }
  });
}

//helper functions
