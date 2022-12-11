import React from 'react'
import Form from 'react-bootstrap/Form'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useRef, memo } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
const FilmMenu = memo(() => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <FormGroup className='top-main'>
                    <FormLabel className='main-name'>
                        Danh sách phim
                    </FormLabel>
                    <Button className='btn-create' onClick={handleShow}>
                        <i className="fa fa-plus-square-o" style={{ margin: '5px' }}></i>
                        Thêm phim
                    </Button>
                </FormGroup>
                <FormGroup className='table-main'>
                    <Form className='search-user'>
                        <InputGroup className="mb-3">
                            <Button variant="primary" id="button-addon1">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    <Table className='user-table' striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }}>STT</th>
                                <th style={{ width: '15%' }}>Tên phim</th>
                                <th style={{ width: '10%' }}>Đạo diễn</th>
                                <th style={{ width: '25%' }}>Diễn viên</th>
                                <th style={{ width: '16%' }}>Thể loại</th>
                                <th style={{ width: '8%' }}>Khởi chiếu</th>
                                <th style={{ width: '8%' }}>Trạng thái</th>
                                <th style={{ width: '15%' }}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Âm lượng hủy diệt</td>
                                <td>Hwang In-Ho</td>
                                <td>Kim Rae Won, Lee Jong Suk, Park Byung Eun, Jung Sang Hoon, Cha Eun Woo</td>
                                <td>Hành Động, Hồi hộp </td>
                                <td>09/12/2022</td>
                                <td><FormCheckInput checked={true}></FormCheckInput></td>
                                <td>
                                    <FormGroup className='btn-action'>
                                        <Button variant="secondary"><i className="fa fa-pencil"></i>Sửa</Button>
                                        <Button variant="danger"><i className="fa fa-trash"></i>Xóa</Button>
                                    </FormGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hung thủ vô hình</td>
                                <td>Yoon Jong-Seok</td>
                                <td>So Ji-Sub, Kim Yu- jin, Nana, Choi Kwang-Il</td>
                                <td>Tâm Lý, Tội phạm</td>
                                <td>09/12/2022</td>
                                <td><FormCheckInput checked={true}></FormCheckInput></td>
                                <td>
                                    <FormGroup className='btn-action'>
                                        <Button variant="secondary"><i className="fa fa-pencil"></i>Sửa</Button>
                                        <Button variant="danger"><i className="fa fa-trash"></i>Xóa</Button>
                                    </FormGroup>
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                    <FormGroup>
                        <Button variant="secondary"><i class="fa fa-refresh"></i></Button>
                        <Form.Label style={{ margin: '10px' }}>1-2 of 2 items</Form.Label>
                    </FormGroup>
                </FormGroup>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm phim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} for="inputFilmName" className="col-sm-2 col-form-label">Tên phim<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputFilmName" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} for="inputDirector" className="col-sm-2 col-form-label">Đạo diễn</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputDirector" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} for="inputActor" className="col-sm-2 col-form-label">Diễn viên</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputActor" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} for="inputTypeFilm" className="col-sm-2 col-form-label">Thể loại</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputTypeFilm" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} for="inputPremere" className="col-sm-2 col-form-label">Ngày công chiếu<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <input type="text" className="form-control" id="inputPremere" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label style={{ width: '30%' }} for="inputStatus" className="col-sm-2 col-form-label">Trạng thái kích hoạt</label>
                        <div style={{ width: '70%' }} className="col-sm-10">
                            <FormCheckInput checked={true}></FormCheckInput>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lưu người dùng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
})
export default FilmMenu