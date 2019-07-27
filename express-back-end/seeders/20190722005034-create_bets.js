'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bets', [{
      match: 'SK telecom T1 vs Cloud9',
      owner: 'PeterMan',
      stakes: 15,
      bet_status: 'Pending',
      game: 'lol',
      team1: 'M19',
      team2: 'Unicorns of Love',
      start_time: "2019-07-27T17:00:00Z",
      team1logo: 'https://cdn.pandascore.co/images/team/image/663/300px-M19logo_square.png',
      team2logo: 'https://cdn.pandascore.co/images/team/image/19/unicorns-of-love-ih8ytfi8.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Counter Logic Gaming vs Flyquest',
      owner: 'PokemonGOvind',
      stakes: 50,
      bet_status: 'Pending',
      game: 'cs',
      team1: 'KaBum eSports',
      team2: 'INTZ e-Sports Club',
      start_time: "2019-07-27T17:00:00Z",
      team1logo: 'https://cdn.pandascore.co/images/team/image/33/kabum-orange-egig9edp.png',
      team2logo: 'https://cdn.pandascore.co/images/team/image/158/intz-ijdoekud.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Vancouver Titans vs Florida Mayham',
      owner: 'SethMarksTheSpot',
      stakes: 200,
      bet_status: 'Active',
      game: 'lol',
      team1: 'Vega Squadron',
      team2: 'Dragon Army',
      start_time: "2019-07-27T17:00:00Z",
      team1logo: 'https://cdn.pandascore.co/images/team/image/664/vega-squadron-giuegvf3.png',
      team2logo: 'https://cdn.pandascore.co/images/team/image/1717/300px-Dragon_Armylogo_square.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bets', null, {});
  }
};
