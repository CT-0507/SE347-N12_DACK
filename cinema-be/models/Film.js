const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema(
    {
        filmName: {
            type: String,
            require: true,
        },
        directors: [{
            type: String,
            require: true,
        }],
        actors: [{
            type: String,
            required: true,
        }],
        tags: [{
            type: String,
            require: true,
        }],
        premiereDay: {
            type: String,
            require: true,
        },
        poster: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        rated: {
            type: String,
            require: true,
        },
        trailerLink: {
            type: String,
            require: true,
        },
        time: {
            type: String,
            require: true,
        },
        language: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Film', filmSchema)