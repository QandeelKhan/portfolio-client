import { createSlice } from "@reduxjs/toolkit";

interface BlogPost {
    title: string;
    image: string;
    category: string;
    date: string;
    author: string;
    initialParagraph: string;
    paragraphHeading: string;
    quote: string;
    quoteWriter: string;
    secondParagraph: string;
    images: string[];
    paragraphAfterImage: string;
}

interface DataState {
    selectedPost: BlogPost | null;
}

const initialState: DataState = {
    selectedPost: null,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
});

export const { setSelectedPost } = dataSlice.actions;
export default dataSlice.reducer;
