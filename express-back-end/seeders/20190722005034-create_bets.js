'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bets', [{
      match: 'SK telecom T1 vs Cloud9',
      owner: 'PeterMan',
      stakes: 15,
      bet_status: 'Pending',
      game: 'lol',
      team1: 'SKT',
      team2: 'C9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Counter Logic Gaming vs Flyquest',
      owner: 'PokemonGOvind',
      stakes: 50,
      bet_status: 'Pending',
      game: 'dota2',
      team1: 'CLG',
      team2: 'F',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Vancouver Titans vs Florida Mayham',
      owner: 'SethMarksTheSpot',
      stakes: 200,
      bet_status: 'Active',
      game: 'ow',
      team1: 'VT',
      team2: 'FM',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bets', null, {});
  }
};
