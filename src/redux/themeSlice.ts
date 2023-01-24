import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    theme: string;
}

interface PageStyles {
    pageInitial: { translateX: string };
    pageAnimate: { translateX: string };
    pageExit: { translateX: string };
}

const variant: { [key: string]: PageStyles } = {
    theme1: {
        pageInitial: { translateX: "-100%" },
        pageAnimate: { translateX: "0%" },
        pageExit: { translateX: "100%" },
    },
    theme2: {
        pageInitial: { translateX: "0%" },
        pageAnimate: { translateX: "0%" },
        pageExit: { translateX: "0%" },
    },
    theme3: {
        pageInitial: { translateX: "100%" },
        pageAnimate: { translateX: "0%" },
        pageExit: { translateX: "-100%" },
    },
};

const themeSlice = createSlice({
    name: "theme",
    initialState: { theme: "theme1" },
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: ThemeState) => state.theme;

export const selectStyles = (state: ThemeState) => variant[state.theme];

export default themeSlice.reducer;
