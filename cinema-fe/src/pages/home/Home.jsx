import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";

import SlickMovie from './slicks/SlickMovie'
import SlickEvent from './slicks/SlickEvent'
import Carousels from './carousel/Carousel'
import './home.css'

import homePoster from '../../img/u22_homepage.jpg'

import { useEffect, memo } from 'react'
const Home = memo(() => {

  useEffect(() => {
  }, [])
  return (
    <Container>
      <Row>
        <Carousels />
      </Row>
      <Row>
        <div className="home-tile">
          <h2>Movie selection</h2>
        </div>
      </Row>
      <Row>
        <SlickMovie />
      </Row>
      <Row>
        <div className="home-tile">
          <h2>Event</h2>
        </div>
      </Row>
      <Row>
        <SlickEvent />
      </Row>
      <Row>
        <div className="home-tile">
          <br />
        </div>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={homePoster} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  )
})

export default Home