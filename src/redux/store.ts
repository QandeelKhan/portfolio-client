import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import themesReducer from "./themeSlice";
import dataReducer from "./dataSlice";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        themes: themesReducer,
        data: dataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
