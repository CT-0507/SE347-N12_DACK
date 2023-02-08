import { store } from "../../app/store";
import { usersApiSlice } from "./usersApi/usersApiSlice";
import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { filmsApiSlice } from "./filmsApi/filmsApiSlice";
import { cinemasApiSlice } from "./cinemasApi/cinemasApiSlice";
import { premiereSlotsApiSlice } from "./premiereSlotsApi/premiereSlotsApiSlice";
import { ticketsApiSlice } from "./ticket/ticketsApiSlice";

const AdminPrefetch = () => {
    useEffect(() => {
        console.log('admin subcribing')
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
        const films = store.dispatch(filmsApiSlice.endpoints.getFilms.initiate())
        const cinemas = store.dispatch(cinemasApiSlice.endpoints.getCinemas.initiate())
        const premiereSlots = store.dispatch(premiereSlotsApiSlice.endpoints.getPremiereSlots.initiate())
        const tickets = store.dispatch(ticketsApiSlice.endpoints.getTickets.initiate())
        return () => {
            console.log('admin unsubcribing')
            users.unsubscribe()
            films.unsubscribe()
            cinemas.unsubscribe()
            premiereSlots.unsubscribe()
            tickets.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default AdminPrefetch