import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    meetings: [],
}

const meetingsSlice = createSlice({
    name: "meetings",
    initialState,
    reducers: {}
});

const store = configureStore({
    reducer: {}
});

export const { addMeeting } = meetingsSlice.actions;

export default store;
