import { Outlet } from 'react-router-dom'

import { memo } from 'react'
import LayoutHeader from './LayoutHeader'
import Container from 'react-bootstrap/esm/Container'
import LayoutFooter from './LayoutFooter'
import ScrollButton from '../../button/ScrollButton'

const Layout = memo(() => {
    return (
        <>
            <LayoutHeader />
            <Outlet />
            <LayoutFooter />
            <ScrollButton />
        </>
    )
})

export default Layout