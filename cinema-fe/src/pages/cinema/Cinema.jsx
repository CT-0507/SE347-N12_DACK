import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../img/slide_cinema_1.jpg';
import img2 from '../../img/slide_cinema_2.jpg';
import img3 from '../../img/slide_cinema_3.jpg';
import img4 from '../../img/bang_gia_ve.jpg'
import './cinema.css'

function Cinema() {
    return ( 
        <Container className='container-cinema py-4'>
            <h1>Hệ Thống Rạp</h1>
            <Row className='my-4'>
                <Col sm={3}>
                    <Form.Select aria-label="">
                        <option>Chọn hệ thống rạp</option>
                        <option value="1">Rạp Quận 1</option>
                        <option value="2">Rạp Quận 2</option>
                        <option value="3">Rạp Quận 3</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Carousel className='carousel-cinema'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className='my-4'>
                <Col md={6} className='py-2 px-2 '>
                    <h3  className='p-2 '>Giá vé</h3>
                    <img src={img4 } style={{width: '100%', height: ''}}></img>
                </Col>
                <Col md={6} className='py-2 px-2'>
                    <h3 className='p-2'>thông tin chi tiết</h3>
                    <h5 className='py-2'>Địa chỉ</h5>
                    Quận 1
                    <h5 className='py-2'>Số điện thoại: 1900 2023</h5>
                    <div className='py-2'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.026689548042!2d106.78619318048578!3d10.886589176739285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a29dc7dc6d%3A0xf7a26cda04e8b610!2sKTX%20%C4%90HQG%20KHU%20B!5e0!3m2!1svi!2s!4v1669825060121!5m2!1svi!2s"
                            width="100%"
                            height="350"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <p>
                    Tọa lạc ở Trung tâm văn hóa Quận 11  Số 09, Quốc Lộ 22, Phường Trung Mỹ Tây , Quận 12, TPHCM. Cũng như các rạp Cinema khác, có hệ thống rạp chiếu phim được xây dựng theo tiêu chuẩn quốc tế. Các phòng chiếu với hai định dạng 2D và 3D đáp ứng tối đa nhu cầu khán giả. Màn hình sắc nét và hệ thống âm thanh vòm Dolby 7.1 hiện đại sẽ mang đến những trải nghiệm sống động như thật. Ngoài ra, các “đặc sản” đã từng giúp thương hiệu Galaxy Cinema “nổi đình nổi đám” như không gian trẻ trung, dịch vụ thân thiện, giá cả cực kỳ “kinh tế” cũng là ưu điểm không thể bỏ qua.
                    </p>
                </Col>
            </Row>
        </Container>
     );
}

export default Cinema;