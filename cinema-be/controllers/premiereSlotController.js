const PremiereSlot = require('../models/PremiereSlot')
const asyncHandler = require('express-async-handler')

// @desc Get all premiereSlot
// @route GET /premiere-slot
// @access Public
const getAllPremiereSlot = asyncHandler(async (req, res) => {
    const premiereSlots = await PremiereSlot.find().lean()
    if (!premiereSlots?.length) {
        return res.status(400).json({ message: 'No cinema found' })
    }
    res.json(premiereSlots)
})
// @desc Create new premiere
// @route POST /premiere-slot
// @access Private
const createNewPremiereSlot = asyncHandler(async (req, res) => {
    const { filmId, date, time, cinema, rooms } = req.body

    //Confirm data
    if (!filmId || !date || !cinema || !rooms || !time) {
        return res.status(400).json({ message: 'Missing required fields' })
    }
    const duplicate = await PremiereSlot.findOne({ filmId, cinema })
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate filmId and cinema' })
    }
    var seatStatus = []
    for (var i = 0; i < )
        const premiereSlotObject = { filmId, date, time, cinema, rooms, time }
})