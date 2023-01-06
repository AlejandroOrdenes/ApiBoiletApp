const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    state: {
        type: String
    },
    imgUrl: {
        type: String
    }, 
    coords: {
        type: String
    },
    coments: {
        type: String
    },
    timeStamp: {
        type: String
    }
})

module.exports = mongoose.model('Data', DataSchema)