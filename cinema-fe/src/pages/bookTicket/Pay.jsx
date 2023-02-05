import React from "react";
import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './pay.css'

function Pay() {
    const {selected, totalprice}=useParams();
    return ( 
        <Container className='container-pay my-2 pb-2 px-0' >
            <h3 style={{width:'100%'}} className='head-pay px-2'>Thanh Toán</h3>
            <Row className="px-2">
                <Col md={8}>
                    <h4>Nhập mã khuyễn mãi</h4>
                    <Form.Control
                        id="idmakhuyenmai"    
                    />
                    <h4>Hình thức thanh toán</h4>
                    <Form>
                        <Form.Check
                            type='radio'
                            name='thanhtoan'
                            id='thanhtoan1'
                            value='opt1'
                            label='atm'
                        >
                        </Form.Check>
                        <Form.Check
                            type='radio'
                            name='thanhtoan'
                            id='thanhtoan2'
                            value='opt2'
                            label='visa'
                        >
                        </Form.Check>
                        <Form.Check
                            type='radio'
                            name='thanhtoan'
                            id='thanhtoan3'
                            value='opt3'
                            label='momo'
                        >
                        </Form.Check>
                        <Form.Check
                            type='radio'
                            name='thanhtoan'
                            id='thanhtoan4'
                            value='opt4'
                            label='zalo'
                        >
                        </Form.Check>
                    </Form>

                </Col>
                <Col md={4}>
                    Tên phim AVATAR 2: THỦY ĐẠO
                    <h3>Hàng Ghế: {selected}</h3>
                    <h3> tổng {totalprice}</h3>
                </Col>
            </Row>
            
            
        </Container>
        
     );
}

export default Pay;