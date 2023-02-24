import { BaseSyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/services/userAuthApi";
import { storeToken } from "../../redux/services/localStorageService";
import RegFormGoogle from "./RegFormGoogle";
// import "./reg-form.css";
import "./login-form.css";

// const serverErrorInterface = {
//     name: String,
//     email: String,
//     password: String,
//     password2: String,
//     tc: Boolean,
// };

const RegistrationForm = () => {
    // getting errors from server
    const [serverError, setServerError] = useState<any>({});
    const navigate = useNavigate();
    // the work of redux: with hook "userRegisterUserMutation" we get some extra awesome properties in an obj
    // i.e isLoading, isFetching, is error etc and get a method "registerUser" and we can call this method
    // to send our data, rather then hook..
    // const data = useRegisterUserMutation();
    // console.log(data);
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // this email can be target by the "name" property of html/jsx element.
        const actualData = {
            first_name: data.get("first_name"),
            last_name: data.get("last_name"),
            email: data.get("email"),
            password: data.get("password"),
            password2: data.get("password2"),
            tc: data.get("tc"),
        };

        // calling the "registerUser" by await and give it the data of frontend, this data will go to
        // the "userAuthApi" slice in the "user" obj we send to backend.
        // this res contain the response of server i.e error/success.
        const res: any = await registerUser(actualData);
        // console.log(res);
        // here we define if the response of the server is "data" or the "error"
        if (res.error) {
            // console.log(res.error.data.errors);
            // console.log(typeof res.error.data.errors);
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            console.log(typeof res.data);
            console.log(res.data);
            storeToken(res.data.token);
            navigate("/");
        }
    };
    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="login email">
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        required
                    />
                </div>
                {serverError.first_name && (
                    <div
                        style={{
                            color: "red",
                            fontSize: "12px",
                            paddingLeft: "10px",
                        }}
                    >
                        {serverError.name[0]}
                    </div>
                )}

                <div className="login email">
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        required
                    />
                </div>
                {serverError.last_name && (
                    <div
                        style={{
                            color: "red",
                            fontSize: "12px",
                            paddingLeft: "10px",
                        }}
                    >
                        {serverError.name[0]}
                    </div>
                )}

                <div className="login email">
                    <label htmlFor="name">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                {serverError.email && (
                    <div style={{ color: "red", paddingLeft: 10 }}>
                        {serverError.email[0]}
                    </div>
                )}
                <div className="login password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                {serverError.password && (
                    <div style={{ color: "red", paddingLeft: 10 }}>
                        {serverError.password[0]}
                    </div>
                )}
                <div className="login password">
                    <label htmlFor="password2">Password Confirm</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        required
                    />
                </div>
                {serverError.password2 && (
                    <div style={{ color: "red", paddingLeft: 10 }}>
                        {serverError.password2[0]}
                    </div>
                )}

                <div className=" tc">
                    <input type="checkbox" id="tc" name="tc" required />
                    <label htmlFor="tc">
                        I accept the terms and conditions
                    </label>
                    {serverError.tc && (
                        <div
                            style={{
                                color: "red",
                                fontSize: "12px",
                                paddingLeft: "10px",
                            }}
                        >
                            {serverError.tc[0]}
                        </div>
                    )}
                </div>
                <button className="login-button" type="submit">
                    Login
                </button>
            </form>
            <a style={{ color: "white" }} href="/login">
                Already have an account?
            </a>
            <RegFormGoogle />
        </>
    );
};

export default RegistrationForm;

// </div>
// <div>
//     {/*  */}
//     <div className="login password">
//         <label htmlFor="password">Password</label>
//         <input
//             type="password"
//             id="password"
//             name="password"
//             required
//         />
//     </div>
//     {/*  */}
//     {serverError.password && (
//         <div
//             style={{
//                 color: "red",
//                 fontSize: "12px",
//                 paddingLeft: "10px",
//             }}
//         >
//             {serverError.password[0]}
//         </div>
//     )}
// </div>
// <div>
//     <label htmlFor="password2">Confirm Password</label>

//     <input
//         type="password"
//         name="password2"
//         id="password2"
//         required
//     />
//     {serverError.password2 && (
//         <div
//             style={{
//                 color: "red",
//                 fontSize: "12px",
//                 paddingLeft: "10px",
//             }}
//         >
//             {serverError.password2[0]}
//         </div>
//     )}
// </div>
// <div>
//     <input type="checkbox" id="tc" name="tc" required />
//     <label htmlFor="tc">
//         I accept the terms and conditions
//     </label>
//     {serverError.tc && (
//         <div
//             style={{
//                 color: "red",
//                 fontSize: "12px",
//                 paddingLeft: "10px",
//             }}
//         >
//             {serverError.tc[0]}
//         </div>
//     )}
// </div>
// <button className="login-button" type="submit">
//     Submit
// </button>
