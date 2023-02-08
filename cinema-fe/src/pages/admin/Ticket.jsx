import { memo, useCallback, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import { selectTicketById, useDeleteTicketMutation, useGetTicketsQuery } from './ticket/ticketsApiSlice';

const TicketMenu = memo(() => {
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const handleShow = () => setShow(true)
    const [editTicketId, setEditTicketId] = useState()
    const {
        data: tickets,
        isSuccess,
        isLoading,
        isError,
        refetch,
        error
    } = useGetTicketsQuery("ticketsList", {
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
        console.log(tickets)
        const { ids } = tickets
        items = ids?.length
        content = ids?.length
            ? ids.map((ticketId, index) => <Ticket key={ticketId} counter={index + 1} ticketId={ticketId} handleShowEdit={handleShowEdit} setEditTicketId={setEditTicketId} />)
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
                    Danh sách các vé
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
                                <th>Tên người dùng</th>
                                <th>Tên phim</th>
                                <th>Ngày</th>
                                <th>Thời gian</th>
                                <th>Tên rạp</th>
                                <th>Mã phòng</th>
                                <th>Số ghế</th>
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
            {/* {show && <TicketForm handleClose={handleClose} />}
            {showEdit && <TicketForm handleClose={handleCloseEdit} premiereSlotId={editSlotId} />} */}
        </>
    )
})
export default TicketMenu

const Ticket = memo(({ counter, ticketId, handleShowEdit, setEditTicketId }) => {
    const ticket = useSelector(state => selectTicketById(state, ticketId))
    const handleEdit = () => {
        handleShowEdit()
        setEditTicketId(ticketId)
    }
    console.log(ticket)
    const [deleteTicket, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useDeleteTicketMutation()
    const handleDelete = async () => {
        try {
            await deleteTicket({ id: ticket.id })
            if (isError) console.log(error)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <tr>
            <td>{counter}</td>
            <td>{ticket?.userId?.username}</td>
            <td>{ticket?.filmId?.filmName}</td>
            <td>{ticket?.slotId?.date}</td>
            <td>{ticket?.slotId?.time}</td>
            <td>{ticket?.cinema?.cinemaName}</td>
            <td>{ticket?.slotId?.room}</td>
            <td>{ticket?.seats.join(",")}</td>
            <td>
                <FormGroup className='btn-action'>
                    <Button variant="secondary" onClick={handleEdit}><i className="fa fa-pencil"></i>Sửa</Button>
                    <Button variant="danger" onClick={handleDelete}><i className="fa fa-trash"></i>Xóa</Button>
                </FormGroup>
            </td>
        </tr>
    )
})