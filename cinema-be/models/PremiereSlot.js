const mongoose = require('mongoose')

const premiereSlotSchema = new mongoose.Schema(
    {
        filmId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Film'
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true
        },
        cinema: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Cinema'
        },
        rooms: {
            type: String,
            required: true,
        },
        seatStatus: [
            {
                type: String,
                required: true,
            }
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('PremiereSlot', premiereSlotSchema)