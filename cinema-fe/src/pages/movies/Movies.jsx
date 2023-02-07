import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';


import './movies.css'

import ButtonTicket from '../../components/button/ButtonTicket'
import ButtonPlay from '../../components/button/ButtonPlay'
import PlayTrailer from '../../components/playTrailer/PlayTrailer'

import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux';
import { selectActiveFilm } from '../admin/filmsApi/filmsApiSlice';
const Movies = memo(() => {
    const { pathname } = useLocation()
    const option = pathname.includes("nearly") ? "nearly air" : "airing"
    console.log(pathname)
    const AiringFilm = useSelector(state => selectActiveFilm(state, option))

    return (
        <Container className="container-movies">
            <header>
                <h1 className='tile-movies'>Phim đang chiếu</h1>
            </header>
            <Row xs={2} lg={4} className="g-4">
                {AiringFilm.map((item, idx) => (
                    <Col key={idx}>
                        <Card >
                            <Link to={`/movie-description/${item.id}`}> <Card.Img variant="top" src={`http://localhost:3500/${item.poster}`}style={{width:'100%' , height:'415px'}} /></Link>
                            <Card.Body>
                                <Card.Title className='word-wrap'>{item.filmName}</Card.Title>
                                <Card.Text className='word-wrap'>
                                    {item.tags}
                                    <br /> Thời lượng: {item.time} phút
                                    <br /> Khởi chiếu: {item.premiereDay}
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <Link to={`/movie-description/${item.id}`}>
                                            <ButtonPlay ></ButtonPlay>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to ='/show-times'>
                                            <ButtonTicket variant="primary"></ButtonTicket>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
})

export default Movies