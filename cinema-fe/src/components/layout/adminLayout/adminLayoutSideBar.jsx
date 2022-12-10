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
                    <Nav.Link  className='w-100 btn' style={pathname.includes('user') ? { backgroundColor:'white', color:'#555', marginLeft:'8px', marginRight:'8px' } : null} as={Link} to='user'><i class="fa fa-fw fa-user"></i>{"Người dùng"}</Nav.Link>
                    <Nav.Link  className='w-100 btn' style={pathname.includes('film') ? { backgroundColor:'white', color:'#555', marginLeft:'8px', marginRight:'8px' } : null} as={Link} to='film'><i class="fa fa-file-video-o"></i>{"Phim công chiếu"}</Nav.Link>
                    <Nav.Link  className='w-100 btn' style={pathname.includes('cinema') ? { backgroundColor:'white', color:'#555', marginLeft:'8px', marginRight:'8px' } : null} as={Link} to='cinema'><i class="fa fa-film"></i>Rạp phim</Nav.Link>
                    <Nav.Link  className='w-100 btn' style={pathname.includes('setting') ? { backgroundColor:'white', color:'#555', marginLeft:'8px', marginRight:'8px' } : null} as={Link} to='setting'><i class="fa fa-cogs"></i>Cài đặt</Nav.Link>
            </Nav>
            <hr></hr>
        </>
    )
})

export default AdminSidebar