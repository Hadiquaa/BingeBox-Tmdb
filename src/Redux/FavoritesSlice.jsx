import { createSlice } from "@reduxjs/toolkit";


export const FavoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        list: [],
    },
    reducers: {
        addFavorite:(state,action) => {
            state.list.push(action.payload);
        },
        removeFavorite:(state,action) => {
            state.list = state.list.filter(item => item.id!==action.payload);
        }
    }
})

export const { addFavorite, removeFavorite } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;