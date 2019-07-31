'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      user_name: 'CaptainPeter',
      first_name: 'Peter',
      last_name: 'Yan',
      favorite_team: 'Tyloo',
      favorite_game: 'CS:GO',
      email: 'pepe@pepe.ca',
      password: '123',
      avatar_url: 'https://media.giphy.com/media/fGrLyPfkfEZ2w/giphy.gif',
      bank: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'PokemonGOvind',
      first_name: 'Govind',
      last_name: 'Sandhu',
      favorite_team: 'Vancouver Titans',
      favorite_game: 'Overwatch',
      email: 'govind@sandhu.ca',
      password: '123',
      avatar_url: 'https://media.giphy.com/media/MziKDo6gO7x8A/giphy.gif',
      bank: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'WarchiefNick',
      first_name: 'Nick',
      last_name: 'Jenvey',
      favorite_team: 'SK Telecome T1',
      favorite_game: 'LoL',
      email: 'nick@jenvey.ca',
      password: '123',
      avatar_url: 'https://media.giphy.com/media/Pk4X5UwDNf6sqaRmaS/giphy.gif',
      bank: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
