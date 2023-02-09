import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import './layout.css';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import logo from '../../../img/vktc-new.png'
import { useState, memo } from 'react'
import useAuth from '../../../hooks/useAuth';
import { useSendLogoutMutation } from '../../../pages/account/authApiSlice'
import Spinner from 'react-bootstrap/Spinner';
const LayoutHeader = memo(() => {
    const { height, width } = useWindowDimensions();
    const isMobile = width <= 765
    const isTablet = width < 995 && width > 766
    const [language, setLanguage] = useState('VN')
    const [mobileNavbar, setMobileNavbar] = useState(false)
    const [openFilmNav, setOpenFilmNav] = useState(false)
    const [openTheater, setOpenTheater] = useState(false)
    const [openMember, setOpenMember] = useState(false)
    const [openCulteplex, setOpenCulteplex] = useState(false)
    const onOpenMenu = () => {
        setMobileNavbar(prev => !prev)
    }
    const { username, name } = useAuth()
    const onNavigate = () => {
        setMobileNavbar(false)
        setOpenFilmNav(false)
        setOpenTheater(false)
        setOpenMember(false)
        setOpenCulteplex(false)
    }

    // Log out
    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    if (isError) {
        console.log(error)
        alert(error?.data?.message)
    }

    return (
        <>
            {!isMobile && <header className='cusNavbar'>
                <Container>
                    <Navbar className='w-75 m-auto py-0'>
                        {!isTablet && !isMobile ?
                            <Nav
                                className='me-auto'>
                                <Nav.Link as={Link}>
                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                    Tuyển dụng
                                </Nav.Link>
                                <Nav.Link as={Link}>
                                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                    TIN TỨC & ƯU ĐÃI
                                </Nav.Link>
                                <Nav.Link as={Link}>
                                    <i className="fa fa-ticket" aria-hidden="true"></i>
                                    VÉ CỦA TÔI
                                </Nav.Link>
                            </Nav>
                            :
                            null
                        }
                        <Nav className='ms-auto'>
                            {name
                                ? <>
                                    <Nav.Link as={Link} style={{ paddingLeft: 0, paddingRight: 0 }} className="me-2" to="user">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        {name}
                                    </Nav.Link>
                                    <Nav.Link disabled={isLoading} style={{ paddingLeft: 0, paddingRight: 0 }} onClick={sendLogout}>
                                        {isLoading ? <Spinner /> : <i className="fa fa-sign-out" aria-hidden="true" />}
                                    </Nav.Link>
                                </>
                                : <>
                                    <Nav.Link as={Link} style={{ paddingLeft: 0, paddingRight: 0 }} to="account/login">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        ĐĂNG NHẬP /
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="account/register">
                                        ĐĂNG KÝ
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                        <div className="languageToggle d-none">
                            <button>
                                EN
                            </button>
                            <button>
                                VN
                            </button>
                        </div>
                    </Navbar>
                </Container>
            </header>}
            {!isMobile ?
                <div className='header-banner'>
                    {/* <a href="https://www.flaticon.com/free-icons/cinema" title="cinema icons">Cinema icons created by photo3idea_studio - Flaticon</a> */}
                    <Link to="/"><img src={logo} alt="" style={{ width: '90px' }} className='logo-header' /></Link>
                    {!isTablet && <Navbar>
                        <Nav>
                            <div className="parent">
                                <Tippy
                                    interactive
                                    render={attrs => (
                                        <div className="box p-1 " tabIndex="-1" {...attrs}>
                                            <Link as={Link} to='movies' style={{ textDecoration: 'none' }}><div className="  text-nav">Phim Đang Chiếu</div></Link>
                                            <Link as={Link} to='about' style={{ textDecoration: 'none' }}> <div className=" text-nav ">Phim sắp Chiếu</div></Link>
                                        </div>
                                    )}
                                >
                                    <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder mx-4 py-0 my-2 li-header">Phim</Nav.Link>
                                </Tippy>
                            </div>
                            <div className="parent">
                                <Tippy
                                    interactive
                                    render={attrs => (
                                        <div className="box p-1 " tabIndex="-1" {...attrs}>
                                            <Link as={Link} to='cinema' style={{ textDecoration: 'none' }}><div className="  text-nav">tất Cả Các Rạp</div></Link>
                                            <Link as={Link} to='cinema' style={{ textDecoration: 'none' }}> <div className=" text-nav ">Rạp Đặt Biệt</div></Link>
                                            <Link as={Link} to='cinema' style={{ textDecoration: 'none' }}> <div className=" text-nav ">Rạp 3D</div></Link>
                                        </div>
                                    )}
                                >
                                    <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder mx-4 py-0 my-2 li-header">Rạp Phim</Nav.Link>
                                </Tippy>
                            </div>
                            <div className="parent">
                                <Tippy
                                    interactive
                                    render={attrs => (
                                        <div className="box p-1 " tabIndex="-1" {...attrs}>
                                            <Link as={Link} to='movies' style={{ textDecoration: 'none' }}><div className="  text-nav">Tài Khoản VKTC</div></Link>
                                            <Link as={Link} to='about' style={{ textDecoration: 'none' }}> <div className=" text-nav ">Quyền Lợi</div></Link>
                                        </div>
                                    )}
                                >
                                    <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder mx-4 py-0 my-2 li-header">Thành viên</Nav.Link>
                                </Tippy>
                            </div>
                            <div className="parent">
                                <Tippy
                                    interactive
                                    render={attrs => (
                                        <div className="box p-1 " tabIndex="-1" {...attrs}>
                                            <Link as={Link} to='movies' style={{ textDecoration: 'none' }}><div className="  text-nav">Quầy Online</div></Link>
                                            <Link as={Link} to='about' style={{ textDecoration: 'none' }}> <div className=" text-nav ">Thuê Rạp & Vé Nhóm</div></Link>
                                            <Link as={Link} to='about' style={{ textDecoration: 'none' }}> <div className=" text-nav ">e-VKTC</div></Link>
                                            <Link as={Link} to='about' style={{ textDecoration: 'none' }}> <div className=" text-nav ">Thẻ Quà Tặng</div></Link>
                                        </div>
                                    )}
                                >
                                    <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder mx-4 py-0 my-2 li-header">Cultureplex</Nav.Link>
                                </Tippy>
                            </div>
                        </Nav>
                    </Navbar>}
                </div>
                :
                <div className='header-banner__mobile'>
                    <Link to="/"><img src={logo} alt="" style={{ width: '150px' }} className='logo-header' /></Link>
                </div>
            }
            {isMobile || isTablet ? <Navbar className='w-100 d-block text-center'>
                <Nav>
                    <Nav.Link onClick={onOpenMenu} className="flex-fill border-end border-2">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/' className="flex-fill border-end border-2">
                        <i className="fa fa-ticket" aria-hidden="true"></i>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/' onClick={onOpenMenu} className="flex-fill border-end border-2">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/' onClick={onOpenMenu} className="flex-fill">
                        {language}
                    </Nav.Link>
                </Nav>
            </Navbar> : null}
            {mobileNavbar ?
                <Container fluid className="bg-secondary bg-gradient p-0">
                    <Navbar className="flex-column align-items-start">
                        <Nav className="p-2 border-bottom w-100" onClick={() => setOpenFilmNav(prev => !prev)}>
                            <i className={"me-2 " + (openFilmNav ? "fa fa-caret-down" : "fa fa-caret-right")} aria-hidden="true"></i>
                            PHIM
                        </Nav>
                        {openFilmNav &&
                            <>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Phim Đang Chiếu
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Phim Sắp Chiếu
                                </Nav.Link>
                            </>

                        }
                    </Navbar>
                    <Navbar className="flex-column align-items-start">
                        <Nav className="p-2 border-bottom w-100" onClick={() => setOpenTheater(prev => !prev)}>
                            <i className={"me-2 " + (openTheater ? "fa fa-caret-down" : "fa fa-caret-right")} aria-hidden="true"></i>
                            RẠP VKTC
                        </Nav>
                        {openTheater &&
                            <>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Tất Cả Các Rạp
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Rạp Đặt Biệt
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Rạp 3D
                                </Nav.Link>
                            </>

                        }
                    </Navbar>
                    <Navbar className="flex-column align-items-start">
                        <Nav className="p-2 border-bottom w-100" onClick={() => setOpenMember(prev => !prev)}>
                            <i className={"me-2 " + (openMember ? "fa fa-caret-down" : "fa fa-caret-right")} aria-hidden="true"></i>
                            THÀNH VIÊN
                        </Nav>
                        {openMember &&
                            <>
                                <Nav.Link as={Link} to='/account/login' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Tài Khoản VKTC
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Quyền Lợi
                                </Nav.Link>
                            </>
                        }
                    </Navbar>
                    <Navbar className="flex-column align-items-start">
                        <Nav className="p-2 border-bottom w-100" onClick={() => setOpenCulteplex(prev => !prev)}>
                            <i className={"me-2 " + (openCulteplex ? "fa fa-caret-down" : "fa fa-caret-right")} aria-hidden="true"></i>
                            CULTUREPLEX
                        </Nav>
                        {openCulteplex &&
                            <>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Quầy Online
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Thuê Rạp & Vé Nhóm
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    e-VKTC
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNavigate}>
                                    Thẻ Quà Tặng
                                </Nav.Link>
                            </>
                        }
                    </Navbar>
                    <Navbar>
                        <Nav.Link className="p-2 border-bottom w-100">
                            TUYỂN DỤNG
                        </Nav.Link>
                    </Navbar>
                    <Navbar>
                        <Nav.Link className="p-2 w-100">
                            TIN MỚI & ƯU ĐÃI
                        </Nav.Link>
                    </Navbar>
                </Container>
                :
                null
            }
        </>
    )
})

export default LayoutHeader