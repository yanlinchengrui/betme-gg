'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bets', [{
      match: 'SK telecom T1 vs Cloud9',
      owner: 'CaptainPeter',
      stakes: 15,
      bet_status: 'Pending',
      game: 'lol',
      team1: 'M19',
      team2: 'Unicorns of Love',
      team1FullName: 'M19',
      team2FullName: 'Unicorns of Love',
      start_time: "2019-07-27T17:00:00Z",
      team1logo: 'https://cdn.pandascore.co/images/team/image/663/300px-M19logo_square.png',
      team2logo: 'https://cdn.pandascore.co/images/team/image/19/unicorns-of-love-ih8ytfi8.png',
      participants: 1,
      inviteCount: 1,
      matchId: 999,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'KaBum eSports vs INTZ e-Sports Club',
      owner: 'PokemonGOvind',
      stakes: 50,
      bet_status: 'Pending',
      game: 'cs',
      team1: 'KaBum eSports',
      team2: 'INTZ e-Sports Club',
      team1FullName: 'KaBum eSports',
      team2FullName: 'INTZ e-Sports Club',
      start_time: "2019-07-27T17:00:00Z",
      team1logo: 'https://cdn.pandascore.co/images/team/image/33/kabum-orange-egig9edp.png',
      team2logo: 'https://cdn.pandascore.co/images/team/image/158/intz-ijdoekud.png',
      participants: 1,
      inviteCount: 1,
      matchId: 111,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      match: 'Vega Squadron vs Dragon Army',
      owner: 'WarchiefNick',
      stakes: 200,
      bet_status: 'Active',
      game: 'lol',
      team1: 'Vega Squadron',
      team2: 'Dragon Army',
      team1FullName: 'Vega Squadron',
      team2FullName: 'Dragon Army',
      start_time: "2019-07-27T17:00:00Z",
      team1logo: 'https://cdn.pandascore.co/images/team/image/664/vega-squadron-giuegvf3.png',
      team2logo: 'https://cdn.pandascore.co/images/team/image/1717/300px-Dragon_Armylogo_square.png',
      participants: 1,
      inviteCount: 1,
      matchId: 222,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bets', null, {});
  }
};
