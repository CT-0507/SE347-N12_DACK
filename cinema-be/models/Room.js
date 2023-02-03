const mongoose = require('mongoose')
const roomSchema = new mongoose.Schema(
    {
        cinema: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Cinema'
        },
        seats: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Room', roomSchema)