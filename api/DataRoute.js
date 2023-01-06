const router = require('express').Router()
require('dotenv').config()
const Data = require('../models/Data')


router.get('/', (req, res) => {
    Data.find().then(data => {
        res.status(200).json(data)
    }).catch(err =>{
        res.status(500).json({error: err.message})
    })
})

router.post('/sendData', async (req, res) => {
    console.log('test')
    const newData = new Data(req.body)
        newData.save().then(data => {
            res.status(201).json(data)
            console.log("Data Creada")
        }).catch(err => {
            res.status(500).json({error: err.message})
        })    

})

module.exports = router