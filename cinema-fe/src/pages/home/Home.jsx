import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import Slider from "react-slick";



import Slick from './slick/Slick'
import Carousels from './carousel/Carousel'
import './home.css'

import { useEffect, memo } from 'react'
const Home = memo(() => {


    useEffect(() => {
    }, [])
    return (
      <Container>
        <Row>
        <Carousels/>
        </Row>
        <Row>
          <div className="home-tile">
            <h2>Movie selection</h2>
          </div>
        </Row>
        <Row>
          <Slick/>
        </Row>
        <Row>
          <div className="home-tile">
            <h2>Event</h2>
          </div>
        </Row>
        <Row>
          <Slick/>
        </Row> 
      </Container>
    
    )
})

export default Home