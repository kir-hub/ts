const {Vote, Log} = require('../models/models')

class LogController { //не совсем понял момент с записью каждого запроса в отдельну таблицу
                    // то есть можно прикрутить этот контролер к каждому роуту, и при каждом запросе будет появляться новая запись
                    // Другой момент это в полях будут одинаковые записи


    
    async create(req, res){
        try {
            const {url, json} = req.body
            const log = await Log.create({url , json})
            return res.json({message: ` ${log} confirmed`})

        } catch (e) {
            const {json, url} = req.body
            const error = e
            const log = await Log.create({json, url})
            return res.json({message: ` ${log} erro`})


        }
        
    }
}

module.exports = new LogController()