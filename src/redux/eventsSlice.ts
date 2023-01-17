import { createSlice } from "@reduxjs/toolkit";

const eventsState = {
    setClicked: false,
};

export const eventsSlice = createSlice({
    name: "events",
    initialState: eventsState,
    reducers: {
        setCardClicked: (state, action) => {
            state.setClicked = action.payload;
        },
    },
});

export const { setCardClicked } = eventsSlice.actions;

export default eventsSlice.reducer;
