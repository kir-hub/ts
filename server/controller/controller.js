const {Vote, Log} = require('../models/models')
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../db');



class VoteController {
    async create(req, res){
        const {number} = req.body
        const vote = await Vote.create({number})
        return res.json({message: `Vote for ${number} confirmed`})
    }

    async getAll(req, res){

        const nums = await Vote.findAll()

        // const nums = await Vote.findAll({where: {
        //     createdAt: req.body
        // }})

        // const {nums} = await sequelize.query(
        //     'SELECT *  FROM votes;', {type: QueryTypes.SELECT} не работает хотя по документации должен
        // )
         return res.json(nums)
    }
}


module.exports = new VoteController()
