import { useState } from "react";
import Table from "react-bootstrap/Table";

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
  const [listHistory, setListHistory] = useState(arrayHistory);
  return (
    <div className="history-container">
      <div className="heading">LỊCH SỬ GIAO DỊCH</div>

      {listHistory && listHistory.length > 0 ? (
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>mã vé</th>
              <th>tên phim</th>
              <th>thời gian chiếu</th>
              <th>tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {listHistory.map((history) => (
              <tr key={history.id}>
                <td>{history.id}</td>
                <td>{history.firmName}</td>
                <td>{history.time}</td>
                <td>{history.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>Bạn chưa có giao dịch (đơn hàng) nào.</div>
      )}
    </div>
  );
};

export default History;
