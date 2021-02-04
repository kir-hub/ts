const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Vote = sequelize.define('vote', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    number: {type: DataTypes.INTEGER, allowNull: false},
    
})

const Log = sequelize.define('log', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    url: {type: DataTypes.STRING},
    json: {type: DataTypes.STRING},
    
})



module.exports ={Vote, Log}