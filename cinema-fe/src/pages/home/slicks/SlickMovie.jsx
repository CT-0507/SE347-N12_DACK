import React from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster from '../../../img/poster_adam_4_1.jpg'
import poster1 from '../../../img/violent_night-700x1000px_1_.jpg'
import poster2 from '../../../img/hpm_poster_2x3_1_.jpg'
import poster3 from '../../../img/late_shift_-_700x1000.jpg'
import styles from './slick.module.css'
import classNames from 'classNames/bind'

import {useState} from 'react';

const cx = classNames.bind(styles)
function SlickMovie() {
    let settings = {
        dots: false,

        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // const [isClick , setIsClick] = useState(false);

    // const toggleIsClick =()=>{
    //   setIsClick(current=>!current)
    // }
  

    return (
        // <div id ={isClick ?'NoContainer':'container'}>
        <Slider {...settings} >
            <div className={cx('item')}>
                <Card style={{ width: '18rem' }} className={cx('card-film')}>
                    <Card.Img variant="top" src={poster3} />
                    <Card.Body>
                        <Card.Title>Phi Vụ Nửa Đêm</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary" >Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className={cx('item')}>
                <Card style={{ width: '18rem' }} className={cx('card-film')}>
                    <Card.Img variant="top" src={poster1} />
                    <Card.Body>
                        <Card.Title>Đêm Hung Tàn</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}

                        <Row>
                            <Col><Button variant="primary">Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className={cx('item')}>
                <Card style={{ width: '18rem' }} className={cx('card-film')}>
                    <Card.Img variant="top" src={poster3} />
                    <Card.Body>
                        <Card.Title>Phi Vụ Nửa Đêm</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary">Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className={cx('item')}>
                <Card style={{ width: '18rem' }} className={cx('card-film')}>
                    <Card.Img variant="top" src={poster1} />
                    <Card.Body>
                        <Card.Title>Đêm Hung Tàn</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary">Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className={cx('item')}>
                <Card style={{ width: '18rem' }} className={cx('card-film')}>
                    <Card.Img variant="top" src={poster3} />
                    <Card.Body>
                        <Card.Title>Phi Vụ Nửa Đêm</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary">Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className={cx('item')}>
                <Card style={{ width: '18rem' }} className={cx('card-film')}>
                    <Card.Img variant="top" src={poster1} />
                    <Card.Body>
                        <Card.Title>Đêm Hung Tàn</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}
                        <Row>
                            <Col><Button variant="primary">Xem trailer</Button></Col>
                            <Col><Button variant="primary">Đặt vé</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </Slider>
        // </div>
    );
}

export default SlickMovie;