import { createSlice } from "@reduxjs/toolkit";

export interface ordersDataTypes {
    order_id: string;
    order_count: number;
    order_type: string;
    completion_status: number;
    active_status: boolean;
    payment_status: string;
    description: string;
    project_description: string;
    project_name: string;
    total_price: number | any;
    created_at: string;
    due_date: string;
    updated_at: string;
    completed_at: string;
    orderIsLoading: false;
    orderError: null;
}

export interface DataState {
    allOrders: ordersDataTypes | null | any;
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
