import { useState, memo } from 'react'
import './adminLayout.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom"
import './adminLayout.css'
import useAuth from '../../../hooks/useAuth'
import { useSendLogoutMutation } from '../../../pages/account/authApiSlice'
const AdminHeader = memo(() => {
    const { pathname } = useLocation()
    // const p
    const [currentPath, setCurrentPath] = useState()
    const { name } = useAuth()
    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()
    return (
        <>
            <div className="container-header">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Admin</a>
                    </div>
                    <div className="container justify-content-start p-0 me-auto">
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" style={{ minWidth: "100px", maxWidth: "200px" }} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                    <Nav id="user-info" className='flex-nowrap me-auto' style={{ width: "500px" }}>
                        <Nav.Link as={Link} style={{ paddingLeft: 0, paddingRight: 0, minWidth: 'fit-content' }} className="me-2" to="account/user">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span>{name}</span>
                        </Nav.Link>
                        <Nav.Link disabled={isLoading} className="w-25" as={Link} style={{ paddingLeft: 0, paddingRight: 0 }} onClick={sendLogout} to='/admin'>
                            {isLoading ? <Spinner /> : <i className="fa fa-sign-out" aria-hidden="true" />}
                        </Nav.Link>
                    </Nav>
                </nav>
            </div>

        </>
    )
})

export default AdminHeader