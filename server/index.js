require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/route')



const sequelize = require('./db')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)




const start = async() =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, console.log(`listen ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()

