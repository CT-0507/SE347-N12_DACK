import { store } from "../../app/store";
import { usersApiSlice } from "./usersApi/usersApiSlice";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { filmsApiSlice } from "./filmsApi/filmsApiSlice";
import { cinemasApiSlice } from "./cinemasApi/cinemasApiSlice";

const AdminPrefetch = () => {
    useEffect(() => {
        console.log('admin subcribing')
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
        const films = store.dispatch(filmsApiSlice.endpoints.getFilms.initiate())
        const cinemas = store.dispatch(cinemasApiSlice.endpoints.getCinemas.initiate())
        return () => {
            console.log('admin unsubcribing')
            users.unsubscribe()
            films.unsubscribe()
            cinemas.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default AdminPrefetch