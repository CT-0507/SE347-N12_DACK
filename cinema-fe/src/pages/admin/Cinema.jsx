
import Form from 'react-bootstrap/Form'
import 'react-toastify/dist/ReactToastify.css';
import { useState, memo, useCallback } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import InputGroup from 'react-bootstrap/InputGroup';

import CinemaForm from './cinemasApi/Cinema/CinemaForm';
import { useGetCinemasQuery, useDeleteCinemaMutation } from './cinemasApi/cinemasApiSlice';
import { selectCinemaById } from "./cinemasApi/cinemasApiSlice"

import { useSelector } from 'react-redux';
const CinemaMenu = memo(() => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [readFile, setReadFile] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [editCinemaId, setEditCinemaId] = useState()
    const {
        data: cinemas,
        isSuccess,
        isLoading,
        refetch,
        isError,
        error
    } = useGetCinemasQuery("cinemasList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
    })
    let content
    if (isLoading) content = <tr><td colSpan={100}><Spinner /></td></tr>
    if (isError) content = <tr><td colSpan={100}>{error?.data?.message}</td></tr>
    let items = 0
    const handleShowEdit = useCallback(() => {
        setShowEdit(true)
    }, [setShowEdit])
    if (isSuccess) {
        const { ids } = cinemas
        items = ids?.length
        content = ids?.length
            ? ids.map((cinemaId, index) => <Cinema key={cinemaId} counter={index + 1} cinemaId={cinemaId} handleShowEdit={handleShowEdit} setEditCinemaId={setEditCinemaId} />)
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
            <div>
                <FormGroup className='top-main'>
                    <FormLabel className='main-name'>
                        Danh sách rạp
                    </FormLabel>
                    <Button className='btn-create' onClick={handleShow}>
                        <i className="fa fa-plus-square-o" style={{ margin: '5px' }}></i>
                        Thêm rạp
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
                    <div style={{ width: "100%", overflowX: "auto" }}>
                        <Table className='user-table' striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th style={{ width: '3%' }}>STT</th>
                                    <th style={{ width: '3%' }}>ID</th>
                                    <th style={{ width: '15%' }}>Tên rạp</th>
                                    <th style={{ width: '10%' }}>Địa chỉ</th>
                                    <th style={{ width: '25%' }}>Mô tả</th>
                                    <th style={{ width: '8%' }}>Phòng</th>
                                    <th style={{ width: '8%' }}>Hình ảnh</th>
                                    <th style={{ width: '8%' }}>Trạng thái</th>
                                    <th style={{ width: '15%' }}>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content}
                            </tbody>

                        </Table>
                    </div>
                    <FormGroup>
                        <Button variant="secondary" onClick={() => refetch("Cinema")}><i className="fa fa-refresh"></i></Button>
                        <Form.Label style={{ margin: '10px' }}>1-2 of {`${items}`} items</Form.Label>
                    </FormGroup>
                </FormGroup>
            </div>
            {show && <CinemaForm handleClose={handleClose} />}
            {showEdit && <CinemaForm handleClose={handleCloseEdit} cinemaId={editCinemaId} />}
        </>
    )
})

const Cinema = ({ counter, cinemaId, handleShowEdit, setEditCinemaId }) => {
    const cinema = useSelector(state => selectCinemaById(state, cinemaId))
    const handleEidt = () => {
        handleShowEdit()
        setEditCinemaId(cinemaId)
    }
    const [deleteCinema, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useDeleteCinemaMutation()
    const handleDelete = async () => {
        try {
            await deleteCinema({ id: cinemaId })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <tr>
            <td>{counter}</td>
            <td>{cinema?.id}</td>
            <td>{cinema?.cinemaName}</td>
            <td>{cinema?.location}</td>
            <td>{cinema?.description}</td>
            <td>{cinema?.rooms}</td>
            <td>{cinema?.cinemaPicture.join(" ")}</td>
            <td><FormCheckInput defaultChecked={cinema} disabled></FormCheckInput></td>
            <td>
                <FormGroup className='btn-action'>
                    <Button variant="secondary" onClick={() => handleEidt()}><i className="fa fa-pencil"></i>Sửa</Button>
                    <Button variant="danger" onClick={handleDelete}><i className="fa fa-trash"></i>Xóa</Button>
                </FormGroup>
            </td>
        </tr>
    )
}

export default CinemaMenu