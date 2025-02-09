import { configureStore } from "@reduxjs/toolkit";
import {FavoritesSlice} from "./FavoritesSlice";

export const Store = configureStore({
    reducer: {
        favorites : FavoritesSlice.reducer,
    }
})