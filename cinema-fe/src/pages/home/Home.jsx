import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import Slider from "react-slick";

import carousel from '../../img/980wx448h_18.jpg'
import carousel1 from '../../img/cgv_980x488.png'
import carousel2 from '../../img/banner_980x448.jpg'
import poster from '../../img/poster_adam_4_1.jpg'

import Slick from './slick/Slick'
import './home.css'

import { useEffect, memo } from 'react'
const Home = memo(() => {


    useEffect(() => {
    }, [])
    return (
      <Container>
        <Row>
          <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel }
            alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1 }
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel2 }
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
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