import { store } from "../../app/store";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { filmsApiSlice } from "../../pages/admin/filmsApi/filmsApiSlice"
import { cinemasApiSlice } from "../../pages/admin/cinemasApi/cinemasApiSlice";

const UserPrefetch = () => {
    useEffect(() => {
        console.log('user subcribing')
        const films = store.dispatch(filmsApiSlice.endpoints.getFilms.initiate())
        const cinemas = store.dispatch(cinemasApiSlice.endpoints.getCinemas.initiate())
        return () => {
            console.log('user unsubcribing')
            films.unsubscribe()
            cinemas.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default UserPrefetch