// const http = require('http');
const express = require('express');

var mongoose = require("./db/connector");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const cors = require("cors");

const app = express();
app.use(session({
  secret: 'play hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var routes = require("./routes.js");
app.use("/", routes);

var server = app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => console.log("Inb0x listening on port 5000!"));

module.exports = server;

// ----------------------------------
// Will be moved to controller
// ----------------------------------


// // Twilio Credentials
// const accountSid = 'AC3b84fbb5d7d4fa6864a4b88983a4e25a';
// const authToken = '46d44d88fc791c8552973866b0ee44d0';
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// // require the Twilio module and create a REST client
// const client = require('twilio')(accountSid, authToken);

// client.messages
// .create({
//   to: '+18327827316',
//   from: '+15106940372',
//   body: 'Rule #1 stay in the loop',
// })
// .then(message => console.log(message.sid));



// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   var responses = ['Rule #2 stay in the loop', 
//   'Meet someone new and tell us a story about them. Deadline 1 day',
//   'Send us a picture of something tasty you ate. 12 hours',
//   'Name your top 5 rappers dead or alive. Deadline 24 hours',
//   'Oops you\'re out the loop, please try again'
//   ]

//   var m = Math.floor(Math.random() * 4)
//   twiml.message(responses[m]);

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(process.env.PORT || 5000, () => {
//   console.log('You are now in the loop.');
// });