const Sequelize = require('sequelize')
const db = new Sequelize('betme', 'labber', 'labber', {
  host: 'localhost',
  dialect:'postgres' 
});

// Test db
db
  .authenticate()
  .then(() => {
    console.log('Connection to db has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = db