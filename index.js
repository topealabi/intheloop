const http = require('http');
const express = require('express');
const app = express();

// Twilio Credentials
const accountSid = 'AC3b84fbb5d7d4fa6864a4b88983a4e25a';
const authToken = '46d44d88fc791c8552973866b0ee44d0';
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

function sendMessage(number){
	client.messages
  .create({
    to: number,
    from: '+15106940372',
    body: 'Rule #1 stay in the loop',
  })
  .then(message => console.log(message.sid));
}


app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  var responses = ['Rule #2 stay in the loop', 
  'Meet someone new and tell us a story about them. Deadline 1 day',
  'Send us a picture of something tasty you ate. 12 hours',
  'Name your top 5 rappers dead or alive. Deadline 24 hours',
  'Oops you\'re out the loop, please try again'
  ]

  var m = Math.floor(Math.random() * 4)
  twiml.message(responses[m]);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});