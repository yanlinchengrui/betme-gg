const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;

const cookieSession = require('cookie-session')
App.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
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
App.use(cors());
App.use((req, res) => console.log(req.session));
App.use((req, res) => console.log(req.path, req.body, req.method));

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

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
