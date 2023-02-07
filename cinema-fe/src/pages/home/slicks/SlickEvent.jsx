import { memo } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster from '../../../img/birthday_popcorn_box_240x201.png'
import poster1 from '../../../img/happywednesday240x201_1.jpg'
import poster2 from '../../../img/culture-240_1.jpg'

import './slick.css'
function SlickEvent() {
    let settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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


    return (

        <Slider {...settings}>
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Card.Img variant="top" src={poster} />

                </Card>
            </div>
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Card.Img variant="top" src={poster1} />

                </Card>
            </div>
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Card.Img variant="top" src={poster2} />

                </Card>
            </div>
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Card.Img variant="top" src={poster1} />

                </Card>
            </div>
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Card.Img variant="top" src={poster} />

                </Card>
            </div>
            <div className="item">
                <Card style={{ width: '18rem' }} className="card-film">
                    <Card.Img variant="top" src={poster1} />

                </Card>
            </div>
        </Slider>
    );
}

export default memo(SlickEvent);