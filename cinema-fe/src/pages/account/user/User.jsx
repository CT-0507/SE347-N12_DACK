const user = () => {
    return (
        <div className="user-container">
            <div className="d-flex justify-content-between">
                <div className="w-70 profile">
                    <img
                        className="rounded-circle"
                        src={
                            "https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png"
                        }
                    />
                    <div className="btn-change">Thay đổi</div>
                </div>
                <div className="w-30 qr">
                    <div className="title">Thẻ thành viên</div>
                    <img
                        src={
                            "https://www.barcodesinc.com/generator/image.php?code=9992385513392592&style=196&type=C128B&width=220&height=80&xres=1&font=3"
                        }
                    />
                </div>
            </div>
            <div>Xin chào Khang,</div>
            <span style={{ color: "#7f7f7f" }}>
                Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản
                của mình.
            </span>
            <div className="box-inf">
                <div className="title">Thông tin tài khoản</div>
                <hr />

                <span>Tên : Khang</span>
                <span>Email : abc@gmail.com</span>
                <span>Tên đăng nhập : username</span>
                <span>Điện thoại : 0123345</span>
            </div>
        </div>
    );
};

export default user;
