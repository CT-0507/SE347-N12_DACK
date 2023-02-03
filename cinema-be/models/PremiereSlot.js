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
        cinema: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Cinema'
        },
        rooms: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Rooms'
        },
        seatStatus: [

        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('PremiereSlot', premiereSlotSchema)