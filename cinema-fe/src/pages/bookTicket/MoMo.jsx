import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Countdown from 'react-countdown';
import Button from 'react-bootstrap/Button';

import './momo.css'

import MomoLogo from '../../img/momo_icon.png'
import MoMoQR from '../../img/momo_qr_code.png'
import { useAddNewTicketMutation } from "../admin/ticket/ticketsApiSlice";
import { selectPremiereSlotById } from "../admin/premiereSlotsApi/premiereSlotsApiSlice";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
function MoMo() {
    const [searchParams] = useSearchParams()
    const slotId = searchParams.get("slotId")
    const slot = useSelector(state => selectPremiereSlotById(state, slotId))
    const user = useAuth()
    console.log(user)
    const selected = searchParams.get("selected")
    const total = Number(searchParams.get("total"))
    const discountCode = searchParams.get("discountCode")
    const [addNewTicket, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewTicketMutation()
    const handleConfirm = async () => {
        console.log(slotId, selected, total, slot)
        if ([slotId, selected, total].every(item => item) && slot) {
            try {
                const ticket = { filmId: slot?.filmId._id, userId: user.id, slotId: slotId, seats: selected, discountCode: discountCode, total: total, cinema: slot?.cinema._id }
                console.log(ticket)
                await addNewTicket(ticket)
                if (isError) alert(error)
                if (isSuccess) alert("Đặt vé thành công")
            } catch (err) {
                alert(err)
            }
        }
    }
    return (
        <Container className='container-momo py-4 '>
            <Row className='Row-momo  p-0 justify-content-md-center'>
                <Col md={2} className='col-momo-l py-4'>
                    <Row className='border-bottom py-2'>
                        <h5>Đơn hết hạn sau</h5>
                        <Countdown date={Date.now() + 600000} />
                    </Row>
                    <Row className='border-bottom py-2'>
                        <h5>Nhà cung cấp</h5>
                        <h5>VKTC</h5>

                    </Row>
                    <Row className='border-bottom py-2'>
                        <h5>Số tiền</h5>
                        <h5>{total}đ</h5>

                    </Row>
                    <Row className='border-bottom py-2'>
                        <h5>Đơn hàng</h5>
                        <h5>12345678</h5>
                    </Row>

                </Col>
                <Col md={6} className='col-momo-r py-4'>
                    <Row className='justify-content-md-end border-bottom pb-2'>
                        <img src={MomoLogo} style={{ width: '100px' }}></img>
                    </Row>
                    <Row className=' justify-content-md-center py-2'>
                        <h5 >Quét mã để thanh toán</h5>
                        <Card style={{ width: '60%' }} className='border-0' >
                            <Card.Img variant="top" src={MoMoQR} style={{ width: '100%' }} />
                            <Card.Body>

                                <Card.Text>
                                    Sử dụng App <b>MoMo</b> hoặc ứng dụng Camera hỗ trợ QR code để quét mã
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-center border-bottom pb-2 mt-2'>
                <Button onClick={handleConfirm} className="w-50">Thanh toán</Button>
            </Row>
        </Container>
    );
}

export default MoMo;