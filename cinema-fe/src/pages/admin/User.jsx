import React, { useCallback } from 'react'
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

import { selectUserById, useDeleteUserMutation, useGetUsersQuery } from './usersApi/usersApiSlice';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import UserForm from './usersApi/User/UserForm';
const UserMenu = memo(() => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false)
    const handleShow = () => setShow(true);
    const [editUserId, setEditUserId] = useState()
    const {
        data: users,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetUsersQuery("usersList", {
        pollingInterval: 15000,
        refetchOnFocus: true,

    })
    const handleShowEdit = useCallback(() => {
        setShowEdit(true)
    }, [setShowEdit])
    let content
    if (isLoading) content = <tr><td colSpan={100}><Spinner /></td></tr>
    if (isError) content = <tr><td colSpan={100}>{error?.data?.message}</td></tr>
    let items = 0
    if (isSuccess) {
        console.log(users)
        const { ids } = users
        items = ids?.length
        content = ids?.length
            ? ids.map((userId, index) => <User key={userId} counter={index + 1} userId={userId} handleShowEdit={handleShowEdit} setEditUserId={setEditUserId} />)
            : null
    }

    const handleClose = useCallback(() => {
        setShow(false)
    }, [setShow])
    const handleCloseEdit = useCallback(() => {
        setShowEdit(false)
    }, [setShowEdit])
    return (
        <>
            <FormGroup className='top-main'>
                <FormLabel className='main-name'>
                    Danh sách người dùng
                </FormLabel>
                <Button className='btn-create' onClick={handleShow}>
                    <i className="fa fa-plus-square-o" style={{ margin: '5px' }}></i>
                    Thêm
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
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Trạng thái kích hoạt</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                                <td>1</td>
                                <td>admin</td>
                                <td>Trần Quốc Cường</td>
                                <td>19521302@gm.uit.edu.vn</td>
                                <td>
                                    <FormCheckInput checked={true}></FormCheckInput>
                                </td>
                                <td>
                                    <FormGroup className='btn-action'>
                                        <Button variant="secondary"><i className="fa fa-pencil"></i>Sửa</Button>
                                        <Button variant="danger"><i className="fa fa-trash"></i>Xóa</Button>
                                    </FormGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>tuanhd</td>
                                <td>Hồ Đình Tuấn</td>
                                <td>19522464@gm.uit.edu.vn</td>
                                <td>
                                    <FormCheckInput checked={true}></FormCheckInput>
                                </td>
                                <td>
                                    <FormGroup className='btn-action'>
                                        <Button variant="secondary"><i className="fa fa-pencil"></i>Sửa</Button>
                                        <Button variant="danger"><i className="fa fa-trash"></i>Xóa</Button>
                                    </FormGroup>
                                </td>
                            </tr> */}
                        {content}
                    </tbody>

                </Table>
                <FormGroup>
                    <Button variant="secondary"><i className="fa fa-refresh"></i></Button>
                    <Form.Label style={{ margin: '10px' }}>1-2 of {items} items</Form.Label>
                </FormGroup>
            </FormGroup>
            {show && <UserForm handleClose={handleClose} />}
            {showEdit && <UserForm handleClose={handleCloseEdit} userId={editUserId} />}
        </>
    )
})
export default UserMenu

const User = ({ counter, userId, handleShowEdit, setEditUserId }) => {
    const user = useSelector(state => selectUserById(state, userId))
    const handleEidt = () => {
        handleShowEdit()
        setEditUserId(userId)
    }
    const [deleteUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useDeleteUserMutation()
    const handleDelete = async () => {
        try {
            await deleteUser({ id: user.id })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <tr>
            <td>{counter}</td>
            <td>{user?.name}</td>
            <td>{user?.username}</td>
            <td>{user?.email}</td>
            <td>{user?.roles.toString().replaceAll(',', ', ')}</td>
            <td>
                <FormCheckInput defaultChecked={user?.active} disabled={true}></FormCheckInput>
            </td>
            <td>
                <FormGroup className='btn-action'>
                    <Button variant="secondary" onClick={handleEidt}><i className="fa fa-pencil"></i>Sửa</Button>
                    <Button variant="danger" onClick={handleDelete}><i className="fa fa-trash"></i>Xóa</Button>
                </FormGroup>
            </td>
        </tr>
    )
}