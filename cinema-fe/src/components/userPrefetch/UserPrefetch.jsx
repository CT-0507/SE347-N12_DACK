import { store } from "../../app/store";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { filmsApiSlice } from "../../pages/admin/filmsApi/filmsApiSlice"
import { cinemasApiSlice } from "../../pages/admin/cinemasApi/cinemasApiSlice";
import { premiereSlotsApiSlice } from "../../pages/admin/premiereSlotsApi/premiereSlotsApiSlice";
import { ticketsApiSlice } from "../../pages/admin/ticket/ticketsApiSlice";

const UserPrefetch = () => {
    useEffect(() => {
        console.log('user subcribing')
        const films = store.dispatch(filmsApiSlice.endpoints.getFilms.initiate())
        const cinemas = store.dispatch(cinemasApiSlice.endpoints.getCinemas.initiate())
        const premiereSlots = store.dispatch(premiereSlotsApiSlice.endpoints.getPremiereSlots.initiate())
        const tickets = store.dispatch(ticketsApiSlice.endpoints.getTickets.initiate())
        return () => {
            console.log('user unsubcribing')
            films.unsubscribe()
            cinemas.unsubscribe()
            premiereSlots.unsubscribe()
            tickets.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default UserPrefetch