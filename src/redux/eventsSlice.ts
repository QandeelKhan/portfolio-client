import { createSlice } from "@reduxjs/toolkit";

const eventsState = {
    cardClicked: false,
    crossClicked: false,
    myClassName: "hidden",
    animate: "",
};

export const eventsSlice = createSlice({
    name: "events",
    initialState: eventsState,
    reducers: {
        setCardClicked: (state, action) => {
            state.cardClicked = action.payload;
        },
        setCrossClicked: (state, action) => {
            state.myClassName = action.payload;
        },
        setMyClassName: (state, action) => {
            state.myClassName = action.payload;
        },
        setAnimate: (state, action) => {
            state.animate = action.payload;
        },
    },
});

export const { setCardClicked, setCrossClicked, setMyClassName, setAnimate } =
    eventsSlice.actions;

export default eventsSlice.reducer;
