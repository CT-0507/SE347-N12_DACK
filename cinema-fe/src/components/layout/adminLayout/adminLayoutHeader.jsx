import { useState, memo } from 'react'
import './adminLayout.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom"
import './adminLayout.css'
const AdminHeader = memo(() => {
    const { pathname } = useLocation()
    // const p
    const [currentPath, setCurrentPath] = useState()

    return (
        <>
            <div className="container-header">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid" style={{ float: 'left', width: '70%' }}>
                        <a className="navbar-brand" href="#">Admin</a>
                    </div>
                    <div className="container-fluid" style={{ float: 'right', width: '30%' }}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </nav>
            </div>

        </>
    )
})

export default AdminHeader