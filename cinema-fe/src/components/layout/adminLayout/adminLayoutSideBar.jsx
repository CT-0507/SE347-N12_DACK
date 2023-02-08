import { useState, memo } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useNavigate, useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
const AdminSidebar = memo(() => {
    const { pathname } = useLocation()
    // const p
    const [currentPath, setCurrentPath] = useState()
    return (
        <>
            <Nav className="sidebar-item">
                <Nav.Link className='w-100 btn' style={pathname.includes('user') ? { backgroundColor: 'white', color: '#555', marginLeft: '8px', marginRight: '8px' } : null} as={Link} to='user'><i className="fa fa-fw fa-user"></i>{"Người dùng"}</Nav.Link>
                <Nav.Link className='w-100 btn' style={pathname.includes('film') ? { backgroundColor: 'white', color: '#555', marginLeft: '8px', marginRight: '8px' } : null} as={Link} to='film'><i className="fa fa-file-video-o"></i>{"Phim công chiếu"}</Nav.Link>
                <Nav.Link className='w-100 btn' style={pathname.includes('cinema') ? { backgroundColor: 'white', color: '#555', marginLeft: '8px', marginRight: '8px' } : null} as={Link} to='cinema'><i className="fa fa-film"></i>Rạp phim</Nav.Link>
                <Nav.Link className='w-100 btn' style={pathname.includes('premiere-slot') ? { backgroundColor: 'white', color: '#555', marginLeft: '8px', marginRight: '8px' } : null} as={Link} to='premiere-slot'><i className="fa fa-clock-o"></i>Suất chiếu</Nav.Link>
                <Nav.Link className='w-100 btn' style={pathname.includes('ticket') ? { backgroundColor: 'white', color: '#555', marginLeft: '8px', marginRight: '8px' } : null} as={Link} to='ticket'><i className="fa fa-ticket"></i>Vé</Nav.Link>
                <Nav.Link className='w-100 btn' style={pathname.includes('setting') ? { backgroundColor: 'white', color: '#555', marginLeft: '8px', marginRight: '8px' } : null} as={Link} to='setting'><i className="fa fa-cogs"></i>Cài đặt</Nav.Link>
            </Nav>
            <hr></hr>
        </>
    )
})

export default AdminSidebar