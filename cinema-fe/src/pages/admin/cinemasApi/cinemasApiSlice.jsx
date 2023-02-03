import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice"

const cinemasAdapter = createEntityAdapter({})

const initialState = cinemasAdapter.getInitialState()

export const cinemasApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCinemas: builder.query({
            query: () => '/cinemas',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedcinemas = responseData.map(cinema => {
                    cinema.id = cinema._id
                    return cinema
                });
                return cinemasAdapter.setAll(initialState, loadedcinemas)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Cinema', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Cinema', id }))
                    ]
                } else return [{ type: 'Cinema', id: 'LIST' }]
            }
        }),
        addNewCinema: builder.mutation({
            query: initialCinemaData => ({
                url: '/cinemas',
                method: 'POST',
                body: initialCinemaData
            }),
            invalidatesTags: [
                { type: 'Cinema', id: "LIST" }
            ]
        }),
        updateCinema: builder.mutation({
            query: initialCinemaData => ({
                url: '/cinemas',
                method: 'PATCH',
                body: initialCinemaData
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Cinema', id: arg.id }
            ]
        }),
        deleteCinema: builder.mutation({
            query: ({ id }) => ({
                url: `/cinemas`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Cinema', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetCinemasQuery,
    useAddNewCinemaMutation,
    useUpdateCinemaMutation,
    useDeleteCinemaMutation
} = cinemasApiSlice

export const selectCinemasResult = cinemasApiSlice.endpoints.getCinemas.select()

const selectCinemasData = createSelector(
    selectCinemasResult,
    cinemasResult => cinemasResult.data
)

export const {
    selectAll: selectAllCinemas,
    selectById: selectCinemaById,
    selectIds: selectCinemaIds
} = cinemasAdapter.getSelectors(state => selectCinemasData(state) ?? initialState)