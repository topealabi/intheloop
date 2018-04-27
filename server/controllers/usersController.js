var User = require("../models/user.js");

// Display list of all Holders
exports.all = function(req, res) {
  User.find({}, (err, holders) => {
    res.send(holders);
  });
};

// Display details for a specific User
exports.create = function(req, res) {
  console.log(req.body);
  new User({
    name: req.body.name,
    phone_number: req.body.phone_number,
  }).save((err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ id: result._id });
  });
};

// Handle User create on POST.
exports.read = function(req, res) {
  User.findOne({ phone_number: req.params.phone_number }, (err, holder) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      console.log("found user in ");
      res.send(holder);
    } else {
      console.log("did not find user in db");
      res.send("did not find user in db");
    }
  });
};

// Handle User delete on POST.
exports.update = function(req, res) {
  // res.send("NOT IMPLEMENTED: Holder UPDATE");

  User.findOneAndUpdate(
    { phone_number: req.body.phone_number },
    {
      $set: {
        name: req.body.name,
      }
    },
    { new: true },
    (err, newUser) => {
      if (err) {
        res.send("Something wrong when updating data!");
      }

      res.send(newUser);
    }
  );
};

// Handle User update on POST.
exports.delete = function(req, res) {
  // res.send("NOT IMPLEMENTED: Contract DELETE");

  User.findOneAndRemove({ address: req.body.address }, (err, user) => {
    if (err) {
      res.send("Something wrong when removing data!");
    }
    if (holder) {
      res.send("Holder found and removed");
    } else {
      res.send("No user found");
    }
  });
};

//helper functions
