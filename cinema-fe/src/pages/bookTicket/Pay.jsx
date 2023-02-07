import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './pay.css'

import AtmLogo from '../../img/atm_icon.png'
import VisaLogo from '../../img/visa_icon.png'
import MomoLogo from '../../img/momo_icon.png'
import ZaloLogo from '../../img/icon_zlp_1k.png'

import ButtonPay from '../../components/button/ButtonPay'


function Pay() {
    const {selected, totalprice}=useParams();
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      const TongGia = VND.format(totalprice);
    return ( 
        <Container className='container-pay my-2 pb-2 px-0' >
            <h3 style={{width:'100%'}} className='head-pay px-2'>Thanh Toán</h3>
            <Row className="ps-2 pe-0">
                <Col md={8} className='pe-4 col-pay '>
                    <Row className='my-2 pb-3'>
                        <h4 className='head-pay-1 mx-1 py-1 mb-4 '>Nhập mã khuyễn mãi</h4>
                        <div className='' style={{width:'40%'}}>
                            <Form.Control
                                id="idmakhuyenmai"
                            />
                        </div>
                    </Row>
                    <Row className='my-2'>
                        <h4 className='head-pay-1 mx-1 py-1'>Hình thức thanh toán</h4>
                        <Form>
                            <div className='my-2 mx-2 '>
                                <label>
                                    <input
                                        type='radio'
                                        name='thanhtoan'
                                        value='atm-card'
                                    >
                                    </input>
                                    <img className='mx-2 '
                                        src={ AtmLogo}
                                    ></img>
                                    ATM card ( Thẻ nội địa)
                                </label>
                            </div>
                            <div className='my-2 mx-1'>
                                <label>
                                    <input 
                                        type='radio'
                                        name='thanhtoan'
                                        value='visa-card'
                        
                                    >
                                    </input>
                                    <img className='mx-2 '
                                        src={ VisaLogo}
                                    ></img>
                                    Thẻ quốc tế ( Visa, Master, Amex, JCB)
                                </label>
                            </div>
                            <div className='my-2  mx-1'>
                                <label>
                                    <input
                                        type='radio'
                                        name='thanhtoan'
                                        value='momo'
                        
                                    >
                                    </input>
                                    <img className='mx-2 '
                                        src={ MomoLogo}
                                        alt='atm'
                                    ></img>
                                    Ví MoMo
                                </label>
                            </div>
                            <div className='my-2 mx-1'>
                                <label>
                                    <input
                                        type='radio'
                                        name='thanhtoan'
                                        value='zalo'
                        
                                    >
                                    </input>
                                    <img className='mx-2 '
                                        src={ ZaloLogo}
                                        alt='atm'
                                    ></img>
                                    ZaLoPay
                                </label>
                            </div>
                        
                        </Form>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Tôi Đồng ý với điều khoản sử dụng" />
                    </Form.Group>
                    </Row>

                </Col>
                <Col md={4} className='px-4 col-pay py-2 '>
                <h4 className='head-pay-1 mx-1 py-1 mb-4 '>Tổng Cộng</h4>
                    <h4>Tên phim AVATAR 2: THỦY ĐẠO</h4>
                    <h5 className='title-total-price py-1 px-1'>Hàng Ghế: </h5>
                    <h5>{selected}</h5>
                    <h5 className='title-total-price py-1 px-1'>Khuyễn mãi:</h5>
                    <h5>0.00đ</h5>
                    <h5 className='title-total-price py-1 px-1'>Tổng số tiền cần thanh toán</h5>
                    <h4>{TongGia}</h4>
                    <div className='my-4'>
                        <Link to='/mo-mo'>
                            <ButtonPay></ButtonPay>
                        </Link>
                    </div>

                </Col>
            </Row>
            
            
        </Container>
        
     );
}

export default Pay;