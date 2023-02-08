import { memo, useCallback, useState } from 'react'
import { selectPremiereSlotById, useDeletePremiereSlotMutation, useGetPremiereSlotsQuery } from './premiereSlotsApi/premiereSlotsApiSlice';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import PremiereSlotForm from './premiereSlotsApi/PremiereSlot/PremiereForm';
const PremiereSlotMenu = memo(() => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false)
    const handleShow = () => setShow(true)
    const [editSlotId, setEditSlotId] = useState()
    const {
        data: premiereSlots,
        isSuccess,
        isLoading,
        refetch,
        isError,
        error
    } = useGetPremiereSlotsQuery("premiereSlotsList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
    })
    const handleShowEdit = useCallback(() => {
        setShowEdit(true)
    }, [setShowEdit])
    let content
    if (isLoading) content = <tr><td colSpan={100}><Spinner /></td></tr>
    if (isError) content = <tr><td colSpan={100} className="text-center">{error?.data?.message}</td></tr>
    let items = 0
    if (isSuccess) {
        const { ids } = premiereSlots
        items = ids?.length
        content = ids?.length
            ? ids.map((premiereSlotId, index) => <PremiereSlot key={premiereSlotId} counter={index + 1} premiereSlotId={premiereSlotId} handleShowEdit={handleShowEdit} setEditSlotId={setEditSlotId} />)
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
                    Danh sách các suất chiếu
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
                <div style={{ width: "100%", overflowX: "auto" }}>
                    <Table className='user-table' striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Phim</th>
                                <th>Ngày</th>
                                <th>Thời gian</th>
                                <th>Tên rạp</th>
                                <th>Mã phòng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>

                    </Table>
                </div>
                <FormGroup>
                    <Button variant="secondary" onClick={e => refetch('User')} disabled={isLoading}>{isLoading ? <Spinner /> : <i className="fa fa-refresh"></i>}</Button>
                    <Form.Label style={{ margin: '10px' }}>1-2 of {items} items</Form.Label>
                </FormGroup>
            </FormGroup>
            {show && <PremiereSlotForm handleClose={handleClose} />}
            {showEdit && <PremiereSlotForm handleClose={handleCloseEdit} premiereSlotId={editSlotId} />}
        </>
    )
})
export default PremiereSlotMenu

const PremiereSlot = memo(({ counter, premiereSlotId, handleShowEdit, setEditSlotId }) => {
    const premiereSlot = useSelector(state => selectPremiereSlotById(state, premiereSlotId))
    const handleEdit = () => {
        handleShowEdit()
        setEditSlotId(premiereSlotId)
    }
    console.log(premiereSlot)
    const [deletePremiereSlot, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useDeletePremiereSlotMutation()
    const handleDelete = async () => {
        try {
            await deletePremiereSlot({ id: premiereSlot.id })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <tr>
            <td>{counter}</td>
            <td>{premiereSlot?.filmId?.filmName}</td>
            <td>{premiereSlot?.date}</td>
            <td>{premiereSlot?.time}</td>
            <td>{premiereSlot?.cinema?.cinemaName}</td>
            <td>{premiereSlot?.room}</td>
            <td>
                <FormGroup className='btn-action'>
                    <Button variant="secondary" onClick={handleEdit}><i className="fa fa-pencil"></i>Sửa</Button>
                    <Button variant="danger" onClick={handleDelete}><i className="fa fa-trash"></i>Xóa</Button>
                </FormGroup>
            </td>
        </tr>
    )
})