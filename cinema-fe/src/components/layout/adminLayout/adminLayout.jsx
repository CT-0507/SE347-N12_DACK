import { memo } from "react"
import AdminHeader from './adminLayoutHeader'
import AdminSidebar from "./adminLayoutSideBar"
import UserMenu from "../../../pages/admin/User"
import FilmMenu from "../../../pages/admin/Film"
import './adminLayout.css'
import { Outlet } from "react-router-dom"
const AdminLayout = memo(() => {

    return (
        <>
            <div className="container-admin">
                <div className="header-admin">
                    <AdminHeader />
                </div>
                <div className="body-admin">
                    <div className="sidebar-admin">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="main-admin">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
})
export default AdminLayout