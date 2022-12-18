import { store } from "../../app/store";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { filmsApiSlice } from "../../pages/admin/filmsApi/filmsApiSlice"

const UserPrefetch = () => {
    useEffect(() => {
        console.log('user subcribing')
        const films = store.dispatch(filmsApiSlice.endpoints.getFilms.initiate())
        return () => {
            console.log('user unsubcribing')
            films.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default UserPrefetch