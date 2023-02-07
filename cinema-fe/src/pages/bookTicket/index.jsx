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
function Body() {
  const [selected, setSelected] = useState([]);
  const [time, setTime] = useState(0);
  let navigate = useNavigate();
  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      { id: 5, number: "A5" },
      { id: 6, number: "A6" },
      { id: 7, number: "A7" },
      { id: 8, number: "A8" },
      null,
      { id: 9, number: "A9" },
      { id: 10, number: "A10" },
      { id: 11, number: "A11" },
      { id: 12, number: "A12" },
      { id: 13, number: "A13", isReserved: true }
    ],
    [
      { id: 11, number: "B1" },
      { id: 12, number: "B2" },
      { id: 13, number: "B3", isReserved: true },
      { id: 14, number: "B4" },
      { id: 74, number: "B5" },
      { id: 84, number: "B6" },
      { id: 34, number: "B7" },
      { id: 94, number: "B8" },
      null,
      { id: 15, number: "B9" },
      { id: 16, number: "B10" },
      { id: 17, number: "B11" },
      { id: 18, number: "B12" },
      { id: 19, number: "B13" }
    ],
    [
      { id: 21, number: "C1" },
      { id: 22, number: "C2" },
      { id: 23, number: "C3" },
      { id: 24, number: "C4" },
      { id: 29, number: "C5" },
      { id: 20, number: "C6" },
      { id: 99, number: "C7" },
      { id: 98, number: "C8" },
      null,
      { id: 25, number: "C9" },
      { id: 26, number: "C10" },
      { id: 27, number: "C11", isReserved: true },
      { id: 28, number: "C12" },
      { id: 29, number: "C13" },
      null
    ],
    [
      { id: 11, number: "D1" },
      { id: 12, number: "D2" },
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4" },
      { id: 74, number: "D5" },
      { id: 84, number: "D6" },
      { id: 34, number: "D7" },
      { id: 94, number: "D8" },
      null,
      { id: 15, number: "D9" },
      { id: 16, number: "D10" },
      { id: 17, number: "D11" },
      { id: 18, number: "D12" },
      { id: 19, number: "D13" }
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      { id: 84, number: "E6" },
      { id: 34, number: "E7" },
      { id: 94, number: "E8" },
      null,
      { id: 15, number: "E9" },
      { id: 16, number: "E10" },
      { id: 17, number: "E11" },
      { id: 18, number: "E12" },
      { id: 19, number: "E13" }
    ],
    [
      { id: 11, number: "F1" },
      { id: 12, number: "F2" },
      { id: 13, number: "F3" },
      { id: 14, number: "F4" },
      { id: 74, number: "F5" },
      { id: 84, number: "F6" },
      { id: 34, number: "F7" },
      { id: 94, number: "F8" },
      null,
      { id: 15, number: "F9" },
      { id: 16, number: "F10" },
      { id: 17, number: "F11" },
      { id: 18, number: "F12" },
      { id: 19, number: "F13" }
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      { id: 84, number: "G6" },
      { id: 34, number: "G7", isReserved: true },
      { id: 94, number: "G8" },
      null,
      { id: 15, number: "G9" },
      { id: 16, number: "G10" },
      { id: 17, number: "G11" },
      { id: 18, number: "G12" },
      { id: 19, number: "G13" }
    ]
  ];
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
          rows={rows}
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
                className="continue"
                onClick={() => navigate(`/pay/${selected}/${totalprice}`)}
              >
                continue
              </button>
            </div>
          </>
        ) : null}
      </div>
    </Container>
  );
}

export default memo(Body);
