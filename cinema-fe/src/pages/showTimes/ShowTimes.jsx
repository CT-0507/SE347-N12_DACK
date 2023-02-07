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
import { selectFilmBySlug } from '../admin/filmsApi/filmsApiSlice';
import { selectCinemaById, useGetCinemasQuery } from '../admin/cinemasApi/cinemasApiSlice';
import { selectPremiereSlotById, useGetPremiereSlotsQuery } from '../admin/premiereSlotsApi/premiereSlotsApiSlice';
const ShowTimes = memo(() => {
    useEffect(() => {
    }, [])
    const [searchParams] = useSearchParams();
    const filmSlug = searchParams.get('film')
    const film = useSelector(state => selectFilmBySlug(state, filmSlug))
    const [value, onChange] = useState(new Date());
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
        console.log(premiereSlots)
        availableCinema = ids?.length
            ? ids.map((premiereSlotId, index) => <CinemaOption premiereSlotId={premiereSlotId} />)
            : null
    }
    return (
        <Container className="container-shows-times py-4">
            <h1>Lịch chiếu</h1>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <Form.Select aria-label="Default select example">
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
                                    <Calendar onChange={onChange} value={value} />
                                </div>
                            )}
                        >
                            <div className='show-calendar'>{value.getDate()}/{value.getMonth()}/{value.getFullYear()}
                                <FontAwesomeIcon icon={faCalendar} className='ms-4' />
                            </div>

                        </Tippy>

                    </div>


                </Col>

            </Row>
            <Row>
                <Col sm={3} xs={6}>
                    <img className='img-show-times mt-4' style={{ width: '100%' }} src={`http://localhost:3500/${film.poster}`}></img>
                </Col>
                <Col sm={9} xs={12}>
                    <h4 className='px-4 mb-0 mt-4'>Rạp Quận 1</h4>
                    <Row className='row-show-times mx-auto'>
                        <Row>
                            <Col sm={3}>
                                2D - Phụ đề
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
                    </Row>
                    <h4 className='px-4 mb-0 mt-4'>Rạp Quận 2</h4>
                    <Row className='row-show-times mx-auto'>
                        <Row>
                            <Col sm={3}>
                                2D - Phụ đề
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
                    </Row>
                </Col>
            </Row>
        </Container>

    )
})

export default ShowTimes

const CinemaOption = memo(({ premiereSlotId }) => {
    const premiereSlot = useSelector(state => selectPremiereSlotById(state, premiereSlotId))
    console.log(premiereSlot)
    return (
        <option value={`${premiereSlot?.id}`}>{premiereSlot?.cinema?.cinemaName}</option>
    )
})
// const DateOption = memo(({ premiereSlotId }) => {
//     const premiereSlot = useSelector(state => selectPremiereSlotById(state, premiereSlotId))
//     console.log(premiereSlot)
//     return (
//         <option value={`${premiereSlot?.id}`}>{premiereSlot?.cinema?.cinemaName}</option>
//     )
// })