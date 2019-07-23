'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [{
      type: 'Invite',
      description: 'You have been invited to a bet!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Select',
      description: 'Please select your team!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Winner',
      description: 'You won the bet!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Loser',
      description: "Looks like you're unlucky! You lost the bet.",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notifications', null, {})
  }
};
