'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bets', [{
      match: 'SK telecom T1 vs Cloud9',
      owner: 'PeterMan',
      stakes: 15,
      bet_status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Counter Logic Gaming vs Flyquest',
      owner: 'PokemonGOvind',
      stakes: 50,
      bet_status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Vancouver Titans vs Florida Mayham',
      owner: 'SethMarksTheSpot',
      stakes: 200,
      bet_status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bets', null, {});
  }
};
