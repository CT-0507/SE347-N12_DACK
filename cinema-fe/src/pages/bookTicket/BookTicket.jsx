import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



import './bookTicket.css'

// import ButtonTicket from '../../components/button/ButtonTicket'
// import ButtonPlay from '../../components/button/ButtonPlay'
import ButtonCounter from '../../components/button/ButtonCounter'

import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux';
import { counter } from '@fortawesome/fontawesome-svg-core';

import poster1 from '../../img/happywednesday240x201_1.jpg'

function BookTicket() {
    console.log(counter)
    return (  
        <Container className='container-book-tickets py-4'>
            <Row>
                <Col md={8} className='col-1'>
                    <h2 className='p-2'>CHỌN VÉ/THỨC ĂN</h2>
                    <Table   size="md" className='table-1' >
                        <thead className='row-title'>
                            <tr classname='name-table'>
                                <th>Loại vé</th>
                                <th>Số lượng</th>
                                <th>Giá(VNĐ)</th>
                                <th>Tổng(VNĐ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Người Lớn</td>
                                <td><ButtonCounter ></ButtonCounter></td>
                                <td>75.000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Sau 22h</td>
                                <td><ButtonCounter ></ButtonCounter></td>
                                <td>50.000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                Tổng
                            </tr>
                            
                        </tbody>
                    </Table>

                    <Table   size="md" className='table-1' >
                        <thead className='row-title'>
                            <tr classname='name-table'>
                                <th>Combo</th>
                                <th>Số lượng</th>
                                <th>Giá(VNĐ)</th>
                                <th>Tổng(VNĐ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vip No.1 <br></br>1 Bắp + 1 Nước tự chọn + 1 Snack</td>
                                <td><ButtonCounter ></ButtonCounter></td>
                                <td>75.000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Vip No.2 <br></br>1 Bắp + 2 Nước tự chọn + 2 Snack</td>
                                <td><ButtonCounter ></ButtonCounter></td>
                                <td>100.000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Vip No.3 <br></br>2 Bắp + 3 Nước tự chọn + 2 Snack</td>
                                <td><ButtonCounter ></ButtonCounter></td>
                                <td>120.000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                Tổng
                            </tr>
                            
                        </tbody>
                    </Table>

                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={poster1}  />
                        <Card.Body>
                            <Card.Title>Tên Phim</Card.Title>
                            <Card.Text>
                            Rạp:
                            <br></br>
                            Suất chiếu
                            <br></br>
                            Combo:
                            <br></br>
                            Ghế:
                            <br></br>  
                            Tổng:
                            <br></br>
                            
                            </Card.Text>
                            <Link to=''><Button>Tiếp tục</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BookTicket;