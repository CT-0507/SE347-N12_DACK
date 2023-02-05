import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const Card = () => {
    return (
        <div className="Card-container">
            <div className="box-top">
                <div className="box-top-title">Đăng Ký Thẻ Quà Tặng</div>
                <hr />
                <div className="box-top-content">
                    <div className="left">
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Số thẻ"
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
                                "https://www.cgv.vn/skin//frontend/cgv/default/images/cgv-giftcard.png"
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="box-search">
                <div className="box-search-tile">Thẻ Quà Tặng Của Bạn</div>
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
                <hr />
            </div>
        </div>
    );
};

export default Card;
