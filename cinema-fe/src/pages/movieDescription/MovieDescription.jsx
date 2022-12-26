import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import ButtonTicket from "../../components/button/ButtonTicket";
import ButtonLike from "../../components/button/ButtonLike";

import Poster from '../../img/poster_avatar2.jpg'

import './movieDescription.css'

import { useEffect, memo } from 'react'
const MoviesDescription = memo(() => {
    useEffect(() => {
    }, [])
    
    return (
      <Container className="container-movies-description">
        <header>
            <h1>Nội Dung Phim</h1>
        </header>
        <Row className='border-top border-dark py-4'> 
            <Col sm={3}> 
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: false,
                        width: 300,
                        height: 450,
                        src: Poster
                    },
                    largeImage: {
                        src: Poster,
                        width: 1200,
                        height: 1800,
                        
                    },
                    enlargedImageContainerDimensions:{
                        width: '150%', 
                        height: '130%'}
                }} />
            </Col>
            <Col sm={9}>
                <h1>AVATAR 2: CON ĐƯỜNG CỦA NƯỚC</h1>
                <p>
                    <b>Đạo diễn: </b>James Cameron
                    <br/>
                    <b>Diễn Viên: </b>Sam Worthington, Zoe Saldana, Dương Tử Quỳnh,...
                    <br/>
                    <b>Thể loại: </b>Hành Động, Khoa Học Viễn Tưởng, Phiêu Lưu
                    <br/>
                    <b>Khởi chiếu: </b>16/12/2022
                    <br/>
                    <b>Thời lượng: </b>192 phút
                    <br/>
                    <b>Ngôn ngữ: </b>Tiếng Anh - Phụ đề Tiếng Việt; Lồng tiếng
                    <br/>
                    <b>Rated: </b> <b className='text-rated'>C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI</b>
                    <br/>
                </p>
                <ButtonLike/>
                <ButtonTicket/>
                <Row  className='movie-tab my-2 '>
                    <Tabs
                        defaultActiveKey="description"
                        id="tab-description"
                        className="mb-3"
                        
                        >
                        <Tab eventKey="description" title="Chi tiêt" className='button-tab'>
                            <p> 
                            Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.
                            </p>
                        </Tab>
                        <Tab eventKey="trailer" title="Xem trailer">
                        <iframe width="100%" height="415" 
                            src="https://www.youtube.com/embed/Ru4Jbmh7bcQ" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        
                        </iframe>
                            
                        </Tab>
                        
                        
                    </Tabs>
                </Row>
            </Col>
        </Row>
        
            
      </Container>
    
    )
})

export default MoviesDescription