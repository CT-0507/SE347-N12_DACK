import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import SeatPicker from "react-seat-picker";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, useParams } from 'react-router-dom';
// import Final from "./Final";
import ButtonTicket from '../../components/button/ButtonTicket'
import "./Seats.css";
import { useSelector } from "react-redux";
import { selectPremiereSlotById, selectSlotsOption } from "../admin/premiereSlotsApi/premiereSlotsApiSlice";
function Body({ slotId }) {
  const [selected, setSelected] = useState([]);
  const premiereSlot = useSelector(state => selectPremiereSlotById(state, slotId))
  console.log(slotId)
  console.log(premiereSlot)
  const [time, setTime] = useState(0);
  let navigate = useNavigate();
  const rows = premiereSlot?.seatStatus
  const price = 50000;
  const totalprice = price * selected.length;
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const TongGia = VND.format(totalprice);
  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = ``;
    addCb(row, number, id, newTooltip);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  if (premiereSlot) {
    return (
      <Container className='px-0 pb-4 container-seats'>
        <div className=' ps-2 header-bookticket'>
          <h1>Đặt vé</h1>
        </div>
        <div className="seats">
          <div className="my-4">
            <h2>-----Màn Hình----</h2>

          </div>

          <SeatPicker
            addSeatCallback={addSeatCallback}
            removeSeatCallback={removeSeatCallback}
            rows={premiereSlot?.seatStatus ?? rows}
            alpha
            maxReservableSeats={10}
            visible
          />
          {selected.length !== 0 ? (
            <>
              <Row className="mt-4 pt-2 show-price">
                <Col md={8} className="">
                  <h3 className="">Ghế đã chọn:{selected.toString()}</h3>
                </Col>
                <Col md={4} className="">
                  <h3 className="">
                    Tổng tiền:
                    {TongGia}
                  </h3>
                </Col>
              </Row>
              <div className='mt-4 pb-4'>
                <button
                  className="seat-continue p-2"
                  onClick={() => navigate(`/pay?slotId=${slotId}&selected=${selected}&total=${totalprice}`)}
                >
                  Tiếp tục
                </button>
              </div>
            </>
          ) : null}
        </div>
      </Container>
    );
  }
}

export default memo(Body);
