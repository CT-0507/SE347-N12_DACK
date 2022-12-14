import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/esm/Button';
import classNames from 'classnames/bind'


import SlickMovie from './slicks/SlickMovie'
import SlickEvent from './slicks/SlickEvent'
import Carousels from './carousel/Carousel'

import styles from './home.module.scss'

import homePoster from '../../img/u22_homepage.jpg'

import { useEffect, memo } from 'react'

const cx = classNames.bind(styles);
const Home = memo(() => {


  useEffect(() => {
  }, [])
  return (
 
      // <div id ={isClick ?'NoContainer':'container'}>
        <Container className="py-4">
          <Row className="my-2">
            <Carousels />
          </Row>
          <Row className="my-2">
            <div className={cx('home-tile')}>
              <h2 >MOVIE SELECTION</h2>
              
            </div>
          </Row>
          <Row className="my-2">
            <SlickMovie />
          </Row>
          <Row className="my-2">
            <div className={cx('home-tile')}>
              <h2>EVENT</h2>
            </div>
          </Row>
          <Row className="my-2">
            <SlickEvent />
          </Row>
          <Row className="my-2">
            <div className={cx('home-tile')}>
              <br />
            </div>
          </Row>
          <Row xs={1} md={2} className="g-4 my-2 ">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={homePoster}  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      // </div>

  )
})

export default Home