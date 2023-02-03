import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import React from 'react'

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { roles } = useAuth()

    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to={location.pathname.includes("admin") ? "/admin" : "/account/login"} state={{ from: location }} replace />
    )
    return content
}

export default RequireAuth