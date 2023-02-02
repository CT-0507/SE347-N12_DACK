import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';


import './movies.css'

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
            <Row xs={2} md={4} className="g-4">
                {AiringFilm.map((item, idx) => (
                    <Col key={idx}>
                        <Card >
                            <Link to={`/movie-description/${item.id}`}> <Card.Img variant="top" src={`http://localhost:3500/${item.poster}`} /></Link>
                            <Card.Body>
                                <Card.Title className='word-wrap'>{item.filmName}</Card.Title>
                                <Card.Text className='word-wrap'>
                                    {item.tags}
                                    <br /> Thời lượng: {item.time} phút
                                    <br /> Khởi chiếu: {item.premiereDay}
                                </Card.Text>
                                <Row>
                                    <Col><Button variant="primary">Xem trailer</Button></Col>
                                    <Col><Button variant="danger">Đặt vé</Button></Col>
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