import { createSlice } from "@reduxjs/toolkit";

interface ordersDataTypes {
    order_id: String;
    order_count: number;
    order_type: string;
    completion_status: number;
    active_status: boolean;
    payment_status: string;
    order_description: string;
    project_description: string;
    project_name: string;
    total_price: number | any;
    order_createdAt: string;
    due_date: string;
    updated_at: string;
    orderIsLoading: false;
    orderError: null;
}

interface DataState {
    allOrders: ordersDataTypes | null;
}

const initialState: DataState = {
    allOrders: null,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAllOrders: (state, action) => {
            state.allOrders = action.payload;
        },
    },
});

export const { setAllOrders } = dataSlice.actions;
export default dataSlice.reducer;
