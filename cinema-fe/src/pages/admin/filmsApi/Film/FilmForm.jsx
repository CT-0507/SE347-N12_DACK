import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import Button from "react-bootstrap/Button"
import { useEffect, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { selectFilmById, useAddNewFilmMutation, useUpdateFilmMutation } from '../filmsApiSlice';

const FilmForm = memo(({ filmId, handleClose }) => {
    let film
    if (filmId) {
        film = useSelector(state => selectFilmById(state, filmId))
        console.log(film)
    }
    const [filmName, setFilmName] = useState(film ? film.filmName : "")
    const [directors, setDirectors] = useState(film ? film.directors.join(", ") : "")
    const [actors, setActors] = useState(film ? film.actors.join(", ") : "")
    const [premiereDay, setPremiereDay] = useState(film ? film.premiereDay : "")
    const [tags, setTags] = useState(film ? film.tags.join(", ") : "")
    const [description, setDescription] = useState(film ? film.description : "")
    const [rated, setRated] = useState(film ? film.rated : "")
    const [trailerLink, setTrailerLink] = useState(film ? film.trailerLink : "")
    const [time, setTime] = useState(film ? film.time : "")
    const [language, setLanguage] = useState(film ? film.language : "")
    const [readFile, setReadFile] = useState(film ? true : false)
    const [filmStatus, setFilmStatus] = useState(film ? film.filmStatus : "")
    const canSave = [filmName, directors, actors, premiereDay, tags, trailerLink, rated, time, language].every(item => item !== "") && readFile
    const firstInput = useRef()
    const posterInput = useRef()
    useEffect(() => {
        firstInput.current.focus()
    }, [])
    const [addNewFilm, {
        isLoading,
        isSuccess,
        isError,
        error,
    }] = useAddNewFilmMutation()
    const [updateFilm, {
        isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error: updateError,
    }] = useUpdateFilmMutation()
    const handleConfirm = filmId
        ? async (e, filmId) => {
            e.preventDefault()
            const formData = new FormData
            formData.append('filmId', filmId)
            formData.append('filmName', filmName)
            formData.append('directors', directors)
            formData.append('actors', actors)
            formData.append('tags', tags)
            formData.append('premiereDay', premiereDay)
            formData.append('tags', tags)
            formData.append('description', description)
            formData.append('rated', rated)
            formData.append('trailerLink', trailerLink)
            formData.append('time', time)
            formData.append('language', language)
            formData.append('filmStatus', filmStatus)
            formData.append('poster', posterInput.current.files[0])
            await updateFilm(formData)
            if (isUpdateError) console.log(updateError)
        }
        : async (e) => {
            if (canSave) {
                e.preventDefault()
                try {
                    let formData = new FormData()
                    formData.append('filmName', filmName)
                    formData.append('directors', directors)
                    formData.append('actors', actors)
                    formData.append('tags', tags)
                    formData.append('premiereDay', premiereDay)
                    formData.append('tags', tags)
                    formData.append('description', description)
                    formData.append('rated', rated)
                    formData.append('trailerLink', trailerLink)
                    formData.append('time', time)
                    formData.append('language', language)
                    formData.append('filmStatus', filmStatus)
                    formData.append('poster', posterInput.current.files[0])
                    await addNewFilm(formData)
                }
                catch (err) {
                    console.log(err, error)
                }
            }
        }
    useEffect(() => {
        if (isSuccess || isUpdateSuccess) {
            handleClose()
        }
    }, [isSuccess, isUpdateSuccess])
    return (
        <Modal show onHide={handleClose}>
            <Form method="POST" onSubmit={e => handleConfirm(e, filmId)}>
                <Modal.Header closeButton>
                    <Modal.Title>{filmId ? "Sửa phim" : "Thêm phim"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputFilmName" className="col-sm-2 col-form-label">Tên phim<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text"
                                ref={firstInput}
                                className="form-control" id="inputFilmName" value={filmName} onChange={e => setFilmName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputDirector" className="col-sm-2 col-form-label">Đạo diễn</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputDirector" value={directors} onChange={e => setDirectors(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputActor" className="col-sm-2 col-form-label">Diễn viên</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputActor" value={actors} onChange={e => setActors(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputTypeFilm" className="col-sm-2 col-form-label">Thể loại</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputTypeFilm" value={tags} onChange={e => setTags(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputPremere" className="col-sm-2 col-form-label">Ngày công chiếu<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputPremere" value={premiereDay} onChange={e => setPremiereDay(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputRated" className="col-sm-2 col-form-label">Rated<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputRated" value={rated} onChange={e => setRated(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="time" className="col-sm-2 col-form-label">Thời lượng<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="time" value={time} onChange={e => setTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="language" className="col-sm-2 col-form-label">Ngôn ngữ<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="language" value={language} onChange={e => setLanguage(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputLinkTrailer" className="col-sm-2 col-form-label">Link Trailer<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputLinkTrailer" value={trailerLink} onChange={e => setTrailerLink(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputFilmStatus" className="col-sm-2 col-form-label">Trạng thái phim<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputFilmStatus" value={filmStatus} onChange={e => setFilmStatus(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputStatus" className="col-sm-2 col-form-label">Trạng thái kích hoạt</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="checkbox" defaultChecked uncontrolled="true" disabled />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="description" className="col-sm-2 col-form-label">Mô tả</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <textarea name="description" id="description" cols="30" rows="10" uncontrolled="true" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputPoster" className="col-sm-2 col-form-label">Thêm poster</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input
                                ref={posterInput}
                                type="file"
                                id="inputPoster"
                                accept="image/*"
                                name="inputPoster"
                                className='form-control'
                                uncontrolled="true"
                                onClick={(event) => {
                                    event.target.value = null
                                    setReadFile(false)
                                }}
                                onChange={() => {
                                    setReadFile(true)
                                }}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {isError && <p className='text-danger fs-5'>{error}</p>}
                    {isUpdateError && <p className='text-danger fs-5'>{updateError}</p>}
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" type='submit' disabled={!canSave || isLoading || isUpdateLoading}>
                        {isLoading || isUpdateLoading ? <Spinner /> : "Lưu Phim"}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
})

export default FilmForm