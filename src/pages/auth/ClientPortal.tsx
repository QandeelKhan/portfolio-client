import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import { setOrderCount } from "../../redux/features/authSlice";
import {
    setActiveStatus,
    setAoBackendProgress,
    setAoDesignProgress,
    setAoFrontendProgress,
    setAoOrderCompletionStatus,
    setAoOrderCount,
    setAoOrderCreatedAt,
    setAoOrderDescription,
    setAoOrderDueDate,
    setAoOrderPaymentStatus,
    setAoOrderType,
    setAoOrderUpdatedAt,
    setAoProjectDescription,
    setAoProjectName,
    setAoTotalPrice,
    setOrderCompletionStatus,
    setOrderCreatedAt,
    setOrderDescription,
    setOrderDueDate,
    setOrderId,
    setOrderPaymentStatus,
    setOrderType,
    setOrderUpdatedAt,
    setProjectDescription,
    setProjectName,
    setTotalPrice,
} from "../../redux/features/orderSlice";
import { setAllOrders } from "../../redux/features/ordersSlice";
import {
    getToken,
    removeToken,
} from "../../redux/services/localStorageService";
import {
    useGetLoggedUserOrdersQuery,
    useGetLoggedUserQuery,
} from "../../redux/services/userAuthApi";
import { RootState } from "../../redux/store";

const ClientsPortal = () => {
    const { firstName, lastName, email, id, loggedIn } = useSelector(
        (state: RootState) => state.auth
    );
    const {
        orderId,
        orderCount,
        orderType,
        completionStatus,
        paymentStatus,
        orderDescription,
        projectDescription,
        projectName,
        totalPrice,
        orderCreatedAt,
        orderDueDate,
        orderUpdatedAt,
        orderError,
    } = useSelector((state: RootState) => state.order);
    //
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { access_token, refresh_token } = getToken();

    console.log(`Bearer ${access_token}`);

    const { data, isSuccess } = useGetLoggedUserOrdersQuery<any>({
        access_token: access_token,
        refresh_token: refresh_token,
    });
    console.log("Orders data", data);

    // storing user profile data in state
    useEffect(() => {
        if (data) {
            // FIXME: this will not works like below, as the data is an array of objects
            dispatch(setOrderId(data.id));
            // dispatch(setOrderCount(data.order_count));
            dispatch(setOrderCount(data.length));
            dispatch(setOrderType(data.order_type));
            dispatch(setOrderCompletionStatus(data.status));
            dispatch(setOrderPaymentStatus(data.payment_status));
            dispatch(setProjectName(data.project_name));
            dispatch(setProjectDescription(data.project_description));
            dispatch(setTotalPrice(data.total_price));
            dispatch(setOrderCreatedAt(data.created_at));
            dispatch(setOrderDueDate(data.due_date));
            dispatch(setOrderUpdatedAt(data.updated_at));

            // const mappedArray = Object.entries(data).map((myData: any) => (
            //     <>{dispatch(setAllOrders(myData))}</>
            // ));
            dispatch(setAllOrders(data));
            // dispatch(setAllOrders(data));

            const activeOrders = data.filter(
                (order: any) => order.active_status === true
            );
            if (activeOrders) {
                dispatch(setOrderId(data.id));
                // dispatch(setOrderCount(data.order_count));
                dispatch(setAoOrderCount(data.length));
                dispatch(setAoOrderType(data.order_type));
                dispatch(setAoOrderCompletionStatus(data.status));
                dispatch(setAoOrderPaymentStatus(activeOrders.payment_status));
                dispatch(setAoProjectName(data.project_name));
                dispatch(setAoProjectDescription(data.project_description));
                dispatch(setAoTotalPrice(data.total_price));
                dispatch(setAoOrderCreatedAt(data.created_at));
                dispatch(setAoOrderDueDate(data.due_date));
                dispatch(setAoOrderUpdatedAt(data.updated_at));
                dispatch(setAoFrontendProgress(data.frontend_percentage));
                dispatch(setAoBackendProgress(data.backend_percentage));
                dispatch(setAoDesignProgress(data.design_percentage));
            }
        }
    }, [data, isSuccess, dispatch]);

    // on logout, unset data in store,unset token in store.remove token from browser
    const handleLogout = () => {
        // dispatch(unSetUserInfo());

        removeToken();
        // navigate("/login");
    };

    return (
        <>
            <Helmet>
                <title>My Blog | Programming, Qandeel Khan, and More</title>
                <meta
                    name="description"
                    content="Stay updated with the latest programming knowledge, learn about the life of Qandeel Khan, and more with my blog."
                />
                <meta
                    name="keywords"
                    content="programming, react, django, qandeel khan, devops, redux, typescript, history, blog"
                />
            </Helmet>

            <PageTemplate iconComponent={<AboutUserIcon />} pageName="Blog.">
                <h1 style={{ textAlign: "center" }}>
                    Welcome to Client Portal {firstName} {lastName}!
                </h1>
                {console.log(data)}
                <h1 style={{ textAlign: "center" }}>
                    you have {orderCount} orders!
                </h1>
                <br />
                <h1 style={{ textAlign: "center" }}>& orders!</h1>
            </PageTemplate>
        </>
    );
};

export default ClientsPortal;
