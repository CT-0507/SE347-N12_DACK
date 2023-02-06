import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const Card = () => {
  return (
    <div className="point-container">
      <div className="heading">THẺ THÀNH VIÊN</div>

      <div className="box-top">
        <div className="box-top-title">Tổng Quát</div>
        <div className="box-top-content">
          <div className="left">
            <div className="text-center w-100">
              Cấp Độ Thẻ: <b>Member</b>
            </div>
            <div style={{ color: "#7f7f7f" }}>
              Bạn muốn đăng ký thẻ thành viên?
            </div>
            <Form className="mt-4">
              <FloatingLabel label="số thẻ" className="mb-3">
                <Form.Control type="text" placeholder="value" />
              </FloatingLabel>
              <FloatingLabel label="xác nhận số thẻ" className="mb-3">
                <Form.Control type="text" placeholder="value" />
              </FloatingLabel>
              <div className="btn btn-primary">Đăng Kí</div>
            </Form>
          </div>
          <div className="right">
            <img
              src={
                "https://www.cgv.vn/skin//frontend/cgv/default/images/popcorn-member.png"
              }
            />
          </div>{" "}
        </div>
        <div className="manage-card">
          <div className="my-4" style={{ fontWeight: "bold" }}>
            Quản Lý Thẻ
          </div>
          <hr />
          <Table hover bordered>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Tên thẻ </th>
                <th>Số thẻ </th>
                <th>Ngày đăng ký</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <input class="form-check-input" type="checkbox" checked />
                </td>
                <td>Mobile Card</td>
                <td>9992-3855-1339-2592</td>
                <td>03/02/2023</td>
              </tr>
            </tbody>
          </Table>
          <div className="btn btn-warning">Mất thẻ</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
