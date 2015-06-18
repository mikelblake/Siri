var http = require('http');

var messages = ['Hello', 'can you ask jeeves?', 'just Google it']

var onRequest = function(req, res){
	var randomInt = Math.floor(Math.random() * messages.length);
	console.log(randomInt);
	var messageToSend = messages[randomInt];
	console.log(messageToSend);
	if (req.method == 'GET') {
      res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({message: messageToSend}));

    }

	if(req.method === 'OPTIONS'){
		res.writeHead(200, {
		  'Connection': 'close',
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end();
	}
};
 
var server = http.createServer(onRequest);
server.listen(8887);