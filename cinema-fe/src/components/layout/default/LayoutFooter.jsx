import { memo } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import logo from '../../../img/logo.png'
import certificate from '../../../img/cong-thuong.png'
const LayoutFooter = memo(() => {
    const { width, height } = useWindowDimensions();
    const isMobile = width <= 765
    const isTablet = width < 995 && width > 766
    const isPC = !isMobile && isTablet

    return (
        <>
            <footer style={{ overflow: 'hidden' }}>
                {!isMobile ?
                    <Container fluid className='p-0 px-4 footer-container'>
                        <Row className='text-center  border-bottom border-top p-2  border-dark justify-content-md-center'>
                            <Col md="2"><i className="fa fa-imdb p-2" aria-hidden="true"></i></Col>
                            <Col md="2"><i className="fa fa-heart p-2" aria-hidden="true"></i></Col>
                            <Col md="2"><i className="fa fa-thumbs-up p-2" aria-hidden="true"></i></Col>
                            <Col md="2"><i className="fa fa-camera p-2" aria-hidden="true"></i></Col>
                            <Col md="2"><i className="fa fa-bullhorn p-2" aria-hidden="true"></i></Col>
                        </Row>
                        <Row className=' border-bottom border-dark justify-content-md-center'>
                            <Col lg="2" className="py-3 ">
                                <h5>PopCorn Couch</h5>
                                <ul className="ul-nav m-0 p-0 py-3">
                                    <li><Nav.Link as={Link} to="default/about">Giới Thiệu</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/about">Tiện Ích Online</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/about">Thẻ Quà Tặng</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/about">Tuyển Dụng</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/contact">Liên Hệ Quảng Cáo</Nav.Link></li>
                                </ul>
                            </Col>
                            <Col lg="2" className="py-3">
                                <h5>Điều khoản sử dụng</h5>
                                <ul className="ul-nav m-0 p-0 py-3">
                                    <li><Nav.Link as={Link} to="default/terms-conditions">Điều Khoảng Chung</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/terms-use">Điều Khoản Giao Dịch</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/payment-policy">Chính Sách Thanh Toán</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/faq">Chính Sách Bảo Mật</Nav.Link></li>
                                    <li><Nav.Link as={Link} to="default/faq">Câu Hỏi Thường Gặp</Nav.Link></li>
                                </ul>
                            </Col>
                            <Col lg="2" className="py-3">
                                <h5>Kết nối với chúng tôi</h5>
                                <ul className="ul-nav m-0 p-0 py-3">
                                    <li>
                                        <Nav.Link as={Link} >
                                            <i className="fa fa-facebook-official p-3 " aria-hidden="true">
                                            </i>
                                            <i className="fa fa-youtube-square p-3" aria-hidden="true"></i>
                                            <i className="fa fa-instagram p-3" aria-hidden="true"></i>
                                        </Nav.Link>
                                    </li>
                                    <li><Nav.Link as={Link} to="about"><img src={certificate} alt="" /></Nav.Link></li>
                                </ul>
                            </Col>
                            {!isTablet && <Col lg="2" className="py-3 ">
                                <h5>Chăm sóc khách hàng</h5>
                                <ul className="ul-nav m-0 p-0 py-3">
                                    <li>Hotline: 1900 0000</li>
                                    <li>Giờ làm việc: 24/7 (Tất cả các ngày cả Lễ)</li>
                                    <li>Email hỗ trợ: tranquocc1@gmail.com</li>
                                </ul>
                            </Col>}
                        </Row>
                        {isTablet &&
                            <Row className=' border-bottom py-2 border-dark'>
                                <div className='p-2 text-center bg-secondary rounded-pill'>
                                    <h5>Chăm sóc khách hàng</h5>
                                    <ul className="ul-nav m-0 p-0 py-3">
                                        <li>Hotline: 1900 0000</li>
                                        <li>Giờ làm việc: 24/7 (Tất cả các ngày cả Lễ)</li>
                                        <li>Email hỗ trợ: tranquocc1@gmail.com</li>
                                    </ul>
                                </div>
                            </Row>
                        }

                    </Container>
                    :
                    <Container fluid className="p-0" style={{ overflowY: 'hidden' }}>
                        <Row className="p-2 border-bottom w-100">
                            <Navbar>
                                <Nav.Link as={Link} to='default/about' className="p-2 border-bottom w-100">
                                    Giới Thiệu
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Tiện Ích Online
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Thẻ Quà Tặng
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Tuyển Dụng
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Liên Hệ Quảng Cáo VKTC
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} to='default/terms-conditions' className="p-2 w-100">
                                    Điều Khoản Chung
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Điều Khoản Giao Dịch
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Chính Sách Thanh Toán
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Chính Sách Bảo Mật
                                </Nav.Link>
                            </Navbar>
                            <Navbar>
                                <Nav.Link as={Link} className="p-2 w-100">
                                    Câu Hỏi Thường Gặp
                                </Nav.Link>
                            </Navbar>
                        </Row>
                        <Row>
                            <Col className="py-3 text-center">
                                <ul className="ul-nav m-0 p-0 py-3">
                                    <li className='d-flex justify-content-center'>
                                        <Nav.Link href='https://www.facebook.com/'>
                                            <i className="fa fa-facebook-official p-3" aria-hidden="true"></i>
                                        </Nav.Link>
                                        <Nav.Link href='https://www.youtube.com/'>
                                            <i className="fa fa-youtube-square p-3" aria-hidden="true"></i>
                                        </Nav.Link>
                                        <Nav.Link href='https://www.instagram.com/'>
                                            <i className="fa fa-instagram p-3 " aria-hidden="true"></i>
                                        </Nav.Link>
                                    </li>
                                    <li><Nav.Link as={Link} to="about"><img src={certificate} alt="" /></Nav.Link></li>
                                </ul>
                            </Col>
                        </Row>

                    </Container>
                }
                <Row className={(isTablet || isMobile ? ' flex-column text-center' : ' ').concat('py-3 justify-content-center align-items-center  border-dark border-top')}>
                    <Col sm="1" xs="1" md="1" className='m-auto'>
                        <Link to="/"><img src={logo} width="64px" height="64px" alt="" /></Link>
                    </Col>
                    <Col>
                        <div>
                            <h6>Công ty cung cấp phần mềm môn công nghệ web</h6>
                            <ul className="ul-nav p-0">
                                <li>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</li>
                                <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</li>
                                <li>Vivamus mauris leo, aliquam at orci vel, porttitor porttitor nulla. Mauris quis tellus nibh. Suspendisse mollis ut quam quis varius. Suspendisse a felis eget purus feugiat placerat a eu mauris.</li>
                                <li>Morbi euismod urna ut arcu interdum eleifend. Phasellus metus massa.</li>
                                <li>&copy; COPYRIGHT 2022 TRAN QUOC CUONG ALL RIGHTS RESERVED</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </footer >
        </>
    )
})

export default LayoutFooter