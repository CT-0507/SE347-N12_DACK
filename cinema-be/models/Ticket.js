const mongoose = require('mongoose')
const ticketSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        issuesBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        slotId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'PremiereSlot',
        },
        seatType: {
            type: String,
        },
        discountCode: {
            type: String,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        note: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Ticket', ticketSchema)