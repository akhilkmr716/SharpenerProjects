const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailid: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;