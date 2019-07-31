'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      user_name: 'PeterMan',
      first_name: 'Peter',
      last_name: 'Yan',
      favorite_team: 'IDK',
      favorite_game: 'Counter Strike: Global Offensive',
      email: 'pepe@pepe.ca',
      password: '123',
      avatar_url: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      bank: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'PokemonGOvind',
      first_name: 'Govind',
      last_name: 'Sandhu',
      favorite_team: 'SQL',
      favorite_game: 'Overwatch',
      email: 'govind@sandhu.ca',
      password: '123',
      avatar_url: 'https://media.giphy.com/media/MziKDo6gO7x8A/giphy.gif',
      bank: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'NickMi',
      first_name: 'Nick',
      last_name: 'Jenvey',
      favorite_team: 'SKT1',
      favorite_game: 'League of Legends',
      email: 'nick@jenvey.ca',
      password: '123',
      avatar_url: 'https://media.giphy.com/media/UEwgbxjsG3xC0/giphy.gif',
      bank: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
