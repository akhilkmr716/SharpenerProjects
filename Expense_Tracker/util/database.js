const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-tracker', 'root', 'ChowChow1#', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;