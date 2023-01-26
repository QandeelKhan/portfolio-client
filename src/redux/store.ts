import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import themesReducer from "./themeSlice";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        themes: themesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
