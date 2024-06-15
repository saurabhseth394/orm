'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstname: 'clarivate',
        lastname: 'test-user',
        email: 'clarivate@example.com',
        password:'12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'saurabh',
        lastname: 'seth',
        email: 'saurabh@example.com',
        password:'12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'john',
        lastname: 'doe',
        email: 'john@example.com',
        password:'12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
