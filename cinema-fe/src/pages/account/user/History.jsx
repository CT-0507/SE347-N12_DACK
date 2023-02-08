import { useState, useMemo } from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import { selectTicketByUserId, useGetTicketsQuery } from "../../admin/ticket/ticketsApiSlice";

const History = () => {
  const arrayHistory = [
    {
      id: 1,
      firmName: "Xác Ướp: Cuộc Phiêu Lưu Đến London",
      time: "02/06/2023 14:30",
      total: 120,
    },
    {
      id: 2,
      firmName: "Chuyến Đi Đáng Nhớ",
      time: "02/10/2023 18:00",
      total: 150,
    },
    {
      id: 3,
      firmName: "Quý Ông Số Đỏ",
      time: "02/16/2023 9:30",
      total: 90,
    },
  ];
  // const {
  //   data: tickets,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   refetch,
  //   error
  // } = useGetTicketsQuery("ticketsList", {
  //   pollingInterval: 60000,
  //   refetchOnFocus: true
  // })
  const user = useAuth()
  const userTicket = useSelector(state => selectTicketByUserId(state, user.id))
  const total = useMemo(() => {
    let price = 0
    userTicket.forEach((ticket) => {
      price += ticket.total
    })
    return price
  })
  console.log(userTicket)
  return (
    <div className="history-container">
      <div className="heading">LỊCH SỬ GIAO DỊCH</div>

      {userTicket && userTicket.length > 0 ? (
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Mã vé</th>
              <th>Tên phim</th>
              <th>Rạp</th>
              <th>Mã ghế</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {userTicket.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>
                <td>{ticket?.filmId?.filmName}</td>
                <td>{ticket?.cinema?.cinemaName}</td>
                <td>{ticket?.seats}</td>
                <td>{ticket?.total}   VND</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng cộng:</td>
              <td colSpan={4} style={{ textAlign: "end" }}>{total}  VND</td>
            </tr>
          </tfoot>
        </Table>
      ) : (
        <div>Bạn chưa có giao dịch (đơn hàng) nào.</div>
      )}
    </div>
  );
};

export default History;
