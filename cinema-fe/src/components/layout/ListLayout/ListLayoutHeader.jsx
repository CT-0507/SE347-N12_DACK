import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import useWindowDimensions from '../../../hook/useWindowDimensions';
import './listLayout.css'
const ListLayoutHeader = memo(() => {
    const { width, height } = useWindowDimensions();
    const isMobile = width <= 765
    const isTablet = width < 995 && width > 766
    const { pathname } = useLocation()
    return (
        <>
            <div className={(pathname.includes('about') ? " bg-danger " : " ").concat(" d-flex align-items-center bg-secondary my-2  list-layout-nav")}>
                <div className="arrow-right"></div><Link to='about' className='d-block flex-fill nav-link text-white fs-5 ms-2'>GIỚI THIỆU</Link>
            </div>
            <div className={(pathname.includes('contact') ? " bg-danger " : " ").concat(" d-flex align-items-center bg-secondary my-2 list-layout-nav")}>
                <div className="arrow-right"></div><Link className='d-block flex-fill nav-link text-white fs-5 ms-2'>LIÊN HỆ CGV</Link>
            </div>
            <div className={(pathname.includes('terms-conditions') ? " bg-danger " : " ").concat(" d-flex align-items-center bg-secondary my-2 list-layout-nav")}>
                <div className="arrow-right"></div><Link to='terms-conditions' className='d-block flex-fill nav-link text-white fs-5 ms-2'>ĐIỀU KHOẢN CHUNG</Link>
            </div>
            <div className="d-flex align-items-center bg-secondary my-2 list-layout-nav">
                <div className="arrow-right"></div><Link className='d-block flex-fill nav-link text-white fs-5 ms-2'>ĐIỀU KHOẢN GIAO DỊCH</Link>
            </div>
            <div className="d-flex align-items-center bg-secondary my-2 list-layout-nav">
                <div className="arrow-right"></div><Link className='d-block flex-fill nav-link text-white fs-5 ms-2'>CHÍNH SÁCH THANH TOÁN</Link>
            </div>
            <div className="d-flex align-items-center bg-secondary my-2 list-layout-nav">
                <div className="arrow-right"></div><Link className='d-block flex-fill nav-link text-white fs-5 ms-2'>CÂU HỎI THƯỜNG GẶP</Link>
            </div>
        </>
    )
})

export default ListLayoutHeader