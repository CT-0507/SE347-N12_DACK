const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

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
            ref: 'Room'
            // require: true
        }],
        active: {
            type: Boolean,
            default: true
        },
        cinemaPicture: [{
            type: String,
            require: true
        }],
        slug: { type: String, slug: "cinemaName" }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Cinema', cinemaSchema)