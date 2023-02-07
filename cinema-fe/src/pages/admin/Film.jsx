
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
import FilmForm from './filmsApi/Film/FilmForm';
import { useGetFilmsQuery, useDeleteFilmMutation } from './filmsApi/filmsApiSlice';
import { selectFilmById } from "./filmsApi/filmsApiSlice"
import { useSelector } from 'react-redux';
const FilmMenu = memo(() => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [filmName, setFilmName] = useState('')
    const [directors, setDirectors] = useState('')
    const [actors, setActors] = useState('')
    const [premiereDay, setPremiereDay] = useState('')
    const [tags, setTags] = useState('')
    const [readFile, setReadFile] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [editFilmId, setEditFilmId] = useState()
    let canSave = [filmName, directors, actors, premiereDay, tags].every(item => item !== '') && readFile
    const {
        data: films,
        isSuccess,
        isLoading,
        refetch,
        isError,
        error
    } = useGetFilmsQuery("filmsList", {
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
        const { ids } = films
        items = ids?.length
        content = ids?.length
            ? ids.map((filmId, index) => <Film key={filmId} counter={index + 1} filmId={filmId} handleShowEdit={handleShowEdit} setEditFilmId={setEditFilmId} />)
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
                    <div style={{ width: "100%", overflowX: "auto" }}>
                        <Table className='user-table' striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th style={{ width: '3%' }}>STT</th>
                                    <th >ID</th>
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
                                {content}
                            </tbody>

                        </Table>
                    </div>

                    <FormGroup>
                        <Button variant="secondary" onClick={() => refetch("Film")}><i className="fa fa-refresh"></i></Button>
                        <Form.Label style={{ margin: '10px' }}>1-2 of 2 items</Form.Label>
                    </FormGroup>
                </FormGroup>
            </div>
            {show && <FilmForm handleClose={handleClose} />}
            {showEdit && <FilmForm handleClose={handleCloseEdit} filmId={editFilmId} />}
        </>
    )
})

const Film = ({ counter, filmId, handleShowEdit, setEditFilmId }) => {
    const film = useSelector(state => selectFilmById(state, filmId))
    const handleEidt = () => {
        handleShowEdit()
        setEditFilmId(filmId)
    }
    const [deleteFilm, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useDeleteFilmMutation()
    const handleDelete = async () => {
        try {
            await deleteFilm({ id: film.id })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <tr>
            <td>{counter}</td>
            <td>{film?.id}</td>
            <td>{film?.filmName}</td>
            <td>{film?.directors?.join(", ")}</td>
            <td>{film?.actors?.join(", ")}</td>
            <td>{film?.tags.join(", ")}</td>
            <td>{film?.premiereDay}</td>
            <td><FormCheckInput defaultChecked={film} disabled></FormCheckInput></td>
            <td>
                <FormGroup className='btn-action'>
                    <Button variant="secondary" onClick={() => handleEidt()}><i className="fa fa-pencil"></i>Sửa</Button>
                    <Button variant="danger" onClick={handleDelete}><i className="fa fa-trash"></i>Xóa</Button>
                </FormGroup>
            </td>
        </tr>
    )
}

export default FilmMenu