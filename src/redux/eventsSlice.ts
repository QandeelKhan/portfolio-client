import { createSlice } from "@reduxjs/toolkit";

interface EventState {
    navVisible: boolean;
    blogCardClicked: boolean;
    gearOpen: boolean;
}

const eventsState: EventState = {
    // cardClicked: false,
    // crossClicked: false,
    // myClassName: "deactive",
    // animate: "",
    blogCardClicked: false,
    navVisible: true,
    gearOpen: false,
};

export const eventsSlice = createSlice({
    name: "events",
    initialState: eventsState,
    reducers: {
        setNavVisible: (state, action: { payload: boolean }) => {
            state.navVisible = action.payload;
        },
        setGearOpen: (state, action: { payload: boolean }) => {
            state.gearOpen = action.payload;
        },
        setBlogCardClicked: (state, action: { payload: boolean }) => {
            state.blogCardClicked = action.payload;
        },
        // setCardClicked: (state, action) => {
        //     state.cardClicked = action.payload;
        // },
        // setCrossClicked: (state, action) => {
        //     state.myClassName = action.payload;
        // },
        // setMyClassName: (state, action) => {
        //     state.myClassName = action.payload;
        // },
        // setMyScrollbar: (state, action) => {
        //     state.myScrollbar = action.payload;
        // },
        // setAnimate: (state, action) => {
        //     state.animate = action.payload;
        // },
    },
});

export const {
    // setCardClicked,
    // setCrossClicked,
    // setMyClassName,
    // setAnimate,
    setGearOpen,
    setBlogCardClicked,
    setNavVisible,
} = eventsSlice.actions;

export default eventsSlice.reducer;
