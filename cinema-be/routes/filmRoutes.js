const express = require('express')
const router = express.Router()
const filmController = require('../controllers/filmsController')
const verifyJWT = require('../middleware/verifyJWT')
router.route('/')
    .get(verifyJWT, filmController.getAllFilms)
    .post(filmController.createNewFilm)

module.exports = router