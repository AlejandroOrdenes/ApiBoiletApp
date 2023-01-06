require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3003

//ROUTES
const dataRoute = require('./api/DataRoute')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api', dataRoute)

mongoose.connect(process.env.MONGODB,{useUnifiedTopology: true})
.then(() => {

    app.listen(port, () => {
        console.log('app running...')
    })
}).catch(err => console.log(err))