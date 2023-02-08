import { useSelector } from "react-redux";
import { selectCurrentToken } from "../pages/account/authSlice";
import jwtDecode from "jwt-decode"


const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isAdmin = false
    let isUser = false
    let status = "User"

    if (token) {
        const decoded = jwtDecode(token)
        const { id, username, roles, name } = decoded.UserInfo

        isAdmin = roles.includes('Admin')
        isUser = roles.includes('User')
        if (isUser) status = "User"
        if (isAdmin) status = "Admin"
        return { id, username, roles, name, status, isAdmin, isUser }

    }

    return { username: '', roles: [], isAdmin, status }
}

export default useAuth