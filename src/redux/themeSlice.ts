import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    theme: string;
}

interface Variant {
    pageInitial: { translateX: string };
    pageAnimate: { translateX: string };
    pageExit: { translateX: string };
}

export const variants = {
    theme1: {
        pageInitial: { translateX: "100%" },
        pageAnimate: { translateX: "0%" },
        pageExit: { translateX: "-100%" },
    },
    theme2: {
        pageInitial: { translateX: "100%" },
        pageAnimate: { translateX: "0%" },
        pageExit: { translateX: "-100%" },
    },
    theme3: {
        pageInitial: { translateX: "100%" },
        pageAnimate: { translateX: "0%" },
        pageExit: { translateX: "-100%" },
    },
};

const themeSlice = createSlice({
    name: "theme1",
    initialState: "theme1" as "theme1" | "theme2" | "theme3",
    reducers: {
        setVariant: (
            state,
            action: PayloadAction<"theme1" | "theme2" | "theme3">
        ) => {
            state = action.payload;
        },
    },
});

export const { setVariant } = themeSlice.actions;
export const selectTheme = (state: ThemeState) =>
    state.theme as "theme1" | "theme2" | "theme3";
export default themeSlice.reducer;
