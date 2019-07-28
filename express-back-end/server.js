const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const randomColor = require('randomcolor');
const uuidv1 = require('uuid/v1');
const http = require('http');
const httpServer = http.createServer(App);

const axios = require('axios');
require('dotenv').config()
const models = require('./models');
const Bet = models.Bet;

const cookieSession = require('cookie-session')
App.use(cookieSession({
  name: 'session',
  keys: ['horseracing', 'bumfights']
}))

const db = require('./config/db')

// Test db
db.authenticate()
  .then(() => {
    console.log('Connection to db has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Middleware for checking sessions
// App.use((req, res, next) => { console.log(req.session.user_id); next(); });
// App.use((req, res, next) => { console.log(req.path, req.body, req.method); next(); });

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// user routes 
App.use('/users', require('./routes/users'))

// bet routes
App.use('/bets', require('./routes/bets'))

// login routes
App.use('/login', require('./routes/login'))

//notification routes
App.use('/notifications', require('./routes/notifications'))

httpServer.listen(PORT, '0.0.0.0', 'localhost', () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

checkWinner = (matchId) => {
  axios.get(`https://api.pandascore.co/matches/${matchId}?token=${process.env.TOKEN}`)
    .then((rez) => {
      console.log(rez.data);
      if (rez.data.winner) {
        // todo
      }
      // Bet.findAll({
      //   where: { matchId: matchId },
      //   include: [{ model: models.User_bet, attributes: [] }]
      // }).then((rez) => {
      //   console.log(rez);
      // })
      return rez.data;
    });
}

// Create the WebSockets server
const wss = new SocketServer({ server: httpServer });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  // sending color to client
  ws.send(JSON.stringify({ color: randomColor({ alpha: 1 }) }));

  wss.broadcast = function (data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }
  wss.broadcast(JSON.stringify({ onlineUsers: wss.clients.size }));

  ws.on('message', function incoming(data) {
    const jsonData = JSON.parse(data);
    jsonData.id = uuidv1();
    jsonData.type = jsonData.type === 'postNotification' ? 'incomingNotification' : 'incomingMessage';

    console.log(jsonData);

    wss.broadcast(JSON.stringify(jsonData));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    wss.broadcast(JSON.stringify({ onlineUsers: wss.clients.size }));
  });
});
