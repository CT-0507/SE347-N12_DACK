const mongoose = require('mongoose')

const cinemaSchema = new mongoose.Schema(
    {
        cinemaName: {
            type: String,
            require: true,
        },
        location: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        rooms: [{
            type: String,
            require: true
        }],
        active: {
            type: Boolean,
            default: true
        },
        cinemaPicture: [{
            type: String,
            require: true
        }]
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Cinema', cinemaSchema)