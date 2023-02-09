import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './contact.css'
import { memo } from 'react'
const currentPath = "LIÊN HỆ VỚI CHÚNG TÔI"
const Contact = memo(() => {
    document.title = "LIÊN HỆ VỚI CHÚNG TÔI | CGV"
    return (
        <Container className="contact-container">
            <Row>
                <h1 className="text-danger fw-bolder">{currentPath}</h1>
            </Row>
            <Row>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.026689548042!2d106.78619318048578!3d10.886589176739285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a29dc7dc6d%3A0xf7a26cda04e8b610!2sKTX%20%C4%90HQG%20KHU%20B!5e0!3m2!1svi!2s!4v1669825060121!5m2!1svi!2s"
                    width="400"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    frameBorder="true"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <h3>TRỤ SỞ CHÍNH</h3>
                        <p>Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
                    </Row>
                    <Row>
                        <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                        <p>Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
                    </Row>
                    <Row>
                        <h3>lIÊN HỆ QUẢNG CÁO</h3>
                        <p>Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
                    </Row>
                    <Row>
                        <h3>LIÊN HỆ HỢP TÁC TRUYỀN THÔNG VÀ TÀI TRỢ</h3>
                        <p>Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
                    </Row>
                    <Row>
                        <h3>VỀ CÁC RẠP</h3>
                        <p>Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
                    </Row>

                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNumber">
                            <Form.Label>Điện thoại</Form.Label>
                            <Form.Control type="tel" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung cần liên hệ</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>


                        <Button variant="danger" type="submit">
                            Gửi đi
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
})

export default Contact;