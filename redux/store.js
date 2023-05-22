import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './DetailsSlice'
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        data: pageReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})