const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;
const http = require('http');
const httpServer = http.createServer(App);
const cookieSession = require('cookie-session')
const betChecking = require('./betChecking');
const connectSocketServer = require('./liveChat');

App.use(cookieSession({
  name: 'session',
  keys: ['horseracing', 'bumfights']
}))

// Testing db
const db = require('./config/db')
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

// user routes 
App.use('/users', require('./routes/users'))

// bet routes
App.use('/bets', require('./routes/bets'))

// login routes
App.use('/login', require('./routes/login'))

//notification routes
App.use('/notifications', require('./routes/notifications'))

// profile routes
App.use('/profile', require('./routes/profile'))

httpServer.listen(PORT, '0.0.0.0', 'localhost', () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

setInterval(async () => {
  await betChecking.checkPendingBetsAndStartTime();
  await betChecking.checkWinnerAndUpdateWinStatus();
}, 10000);

connectSocketServer(httpServer);