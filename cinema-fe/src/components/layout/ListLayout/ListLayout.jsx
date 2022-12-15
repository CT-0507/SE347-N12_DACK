import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import ListLayoutHeader from './ListLayoutHeader'
import './listLayout.css'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { useNavigate, useLocation } from "react-router-dom"
const ListLayout = memo(() => {
    const { width, height } = useWindowDimensions();
    const isMobile = width <= 765
    const isTablet = width < 995 && width > 766


    return (
        <Container fluid="sm" className={((isTablet || isMobile) ? ' flex-column ' : ' flex-row ').concat(" d-flex")}>
            <div className={((isTablet || isMobile) ? " w-100 " : " w-30 ").concat(" d-flex flex-column")}>
                <ListLayoutHeader />
            </div>
            <div className="main-content flex-fill my-2 p-2">
                <Outlet />
            </div>

        </Container>
    )
})

export default ListLayout