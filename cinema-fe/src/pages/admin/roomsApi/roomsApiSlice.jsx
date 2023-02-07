import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";

const roomsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt)
})

const initialState = roomsAdapter.getInitialState()

export const roomsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRooms: builder.query({
            query: () => '/rooms',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedRooms = responseData.map(room => {
                    room.id = room._id
                    return room
                });
                return roomsAdapter.setAll(initialState, loadedRooms)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Room', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Room', id }))
                    ]
                } else return [{ type: 'Room', id: 'LIST' }]
            }
        }),
        addNewRoom: builder.mutation({
            query: initialRoomData => ({
                url: '/rooms',
                method: 'POST',
                body: initialRoomData
            }),
            invalidatesTags: [
                { type: 'Room', id: "LIST" }
            ]
        }),
        updateRoom: builder.mutation({
            query: initialRoomData => ({
                url: '/rooms',
                method: 'PATCH',
                body: initialRoomData
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Room', id: arg.id }
            ]
        }),
        deleteRoom: builder.mutation({
            query: ({ id }) => ({
                url: `/rooms`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Room', id: arg.id }
            ]
        }),
    })
})

export const {
    useGetRoomsQuery,
    useAddNewRoomMutation,
    useUpdateRoomMutation,
    useDeleteRoomMutation
} = roomsApiSlice

export const selectRoomsResult = roomsApiSlice.endpoints.getRooms.select()

const selectRoomsData = createSelector(
    selectRoomsResult,
    roomsResult => roomsResult.data
)

export const {
    selectAll: selectAllRooms,
    selectById: selectRoomById,
    selectIds: selectRoomIds
} = roomsAdapter.getSelectors(state => selectRoomsData(state) ?? initialState)