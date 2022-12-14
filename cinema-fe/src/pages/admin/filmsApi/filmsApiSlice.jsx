import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice"
import { useSelector } from 'react-redux';

const filmsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt)
})

const initialState = filmsAdapter.getInitialState()

export const filmsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFilms: builder.query({
            query: () => '/films',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedfilms = responseData.map(film => {
                    film.id = film._id
                    return film
                });
                return filmsAdapter.setAll(initialState, loadedfilms)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Film', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Film', id }))
                    ]
                } else return [{ type: 'Film', id: 'LIST' }]
            }
        }),
        addNewFilm: builder.mutation({
            query: initialFilmData => ({
                url: '/films',
                method: 'POST',
                body: initialFilmData
            }),
            invalidatesTags: [
                { type: 'Film', id: "LIST" }
            ]
        }),
        updateFilm: builder.mutation({
            query: initialFilmData => ({
                url: '/films',
                method: 'PATCH',
                body: initialFilmData
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Film', id: arg.id }
            ]
        }),
        deleteFilm: builder.mutation({
            query: ({ id }) => ({
                url: `/films`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Film', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetFilmsQuery,
    useAddNewFilmMutation,
    useUpdateFilmMutation,
    useDeleteFilmMutation,
} = filmsApiSlice

// returns the query result object
export const selectfilmsResult = filmsApiSlice.endpoints.getFilms.select()

// creates memoized selector
const selectfilmsData = createSelector(
    selectfilmsResult,
    filmsResult => filmsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllfilms,
    selectById: selectFilmById,
    selectIds: selectFilmIds,
    // Pass in a selector that returns the films slice of state
} = filmsAdapter.getSelectors(state => selectfilmsData(state) ?? initialState)
const selectActive = (state, option) => option
export const selectActiveFilm = createSelector(
    [selectfilmsResult, selectActive],
    (filmsResult, option) => {
        const { ids } = filmsResult.data
        let result = []
        ids.forEach(id => {
            const film = useSelector(state => selectFilmById(state, id))

            if (film.filmStatus === option) result.push(film)
        });
        return result
    }
)




