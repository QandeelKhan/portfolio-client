import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import themeSlice from "./themeSlice";

interface ThemeState {
    theme: "theme1" | "theme2" | "theme3";
}

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        theme: themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
