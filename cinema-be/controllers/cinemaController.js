const Cinema = require('../models/Cinema')
const asyncHandler = require('express-async-handler')
const formidable = require('formidable')
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

// @desc Get all cinema
// @route GET /cinema
// @access Public
const getAllCinemas = asyncHandler(async (req, res) => {
    const cinemas = await Cinema.find().lean()
    if (!cinemas?.length) {
        return res.status(400).json({ message: 'No cinema found' })
    }
    res.json(cinemas)
})
// @desc Create new cinema
// @route POST /cinema
// @access Private
const createNewCinema = asyncHandler(async (req, res, next) => {
    const form = formidable()
    var errMsg
    form.parse(req, async (err, fields, files) => {
        if (err) {
            next(err)
            errMsg = err
            return
        }
        const { cinemaName, location, description, rooms, active } = fields
        if (!cinemaName || !location || !description || !rooms) {
            errMsg = "All field are required"
            next(errMsg)
            return
        }
        const roomsList = rooms.split(",").map((item) => item.trim())
        files.cinemaPic.forEach((picture, index) => {
            var oldpath = picture.filepath
            var split = picture.originalFilename.Split(".")
            var fileEx = split[split.length - 1]
            var fileName = `cinema-picture-${index}-${randomUUID()}.${fileEx}`
            var newpath = path.join(__dirname, "..", "public", fileName)
            fs.copyFile(oldpath, newpath, (err) => {
                if (err || errMsg) {
                    res.status(501).json({ err: "cannot save file" })
                    errMsg = "Error"
                }
            })

        })
        if (errMsg) return
        const cinemaObject = { cinemaName, location, description, rooms: roomsList, active, cinemaPicture }
        const cinema = await Cinema.create(cinemaObject)
        if (cinema) {
            res.status(201).json({ message: `New Cinema ${cinema.cinemaName} created` })
        }
        else {
            res.status(400).json({ message: 'Invalid Cinema data received' })
        }
    })
})
// @desc Delete a cinema
// @route DELETE /cinemas
// @access Private
const deleteCinema = asyncHandler(async (req, res) => {
    const { id } = req.body
    console.log(req.body)
    if (!id) {
        return res.status(400).json({ message: 'Ciname ID Required' })
    }

    const cinema = await Cinema.findById(id).exec()

    if (!cinema) {
        return res.status(400).json({ message: 'Ciname not found' })
    }

    const result = await cinema.deleteOne()

    const reply = `Ciname ${result.cinemaName} with ID ${result._id} deleted`

    res.json(reply)
})
module.exports = {
    getAllCinemas,
    createNewCinema,
    deleteCinema,
}