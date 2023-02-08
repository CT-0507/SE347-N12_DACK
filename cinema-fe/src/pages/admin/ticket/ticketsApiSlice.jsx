import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice"

const ticketsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt)
})

const initialState = ticketsAdapter.getInitialState()

export const ticketsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTickets: builder.query({
            query: () => '/tickets',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedTickets = responseData.map(ticket => {
                    ticket.id = ticket._id
                    return ticket
                });
                return ticketsAdapter.setAll(initialState, loadedTickets)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Ticket', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Ticket', id }))
                    ]
                } else return [{ type: 'Ticket', id: 'LIST' }]
            }
        }),
        addNewTicket: builder.mutation({
            query: initialTicket => ({
                url: '/tickets',
                method: 'POST',
                body: initialTicket
            }),
            invalidatesTags: [
                { type: 'Ticket', id: "LIST" },
                { type: 'PremiereSlot', id: "LIST" }
            ]
        }),
        deleteTicket: builder.mutation({
            query: ({ id }) => ({
                url: `/tickets`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Ticket', id: arg.id }
            ]
        }),
    })
})

export const {
    useGetTicketsQuery,
    useAddNewTicketMutation,
    useDeleteTicketMutation
} = ticketsApiSlice

export const selectTicketsResult = ticketsApiSlice.endpoints.getTickets.select()

export const selectTicketsData = createSelector(
    selectTicketsResult,
    ticketsResult => ticketsResult.data
)

export const {
    selectAll: selectAllTickets,
    selectById: selectTicketById,
    selectIds: selectTicketByIds,
} = ticketsAdapter.getSelectors(state => selectTicketsData(state) ?? initialState)

export const selectTicketByUserId = (state, userId) => {
    const data = selectTicketsData(state) ?? initialState
    let result = []
    if (data) {
        const { ids, entities } = data
        console.log(data)
        ids.forEach(id => {
            if (entities[id]["userId"]["_id"] === userId) {
                result.push(entities[id])
            }

        })
    }
    return result
}