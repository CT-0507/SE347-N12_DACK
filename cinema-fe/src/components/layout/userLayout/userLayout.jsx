import { memo } from "react"
import UserHeader from './userLayoutHeader'
import UserSidebar from "./userLayoutSideBar"
import UserMenu from "../../../pages/admin/User"
import FilmMenu from "../../../pages/admin/Film"
import './userLayout.css'
import { Outlet } from "react-router-dom"
const UserLayout = memo(() => {

    return (
        <>
            <div className="container-admin">
                <div className="header-admin">
                    <UserHeader />
                </div>
                <div className="body-admin">
                    <div className="sidebar-admin">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div className="main-admin">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
})
export default UserLayout