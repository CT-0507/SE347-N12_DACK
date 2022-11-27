import { useState, memo } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom"
const AccountLayoutHeader = memo(() => {
    const { pathname } = useLocation()
    // const p
    const [currentPath, setCurrentPath] = useState()
    return (
        <>
            <Navbar className='account-header-nav p-0'>
                <Nav className="w-50 text-center p-3 py-0">
                    <Nav.Link className='text-white w-100 ' style={pathname.includes('login') ? { borderBottom: '4px solid #fff' } : null} as={Link} to='login'>ĐĂNG NHẬP</Nav.Link>
                </Nav>
                <Nav className="w-50 text-center p-3 py-0">
                    <Nav.Link className='text-white w-100 p-2' style={pathname.includes('register') ? { borderBottom: '1px solid #fff' } : null} as={Link} to='register'>ĐĂNG KÝ</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
})

export default AccountLayoutHeader