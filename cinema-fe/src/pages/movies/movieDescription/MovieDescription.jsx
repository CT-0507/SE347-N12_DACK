import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Poster from '../../../img/avatar-2.jpg'

const currentPath = ""
import { memo } from 'react'
document.title = "Tên Phim"
const props = { 
    width:250, 
    img:Poster,
    // offset: {vertical: 0, horizontal: -20},
    scale:2,
     
    
};
const MovieDescription = memo(() => {
    return (
        <Container>
            <Row  className="border-bottom border-dark ">
                <h1 >Nội Dung Phim</h1>
            </Row>
            <Row className='my-2 p-2'>
                <Col  xs={6} md={3} className='pl-2'>
                    {/* <img src={carousel }></img> */}
                    <ReactImageZoom {...props} style={{width:300}} />
                </Col>
                <Col xs={12} md={8}>
                    <Row className='my-2'>
                        <h2>AVATAR: DÒNG CHẢY CỦA NƯỚC</h2>
                        <p>
                            đạo diễn: James Cameron
                            <br></br>
                            Diễn viên: Sam Worthington, Zoe Saldana, Dương Tử Quỳnh,...
                            <br></br>
                            Thể loại: Hành Động, Khoa Học Viễn Tưởng, Phiêu Lưu
                            <br></br>
                            Khởi chiếu: 16/12/2022
                            <br></br>
                            Thời lượng: 192 phút
                            <br></br>
                            Ngôn ngữ: Tiếng Anh - phụ đề tiếng Việt
                            <br></br>
                            Rated: C13 - Phim cấm khán giả dưới 13 tuổi
                        </p>
                    </Row>
                    <Row className='my-2 border-bottom border-dark pb-2'>
                        <Button variant="primary" style={{width:100}} className='mx-2'>Mua vé</Button>
                        <Button variant="danger"style={{width:130}} className='mx-2'>Xem trailer</Button>
                    </Row>
                    <Row className='my-2'>
                        <p>Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora</p>
                    </Row>
                </Col>
            </Row>  
        </Container>
    )
})

export default MovieDescription