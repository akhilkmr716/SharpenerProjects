const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-app', 'root', 'ChowChow1#', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;