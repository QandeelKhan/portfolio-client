import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: null,
    orderCount: "",
    orderType: "",
    completionStatus: "",
    paymentStatus: "",
    orderDescription: "",
    projectDescription: "",
    projectName: "",
    totalPrice: null,
    orderCreatedAt: "",
    orderDueDate: "",
    orderUpdatedAt: "",
    orderIsLoading: false,
    orderError: null,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setOrderId: (state, action) => {
            state.orderId = action.payload;
        },
        setOrderCount: (state, action) => {
            state.orderCount = action.payload;
        },
        setOrderType: (state, action) => {
            state.orderType = action.payload;
        },
        setOrderCompletionStatus: (state, action) => {
            state.completionStatus = action.payload;
        },
        setOrderPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
        setOrderDescription: (state, action) => {
            state.orderDescription = action.payload;
        },
        setProjectDescription: (state, action) => {
            state.projectDescription = action.payload;
        },
        setProjectName: (state, action) => {
            state.projectName = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setOrderCreatedAt: (state, action) => {
            state.orderCreatedAt = action.payload;
        },
        setOrderDueDate: (state, action) => {
            state.orderDueDate = action.payload;
        },
        setOrderUpdatedAt: (state, action) => {
            state.orderUpdatedAt = action.payload;
        },
        setOrderIsLoading: (state, action) => {
            state.orderIsLoading = action.payload;
        },
        setOrderError: (state, action) => {
            state.orderError = action.payload;
        },
    },
});

export const {
    setOrderId,
    setOrderCount,
    setOrderType,
    setOrderCompletionStatus,
    setOrderPaymentStatus,
    setOrderDescription,
    setProjectDescription,
    setProjectName,
    setTotalPrice,
    setOrderCreatedAt,
    setOrderDueDate,
    setOrderUpdatedAt,
    setOrderIsLoading,
    setOrderError,
} = slice.actions;
export default slice.reducer;
