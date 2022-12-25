import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import filmPoster from '../../img/rasuk_poster_-1080x1350_1_.jpg'

import './movies.css'

import { useEffect, memo } from 'react'
const Movies = memo(() => {
    useEffect(() => {
    }, [])
    return (
      <Container className="container-movies">
        <header>
            <h1 className='tile-movies'>Phim đang chiếu</h1>
        </header>
        <Row xs={2} md={4} className="g-4">
            {['1','2','3'].map((listFilm) => (
                <Col key={listFilm}>
                <Card>
                    <Link to='/movie-description'> <Card.Img variant="top" src={filmPoster} /></Link>
                    <Card.Body>
                    <Card.Title>CHÚ NGUYỀN TÁI SINH</Card.Title>
                    <Card.Text>
                        Thể lại: kinh dị
                        <br/> Thời lượng: 95 phút
                        <br/> Khởi chiếu: 9-12-2022
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