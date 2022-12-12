import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './layout.css';
import useWindowDimensions from '../../../hook/useWindowDimensions';
import logo from '../../../img/logo.png'
import { useState, memo } from 'react'
const LayoutHeader = memo(() => {
    const { height, width } = useWindowDimensions();
    const isMobile = width <= 765
    const isTablet = width < 995 && width > 766
    console.log(width)
    const [language, setLanguage] = useState('VN')
    const [mobileNavbar, setMobileNavbar] = useState(false)
    const [openFilmNav, setOpenFilmNav] = useState(false)
    const [openTheater, setOpenTheater] = useState(false)
    const [openMember, setOpenMember] = useState(false)
    const [openCulteplex, setOpenCulteplex] = useState(false)
    const onOpenMenu = () => {
        setMobileNavbar(prev => !prev)
    }
    const onNaviate = () => {
        setMobileNavbar(false)
        setOpenFilmNav(false)
        setOpenTheater(false)
        setOpenMember(false)
        setOpenCulteplex(false)
    }
    return (
        <>
            {!isMobile && <header className='cusNavbar'>
                <Container>
                    <Navbar className='w-75 m-auto p-0'>
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
                            <Nav.Link as={Link} style={{ paddingLeft: 0, paddingRight: 0 }} to="account/login">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                ĐĂNG NHẬP /
                            </Nav.Link>
                            <Nav.Link as={Link} to="account/register">
                                ĐĂNG KÝ
                            </Nav.Link>
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
            <div className='break-bar'></div>
            {!isMobile ?
                <div className='header-banner'>
                    {/* <a href="https://www.flaticon.com/free-icons/cinema" title="cinema icons">Cinema icons created by photo3idea_studio - Flaticon</a> */}
                    <Link to="/"><img src={logo} alt="" /></Link>
                    {!isTablet && <Navbar>
                        <Nav>
                            <Nav.Link as={Link} to='movies' className="text-bolder fs-2 fw-bolder px-4">Phim</Nav.Link>
                            <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder px-4">Rạp Phim</Nav.Link>
                            <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder px-4">Thành viên</Nav.Link>
                            <Nav.Link as={Link} className="text-bolder fs-2 fw-bolder px-4">Cultureplex</Nav.Link>
                        </Nav>
                    </Navbar>}
                </div>
                :
                <div className='header-banner__mobile'>
                    <Link to="/"><img src={logo} alt="" /></Link>
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
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Phim Đang Chiếu
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Phim Sắp Chiếu
                                </Nav.Link>
                            </>

                        }
                    </Navbar>
                    <Navbar className="flex-column align-items-start">
                        <Nav className="p-2 border-bottom w-100" onClick={() => setOpenTheater(prev => !prev)}>
                            <i className={"me-2 " + (openTheater ? "fa fa-caret-down" : "fa fa-caret-right")} aria-hidden="true"></i>
                            RẠP CGV
                        </Nav>
                        {openTheater &&
                            <>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Tất Cả Các Rạp
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Rạp Đặt Biệt
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
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
                                <Nav.Link as={Link} to='/account/login' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Tài Khoản CGV
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
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
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Quầy Online
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    Thuê Rạp & Vé Nhóm
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
                                    e-CGV
                                </Nav.Link>
                                <Nav.Link as={Link} to='/' className="ms-3 ps-4 py-1 border-bottom w-100 subnav" onClick={onNaviate}>
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