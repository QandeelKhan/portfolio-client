import { createSlice } from "@reduxjs/toolkit";

export interface Order {
    id: number;
    user: number;
    order_type: string;
    status: string;
    active_status: boolean;
    payment_status: string;
    description: string;
    project_name: string;
    project_description: string;
    total_price: number;
    created_at: string;
    due_date: string | null;
    updated_at: string;
    order_count: number;
}

const initialState = {
    orderId: null,
    aoOrderId: null,
    orderCount: "",
    aoOrderCount: "",
    orderType: "",
    aoOrderType: "",
    completionStatus: "",
    aoCompletionStatus: "",
    activeStatus: false,
    aoActiveStatus: false,
    paymentStatus: "",
    aoPaymentStatus: "",
    orderDescription: "",
    aoOrderDescription: "",
    projectDescription: "",
    aoProjectDescription: "",
    projectName: "",
    aoProjectName: "",
    totalPrice: null,
    aoTotalPrice: null,
    orderCreatedAt: "",
    aoOrderCreatedAt: "",
    orderDueDate: "",
    aoOrderDueDate: "",
    orderUpdatedAt: "",
    aoOrderUpdatedAt: "",
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
        setAoOrderId: (state, action) => {
            state.aoOrderId = action.payload;
        },
        setOrderCount: (state, action) => {
            state.orderCount = action.payload;
        },
        setAoOrderCount: (state, action) => {
            state.aoOrderCount = action.payload;
        },
        setOrderType: (state, action) => {
            state.orderType = action.payload;
        },
        setAoOrderType: (state, action) => {
            state.aoOrderType = action.payload;
        },
        setOrderCompletionStatus: (state, action) => {
            state.completionStatus = action.payload;
        },
        setAoOrderCompletionStatus: (state, action) => {
            state.aoCompletionStatus = action.payload;
        },
        setActiveStatus: (state, action) => {
            state.activeStatus = action.payload;
        },
        setAoActiveStatus: (state, action) => {
            state.aoActiveStatus = action.payload;
        },
        setOrderPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
        setAoOrderPaymentStatus: (state, action) => {
            state.aoPaymentStatus = action.payload;
        },
        setOrderDescription: (state, action) => {
            state.orderDescription = action.payload;
        },
        setAoOrderDescription: (state, action) => {
            state.aoOrderDescription = action.payload;
        },
        setProjectDescription: (state, action) => {
            state.projectDescription = action.payload;
        },
        setAoProjectDescription: (state, action) => {
            state.aoProjectDescription = action.payload;
        },
        setProjectName: (state, action) => {
            state.projectName = action.payload;
        },
        setAoProjectName: (state, action) => {
            state.aoProjectName = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setAoTotalPrice: (state, action) => {
            state.aoTotalPrice = action.payload;
        },
        setOrderCreatedAt: (state, action) => {
            state.orderCreatedAt = action.payload;
        },
        setAoOrderCreatedAt: (state, action) => {
            state.aoOrderCreatedAt = action.payload;
        },
        setOrderDueDate: (state, action) => {
            state.orderDueDate = action.payload;
        },
        setAoOrderDueDate: (state, action) => {
            state.aoOrderDueDate = action.payload;
        },
        setOrderUpdatedAt: (state, action) => {
            state.orderUpdatedAt = action.payload;
        },
        setAoOrderUpdatedAt: (state, action) => {
            state.aoOrderUpdatedAt = action.payload;
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
    setAoOrderId,
    setOrderCount,
    setAoOrderCount,
    setOrderType,
    setAoOrderType,
    setOrderCompletionStatus,
    setAoOrderCompletionStatus,
    setActiveStatus,
    setAoActiveStatus,
    setOrderPaymentStatus,
    setAoOrderPaymentStatus,
    setOrderDescription,
    setAoOrderDescription,
    setProjectDescription,
    setAoProjectDescription,
    setProjectName,
    setAoProjectName,
    setTotalPrice,
    setAoTotalPrice,
    setOrderCreatedAt,
    setAoOrderCreatedAt,
    setOrderDueDate,
    setAoOrderDueDate,
    setOrderUpdatedAt,
    setAoOrderUpdatedAt,
    setOrderIsLoading,
    setOrderError,
} = slice.actions;
export default slice.reducer;
