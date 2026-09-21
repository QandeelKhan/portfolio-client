import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ColorThemeMode = "dark" | "light";

interface ColorThemeState {
	mode: ColorThemeMode;
}

const initialState: ColorThemeState = {
	mode: (localStorage.getItem("colorTheme") as ColorThemeMode) || "dark",
};

const colorThemeSlice = createSlice({
	name: "colorTheme",
	initialState,
	reducers: {
		setColorTheme: (state, action: PayloadAction<ColorThemeMode>) => {
			state.mode = action.payload;
			localStorage.setItem("colorTheme", action.payload);
			document.documentElement.setAttribute("data-theme", action.payload);
		},
		toggleColorTheme: (state) => {
			const newMode = state.mode === "dark" ? "light" : "dark";
			state.mode = newMode;
			localStorage.setItem("colorTheme", newMode);
			document.documentElement.setAttribute("data-theme", newMode);
		},
	},
});

export const { setColorTheme, toggleColorTheme } = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
