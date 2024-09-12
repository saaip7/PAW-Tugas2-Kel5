const mongoose = require('mongoose')

const tesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
    },
    {
        timestamps: true
    }
)

const tes = mongoose.model('tes', tesSchema)

module.exports = tes;