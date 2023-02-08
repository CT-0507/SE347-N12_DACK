import Container from 'react-bootstrap/Container';
import React from "react";
import { Link, useSearchParams } from 'react-router-dom';



import './bookTicket.css'
import { counter } from '@fortawesome/fontawesome-svg-core';
import Body from './index.jsx'

function BookTicket() {
    const [searchParams] = useSearchParams();
    console.log(counter)
    return (
        <Container className='container-book-tickets py-4'>
            {/* <Row>
                <Col md={8} className='col-1'>
                    <h2 className='p-2'>CHỌN VÉ/ĐỒ ĂN</h2>
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
                <Col md={4} className='float-end'>
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
            </Row> */}
            <Body slotId={searchParams.get("slotId")} />
        </Container>
    );
}

export default BookTicket;