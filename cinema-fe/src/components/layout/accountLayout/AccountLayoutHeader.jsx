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
            <Navbar className='account-header-nav p-0 m-auto w-50'>
                <Nav className="w-50 p-0 m-0">
                    <Nav.Link className='w-100 text-white text-center py-2 p-0 m-0 w-100 nav-itemL' style={pathname.includes('login') ? { borderBottom: '3px solid #7F0000', background:'#7F0000'} : null} as={Link} to='login'>ĐĂNG NHẬP</Nav.Link>
                </Nav>
                <Nav className="w-50 p-0 m-0">
                    <Nav.Link className='w-100 text-white text-center py-2 p-0 m-0 w-100 nav-itemR' style={pathname.includes('register') ? { borderBottom: '3px solid #7F0000',  background:'#7F0000' } : null} as={Link} to='register'>ĐĂNG KÝ</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
})

export default AccountLayoutHeader