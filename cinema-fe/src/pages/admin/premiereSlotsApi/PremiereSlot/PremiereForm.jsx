import { useState, memo } from 'react'
import Modal from 'react-bootstrap/Modal';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import Button from "react-bootstrap/Button"
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { selectPremiereSlotById, useAddNewPremiereSlotMutation, useUpdatePremiereSlotMutation } from '../premiereSlotsApiSlice';

const PremiereSlotForm = ({ premiereSlotId, handleClose }) => {
    let premiereSlot
    if (premiereSlotId) {
        premiereSlot = useSelector(state => selectPremiereSlotById(state, premiereSlotId))
        console.log(premiereSlot)
    }
    const [filmId, setFilmId] = useState(premiereSlot ? premiereSlot.filmId._id : "")
    const [date, setDate] = useState(premiereSlot ? premiereSlot.date : "")
    const [time, setTime] = useState(premiereSlot ? premiereSlot.time : "")
    const [cinema, setCinema] = useState(premiereSlot ? premiereSlot.cinema._id : "")
    const [room, setRoom] = useState(premiereSlot ? premiereSlot.room : "")
    const firstInput = useRef()
    const canSave = [filmId, date, time, cinema, room].every(item => item !== "" && typeof item !== "undefined")
    useEffect(() => {
        firstInput.current.focus()
    }, [])
    const [addNewPremiereSlot, {
        isSuccess,
        isLoading,
        isError,
        error
    }] = useAddNewPremiereSlotMutation()
    const [updatePremiereSlot, {
        isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error: updateError
    }] = useUpdatePremiereSlotMutation()
    const handleConfirm = premiereSlotId
        ? async (premiereSlotId) => {
            const Object = { id: premiereSlot.id, filmId: filmId, date: date, time: time, cinema: cinema, room: room }
            console.log(Object)
            await updatePremiereSlot(Object)
            if (isUpdateError) console.log(updateError)
        }
        : async () => {
            if (canSave) {
                try {
                    await addNewPremiereSlot({ filmId: filmId, date: date, time: time, cinema: cinema, room: room })
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
    useEffect(() => {
        if (isSuccess || isUpdateSuccess) {
            handleClose()
        }
    }, [isSuccess, isUpdateSuccess, handleClose])
    return (
        <Modal show onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{premiereSlotId ? "Chỉnh suất chiếu" : "Thêm suất chiếu"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputFilmId" className="col-sm-2 col-form-label">Id Phim<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input ref={firstInput} type="text" className="form-control" id="inputFilmId" value={filmId} onChange={e => setFilmId(e.target.value)} />
                    </div>
                    {filmId === "" && <p className="text-danger">Vui lòng nhập Id phim</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputDate" className="col-sm-2 col-form-label">Ngày<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="text" className="form-control" id="inputDate" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    {date === "" && <p className="text-danger">Vui lòng ngày</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputTimeSlot" className="col-sm-2 col-form-label">Suất thời gian<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="text" className="form-control" id="inputTimeSlot" value={time} onChange={e => setTime(e.target.value)} />
                    </div>
                    {time === "" && <p className="text-danger">Vui lòng nhập thời gian</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputCinemaId" className="col-sm-2 col-form-label">Nhập Id Rạp<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="text" className="form-control" id="inputCinemaId" value={cinema} onChange={e => setCinema(e.target.value)} />
                    </div>
                    {time === "" && <p className="text-danger">Vui lòng Id rạp</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputRoomId" className="col-sm-2 col-form-label">Nhập Id Phòng<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="text" className="form-control" id="inputRoomId" value={room} onChange={e => setRoom(e.target.value)} />
                    </div>
                    {time === "" && <p className="text-danger">Vui lòng Id rạp</p>}
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" disabled={!canSave} onClick={handleConfirm}>
                    {isLoading || isUpdateLoading ? <Spinner /> : premiereSlotId ? "Chỉnh suất" : "Lưu suất chiếu"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(PremiereSlotForm)