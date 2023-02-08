import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link, useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Spinner from 'react-bootstrap/Spinner';

import 'react-calendar/dist/Calendar.css';
import Poster from '../../img/poster_avatar2.jpg'

import './showTimes.css'

import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux';
import { selectFilmBySlug, selectFilmOption } from '../admin/filmsApi/filmsApiSlice';
import { selectCinemaById, useGetCinemasQuery } from '../admin/cinemasApi/cinemasApiSlice';
import { selectPremiereSlotById, selectSlotsOption, useGetPremiereSlotsQuery } from '../admin/premiereSlotsApi/premiereSlotsApiSlice';
const ShowTimes = memo(() => {
    const [searchParams] = useSearchParams();
    const filmSlug = searchParams.get('film')
    const film = useSelector(state => selectFilmBySlug(state, filmSlug))
    const [date, setDate] = useState(new Date());
    const [chosenCinema, setChosenCinema] = useState()
    // const {
    //     data: cinemas,
    //     isSuccess,
    //     isLoading,
    //     refetch,
    //     isError,
    //     error
    // } = useGetCinemasQuery("cinemasList", {
    //     pollingInterval: 60000,
    //     refetchOnFocus: true,
    // })
    // let content
    // if (isLoading) content = <tr><td colSpan={100}><Spinner /></td></tr>
    // if (isError) content = <tr><td colSpan={100}>{error?.data?.message}</td></tr>
    // if (isSuccess) {
    //     const { ids } = cinemas
    //     content = ids?.length
    //         ? ids.map((cinemaId, index) => {
    //             const cinema = useSelector(state => selectCinemaById(state, cinemaId))
    //             return (
    //                 <option value={`${cinema?.id}`}>{cinema?.cinemaName}</option>
    //             )
    //         })
    //         : null
    // }
    const {
        data: premiereSlots,
        isSuccess: isPremiereSlotSuccess,
        isLoading: isPremiereSlotLoading,
        isError: isPremiereSlotError,
        error: premiereSlotError
    } = useGetPremiereSlotsQuery("premiereSlotsList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
    })
    let availableCinema
    let availableDate
    if (isPremiereSlotLoading) availableCinema = null
    if (isPremiereSlotError) availableCinema = null
    if (isPremiereSlotSuccess) {
        const { ids } = premiereSlots
        availableCinema = ids?.length
            ? ids.map((premiereSlotId, index) => <CinemaOption key={index} premiereSlotId={premiereSlotId} />)
            : null
    }
    const [availbleSlot, setAvailableSlot] = useState()
    let Av
    const [showConfirmButton, setShowConfirmButton] = useState(true)
    const [dateFormat, setDateFormat] = useState()
    useEffect(() => {
        console.log(chosenCinema)
        console.log(date)
        if (chosenCinema && date) {
            setDateFormat(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
            console.log(dateFormat)
            setShowConfirmButton(false)

        }
    }, [date, chosenCinema])
    const handleFind = () => {
        setAvailableSlot(<Available chosenCinema={chosenCinema} date={dateFormat} />)
    }
    return (
        <Container className="container-shows-times py-4">
            <h1>Lịch chiếu</h1>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <Form.Select aria-label="Default select example" value={chosenCinema} onChange={e => setChosenCinema(e.target.value)}>
                        <option>Chọn Rạp</option>
                        {availableCinema}
                    </Form.Select>
                </Col>
                <Col xs lg="2">
                    <div className='pick-day'>
                        <Tippy
                            interactive
                            render={attrs => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <Calendar onChange={setDate} value={date} />
                                </div>
                            )}
                        >
                            <div className='show-calendar'>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                                <FontAwesomeIcon icon={faCalendar} className='ms-4' />
                            </div>

                        </Tippy>

                    </div>


                </Col>
                <Button onClick={handleFind} disabled={showConfirmButton}>Tìm</Button>

            </Row>
            <Row>
                <Col sm={12} xs={12} md={12} lg={3}>
                    {film && <img className='img-show-times mt-4' style={{ width: '100%' }} src={`http://localhost:3500/${film?.poster}`}></img>}
                </Col>
                <Col sm={9} xs={12}>
                    {availbleSlot}
                    {/* <h4 className='px-4 mb-0 mt-4'>Rạp Quận 2</h4>
                    <Row className='row-show-times mx-auto'>

                        <Row>
                            <Col sm={3}>
                                3D - Phụ đề
                            </Col>
                            <Col sm={9}>
                                <ul>
                                    <li ><Link to='/book-ticket' style={{ textDecoration: 'none' }}>16:30</Link></li>
                                    <li ><Link to='/book-ticket' style={{ textDecoration: 'none' }}>16:30</Link></li>
                                    <li ><Link to='/book-ticket' style={{ textDecoration: 'none' }}>16:30</Link></li>
                                    <li ><Link to='/book-ticket' style={{ textDecoration: 'none' }}>16:30</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Row> */}
                </Col>
            </Row>
        </Container>

    )
})

export default ShowTimes

const CinemaOption = memo(({ premiereSlotId }) => {
    const premiereSlot = useSelector(state => selectPremiereSlotById(state, premiereSlotId))
    return (
        <option key={premiereSlotId} value={`${premiereSlot?.cinema?._id}`}>{premiereSlot?.cinema?.cinemaName}</option>
    )
})
const Available = ({ chosenCinema, date }) => {
    console.log(date)
    const availables = useSelector(state => selectSlotsOption(state, chosenCinema, date))
    console.log(availables)
    if (availables) {
        let availableblocks = []
        availables.forEach(slot => {
            const block = (
                <div>
                    <h4 className='px-4 mb-0 mt-4'>{slot.cinema.cinemaName}</h4>
                    <Row className='row-show-times mx-auto'>

                        <Row>
                            <Col sm={3}>
                                3D - Phụ đề
                            </Col>
                            <Col sm={9}>
                                <ul>
                                    <li ><Link to={`/book-ticket?slotId=${slot.id}`} style={{ textDecoration: 'none' }}>{slot.time}</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Row>
                </div>
            )
            availableblocks.push(block)
        })
        return (
            <>
                {availableblocks}
                {availableblocks.length === 0 && <h4 className="mt-4">Không có suất chiếu vào khoảng thời gian này</h4>}
            </>
        )
    }
    return <h1>Không có suất chiếu vào khoảng thời gian này</h1>
}