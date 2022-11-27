import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import AccountLayoutHeader from './AccountLayoutHeader'
import './accountLayout.css'
const UserLayout = memo(() => {
    return (
        <Container>
            <AccountLayoutHeader />
            <Outlet />
        </Container>
    )
})

export default UserLayout