import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: {}
}
export const DetailsSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        getMovieDetails: (state, action) =>{
            state.details = action.payload
        }
    }
})
export const { getMovieDetails } = DetailsSlice.actions;

export default DetailsSlice.reducer;