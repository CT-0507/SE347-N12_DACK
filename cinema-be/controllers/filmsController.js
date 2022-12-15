const Film = require('../models/Film')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const formidable = require('formidable')
const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const { randomUUID } = require('crypto');
// @desc Get all films
// @route GET /films
// @access Public
const getAllFilms = asyncHandler(async (req, res) => {
    const films = await Film.find().select('-password').lean()
    if (!films?.length) {
        return res.status(400).json({message: 'No films found'})
    }
    res.json(films)
})
// @desc Create all films
// @route POST /films
// @access Private
const createNewFilm = asyncHandler(async (req, res, next) => {
    var err
    const form = formidable()
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err)
            return;
        }
        var oldpath = files.poster.filepath;
        var split = files.poster.originalFilename.split(".")
        var fileEx = split[split.length - 1]
        console.log(`${randomUUID()}.${fileEx}`)
        var newpath = path.join(__dirname, "..", "public", `${randomUUID()}.${fileEx}`)
        var saveFileErr
        fs.copyFile(oldpath, newpath, function (err) {
            if (err) {
                console.log("er")
                res.status(501).json({err: "cannot save file"})
                saveFileErr = err
            }
            else {
                res.status(200).json({fields, files})
            }
        });
        if (saveFileErr) return;
        const {directors, actors, tags, premiereDay } = fields 
        console.log(directors)
        const {filmName} = req.body
        console.log(filmName)
    })
})

module.exports = {
    getAllFilms,
    createNewFilm,
}