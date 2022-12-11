import { store } from "../../app/store";
import { usersApiSlice } from "./usersApi/usersApiSlice";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";

const AdminPrefetch = () => {
    useEffect(() => {
        console.log('admin subcribing')
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        return () => {
            console.log('admin unsubcribing')
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default AdminPrefetch