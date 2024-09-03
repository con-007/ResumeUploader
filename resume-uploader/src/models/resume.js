const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Resume = sequelize.define('Resume', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    currentDesignation: {
        type: DataTypes.STRING
    },
    currentJobDescription: {
        type: DataTypes.STRING
    },
    currentCompany: {
        type: DataTypes.STRING
    }
});

module.exports = Resume;