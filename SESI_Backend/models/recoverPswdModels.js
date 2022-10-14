const database = require('../config/dbConfig')
const Sequelize = require('sequelize')

const recoverModels = database.define('recuperarSenhaModels', {
    id_recover:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    codigo: Sequelize.STRING(6),
    email : Sequelize.STRING(100)
})

module.exports = recoverModels

database.sync()