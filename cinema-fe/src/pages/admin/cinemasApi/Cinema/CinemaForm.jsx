import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import Button from "react-bootstrap/Button"
import { useEffect, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { selectCinemaById, useAddNewCinemaMutation, useUpdateCinemaMutation } from '../cinemasApiSlice';

const CinemaForm = memo(({ cinemaId, handleClose }) => {
    let cinema
    if (cinemaId) {
        cinema = useSelector(state => selectCinemaById(state, cinemaId))
        console.log(cinema)
    }
    const [cinemaName, setCinemaName] = useState(cinema ? cinema.cinemaName : "")
    const [location, setLocation] = useState(cinema ? cinema.location : "")
    const [rooms, setRooms] = useState(cinema ? cinema.rooms.join(", ") : "")
    const [description, setDescription] = useState(cinema ? cinema.description : "")
    const [active, setActive] = useState(cinema ? cinema.active : true)
    const [readFile, setReadFile] = useState(cinema ? true : false)
    const canSave = [cinemaName, location, description].every(item => item !== "") && readFile
    const firstInput = useRef()
    const posterInput = useRef()
    useEffect(() => {
        firstInput.current.focus()
    }, [])
    const [addNewCinema, {
        isLoading,
        isSuccess,
        isError,
        error,
    }] = useAddNewCinemaMutation()
    const [updateCinema, {
        isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error: updateError,
    }] = useUpdateCinemaMutation()
    const handleConfirm = cinemaId
        ? async (e, cinemaId) => {
            e.preventDefault()
            const formData = new FormData
            formData.append('cinemaId', cinemaId)
            formData.append('cinemaName', cinemaName)
            formData.append('location', location)
            formData.append('description', description)
            formData.append('rooms', rooms)
            formData.append('active', active)
            const files = posterInput.current.files
            for (let i = 0; i < files.length; i++) {
                formData.append(`images[${i}]`, files[i])
            }
            formData.append('cinemaPicture', posterInput.current.files)
            await updateCinema(formData)
            if (isUpdateError) console.log(updateError)
        }
        : async (e) => {
            if (canSave) {
                e.preventDefault()
                try {
                    let formData = new FormData()
                    formData.append('cinemaName', cinemaName)
                    formData.append('location', location)
                    formData.append('description', description)
                    formData.append('rooms', rooms)
                    formData.append('active', active)
                    const files = posterInput.current.files
                    for (let i = 0; i < files.length; i++) {
                        formData.append(`images[${i}]`, files[i])
                    }
                    formData.append('cinemaPicture', posterInput.current.files)
                    await addNewCinema(formData)
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
            <Form method="POST" onSubmit={e => handleConfirm(e, cinemaId)}>
                <Modal.Header closeButton>
                    <Modal.Title>{cinemaId ? "Sửa phim" : "Thêm rạp"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputCinemaName" className="col-sm-2 col-form-label">Thêm rạp<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text"
                                ref={firstInput}
                                className="form-control" id="inputCinemaName" value={cinemaName} onChange={e => setCinemaName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputLocation" className="col-sm-2 col-form-label">Địa chỉ</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputLocation" value={location} onChange={e => setLocation(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputDescription" className="col-sm-2 col-form-label">Mô tả</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputDescription" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputRooms" className="col-sm-2 col-form-label">Phòng</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputRooms" value={rooms} onChange={e => setRooms(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} forhtml="inputStatus" className="col-sm-2 col-form-label">Trạng thái kích hoạt</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <FormCheckInput checked={active} onChange={e => setActive(e.target.value)}></FormCheckInput>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} htmlFor="inputCinemaPicture" className="col-sm-2 col-form-label">Thêm poster</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input
                                ref={posterInput}
                                type="file"
                                id="inputCinemaPicture"
                                accept="image/*"
                                name="inputCinemaPicture"
                                className='form-control'
                                uncontrolled="true"
                                multiple
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

export default CinemaForm