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
const UserMenu = memo(() => {
    const [show, setShow] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Form>
                <FormGroup className='top-main'>
                    <FormLabel className='main-name'>
                        Danh sách người dùng
                    </FormLabel>
                    <Button className='btn-create' onClick={handleShow}>
                        <i class="fa fa-plus-square-o" style={{margin:'5px'}}></i>
                        Thêm
                    </Button>
                </FormGroup>
                <FormGroup  className='table-main'>
                    <Form className='search-user'>
                        <InputGroup className="mb-3">
                            <Button variant="primary" id="button-addon1">
                            <i class="fa fa-search" aria-hidden="true"></i>
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
                                <th>STT</th>
                                <th>Tên đăng nhập</th>
                                <th>Tên người dùng</th>
                                <th>Email</th>
                                <th>Trạng thái kích hoạt</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>admin</td>
                                <td>Trần Quốc Cường</td>
                                <td>19521302@gm.uit.edu.vn</td>
                                <td>
                                    <FormCheckInput checked='true'></FormCheckInput>
                                </td>
                                <td>
                                    <FormGroup className='btn-action'>
                                        <Button variant="secondary"><i class="fa fa-pencil"></i>Sửa</Button>
                                        <Button variant="danger"><i class="fa fa-trash"></i>Xóa</Button>
                                    </FormGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>tuanhd</td>
                                <td>Hồ Đình Tuấn</td>
                                <td>19522464@gm.uit.edu.vn</td>
                                <td>
                                    <FormCheckInput checked='true'></FormCheckInput>
                                </td>
                                <td>
                                    <FormGroup className='btn-action'>
                                        <Button variant="secondary"><i class="fa fa-pencil"></i>Sửa</Button>
                                        <Button variant="danger"><i class="fa fa-trash"></i>Xóa</Button>
                                    </FormGroup>
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                    <FormGroup>
                        <Button variant="secondary"><i class="fa fa-refresh"></i></Button>
                        <Form.Label style={{margin:'10px'}}>1-2 of 2 items</Form.Label>
                    </FormGroup>
                </FormGroup>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="mb-3 row">
                        <label style={{width:'30%'}} for="inputUserName" class="col-sm-2 col-form-label">Tên đăng nhập<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></label>
                        <div style={{width:'70%'}} class="col-sm-10">
                        <input type="text" class="form-control" id="inputUserName"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label style={{width:'30%'}} for="inputFullName" class="col-sm-2 col-form-label">Tên người dùng<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></label>
                        <div style={{width:'70%'}} class="col-sm-10">
                        <input type="text" class="form-control" id="inputFullName"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label style={{width:'30%'}} for="inputEmail" class="col-sm-2 col-form-label">Email<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></label>
                        <div style={{width:'70%'}} class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label style={{width:'30%'}} for="inputPassword" class="col-sm-2 col-form-label">Mật khẩu<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></label>
                        <div style={{width:'70%'}} class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label style={{width:'30%'}} for="inputConfirmPassword" class="col-sm-2 col-form-label">Xác nhận mật khẩu<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></label>
                        <div style={{width:'70%'}} class="col-sm-10">
                        <input type="password" class="form-control" id="inputConfirmPassword"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label style={{width:'30%'}} for="inputStatus" class="col-sm-2 col-form-label">Trạng thái kích hoạt</label>
                        <div style={{width:'70%'}} class="col-sm-10">
                            <FormCheckInput checked='true'></FormCheckInput>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button  variant="primary" onClick={handleClose}>
                        Lưu người dùng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
})
export default UserMenu