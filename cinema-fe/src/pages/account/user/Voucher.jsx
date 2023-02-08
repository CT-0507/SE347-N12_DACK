import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const Voucher = () => {
    return (
        <div className="voucher-container">
            <div className="box-top">
                <div className="box-top-title">Đăng Ký Thẻ Voucher</div>
                <hr />
                <div className="box-top-content">
                    <div className="left">
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Số voucher"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="123" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Mã Pin"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="123" />
                            </FloatingLabel>
                            <Button>Đăng kí</Button>
                        </Form>
                    </div>
                    <div className="right">
                        <img
                            src={
                                "https://www.cgv.vn/skin//frontend/cgv/default/images/cgv-point.jpg"
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="box-search">
                <div className="box-search-tile">Voucher Của Bạn</div>
                <hr />
                <div className="box-search-content">
                    <div className="box-search-item title">tìm nhanh</div>
                    <div className="box-search-item btn-search-fast">
                        1 tuần
                    </div>
                    <div className="box-search-item btn-search-fast">
                        1 tháng{" "}
                    </div>
                    <div className="box-search-item btn-search-fast">
                        3 tháng{" "}
                    </div>
                    <div className="box-search-item date">
                        <input type={"date"} />
                        <span style={{ padding: "0 4px" }}>~</span>
                        <input type={"date"} />
                    </div>
                    <div className="box-search-item btn-search">Tìm kiếm</div>
                </div>
                <div className="more">
                    <div className="more-item-l">
                        <span>Tên phim</span>
                        <span>Bắp nước</span>
                    </div>
                    <div className="more-item-r">
                        <Form className="form">
                            <Form.Select
                                aria-label="Default select example"
                                style={{
                                    display: "inline-block",
                                    width: "160px",
                                }}
                            >
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form>
                        <span>Tìm Kiếm</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voucher;
