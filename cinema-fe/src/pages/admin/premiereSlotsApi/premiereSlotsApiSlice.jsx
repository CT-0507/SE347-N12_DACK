import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice"

const premiereSlotsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt)
})

const initialState = premiereSlotsAdapter.getInitialState()

export const premiereSlotsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPremiereSlots: builder.query({
            query: () => '/premiere-slot',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedPremiereSlots = responseData.map(premiereSlot => {
                    premiereSlot.id = premiereSlot._id
                    return premiereSlot
                });
                return premiereSlotsAdapter.setAll(initialState, loadedPremiereSlots)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'PremiereSlot', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'PremiereSlot', id }))
                    ]
                } else return [{ type: 'PremiereSlot', id: 'LIST' }]
            }
        }),
        addNewPremiereSlot: builder.mutation({
            query: initialPremiereSlot => ({
                url: '/premiere-slot',
                method: 'POST',
                body: initialPremiereSlot
            }),
            invalidatesTags: [
                { type: 'PremiereSlot', id: "LIST" }
            ]
        }),
        updatePremiereSlot: builder.mutation({
            query: initialPremiereSlot => ({
                url: '/premiere-slot',
                method: 'PATCH',
                body: initialPremiereSlot
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PremiereSlot', id: arg.id }
            ]
        }),
        deletePremiereSlot: builder.mutation({
            query: ({ id }) => ({
                url: `/premiere-slot`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PremiereSlot', id: arg.id }
            ]
        }),
    })
})

export const {
    useGetPremiereSlotsQuery,
    useAddNewPremiereSlotMutation,
    useUpdatePremiereSlotMutation,
    useDeletePremiereSlotMutation
} = premiereSlotsApiSlice

export const selectPremiereSlotsResult = premiereSlotsApiSlice.endpoints.getPremiereSlots.select()

const selectPremiereSlotsData = createSelector(
    selectPremiereSlotsResult,
    premiereSlotsResult => premiereSlotsResult.data
)

export const {
    selectAll: selectAllPremiereSlots,
    selectById: selectPremiereSlotById,
    selectIds: selectPremiereSlotIds,
} = premiereSlotsAdapter.getSelectors(state => selectPremiereSlotsData(state) ?? initialState)