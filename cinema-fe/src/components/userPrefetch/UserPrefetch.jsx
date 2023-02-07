import { store } from "../../app/store";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { filmsApiSlice } from "../../pages/admin/filmsApi/filmsApiSlice"
import { cinemasApiSlice } from "../../pages/admin/cinemasApi/cinemasApiSlice";
import { premiereSlotsApiSlice } from "../../pages/admin/premiereSlotsApi/premiereSlotsApiSlice";

const UserPrefetch = () => {
    useEffect(() => {
        console.log('user subcribing')
        const films = store.dispatch(filmsApiSlice.endpoints.getFilms.initiate())
        const cinemas = store.dispatch(cinemasApiSlice.endpoints.getCinemas.initiate())
        const premiereSlots = store.dispatch(premiereSlotsApiSlice.endpoints.getPremiereSlots.initiate())
        return () => {
            console.log('user unsubcribing')
            films.unsubscribe()
            cinemas.unsubscribe()
            premiereSlots.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default UserPrefetch