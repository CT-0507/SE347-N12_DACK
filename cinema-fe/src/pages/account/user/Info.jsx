import { useEffect } from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Info = () => {
  const userId = 1;
  const userInfFake = {
    name: "abc",
    city: "Hai Phong",
    address: "Thu duc",
    phone: "09xxxx",
    brith: "12/12/2022",
    email: "abc@gmail.com",
    codeMember: "abc",
    prefersite: "thu duc",
  };
  const [userInf, setUserInf] = useState(null);
  useEffect(() => {
    userfetch();
  }, [userId]);
  const userfetch = () => {
    setUserInf({
      ...userInfFake,
      oldPassword: "",
      changePassword: false,
      newPassword: "",
      reNewPassword: "",
    });
  };
  return (
    userInf && (
      <div className="Info-container">
        <div className="heading">THAY ĐỔI THÔNG TIN</div>

        <Form className="form">
          <Form.Group className="mb-3 form-group ">
            <FloatingLabel label="Tên" className="mb-3 w-100">
              <Form.Control
                type="text"
                placeholder="text"
                value={userInf.name}
                onChange={(e) => {
                  setUserInf({
                    ...userInf,
                    name: e.target.value,
                  });
                }}
              />
            </FloatingLabel>
            <FloatingLabel label="Thành phố/Tỉnh" className="mb-3 w-100">
              <Form.Select
                style={{
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <option checked value="1">
                  Hai Phong
                </option>
                <option value="2">HCM</option>
                <option value="3">Da Nang</option>
                <option value="4">Ha Noi</option>
              </Form.Select>{" "}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 form-group ">
            <FloatingLabel label="Điện thoại" className="mb-3 w-100">
              <Form.Control
                type="text"
                placeholder="text"
                value={userInf.phone}
                onChange={(e) => {
                  setUserInf({
                    ...userInf,
                    phone: e.target.value,
                  });
                }}
              />
            </FloatingLabel>

            <FloatingLabel label="Mật khẩu cũ" className="mb-3 w-100">
              <Form.Control
                type="password"
                placeholder="text"
                value={userInf.oldPassword}
                onChange={(e) => {
                  setUserInf({
                    ...userInf,
                    oldPassword: e.target.value,
                  });
                }}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 form-group ">
            <FloatingLabel label="Địa chỉ" className="mb-3 w-100">
              <Form.Control
                type="text"
                placeholder="text"
                value={userInf.address}
                onChange={(e) => {
                  setUserInf({
                    ...userInf,
                    address: e.target.value,
                  });
                }}
              />
            </FloatingLabel>
          </Form.Group>
          <div className="group-inf">
            <div className="inf-title">Ngày Sinh</div>
            <div className="inf-value">{userInf.brith}</div>
          </div>
          <div className="group-inf">
            <div className="inf-title">Địa chỉ email</div>
            <div className="inf-value">{userInf.email}</div>
          </div>
          <Form.Check
            className="mb-8"
            type={"checkbox"}
            label={"Tôi muốn thay đổi mật khẩu"}
            checked={userInf.changePassword}
            onChange={(e) => {
              setUserInf({
                ...userInf,
                changePassword: e.target.checked,
              });
            }}
          />
          {userInf.changePassword && (
            <Form.Group className="mb-3 form-group ">
              <FloatingLabel label="Mật khẩu mới" className="mb-3 w-100">
                <Form.Control
                  type="text"
                  placeholder="text"
                  value={userInf.newPassword}
                  onChange={(e) => {
                    setUserInf({
                      ...userInf,
                      newPassword: e.target.value,
                    });
                  }}
                />
              </FloatingLabel>
              <FloatingLabel
                label="Nhập lại mật khẩu mới"
                className="mb-3 w-100"
              >
                <Form.Control
                  type="password"
                  placeholder="text"
                  value={userInf.reNewPassword}
                  onChange={(e) => {
                    setUserInf({
                      ...userInf,
                      reNewPassword: e.target.value,
                    });
                  }}
                />
              </FloatingLabel>
            </Form.Group>
          )}
        </Form>
        <div className="infor-optional">
          <div className="title">Thông Tin Tùy Chọn</div>
          <hr />
          <div className="group-inf">
            <div className="inf-title">Số thẻ thành viên</div>
            <div className="inf-value">{userInf.codeMember}</div>
          </div>
          <Form className="form">
            <FloatingLabel label="Rạp yêu thích" className="mb-3">
              <Form.Select
                aria-label="Default select example"
                style={{
                  display: "inline-block",
                  width: "200px",
                }}
              >
                <option></option>
                <option defaultValue value="1">
                  CGV Hai Phong
                </option>
                <option value="2" checked>
                  CGV HCM
                </option>
                <option value="3">CGV Da Nang</option>
                <option value="4">CGV Ha Noi</option>
              </Form.Select>
            </FloatingLabel>
          </Form>
        </div>
        <span
          className="btn-submit"
          onClick={() => {
            console.log(userInf);
          }}
        >
          lưu lại
        </span>
      </div>
    )
  );
};

export default Info;
