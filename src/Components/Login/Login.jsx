import React, { useState } from "react";
import axios from "../Axios/axios";
import { NavLink } from "react-router-dom";

const Login = (props) => {

    const [data, setData] = useState({
        useremail: "",
        password: ""
    })

    const [loginStatus, setLoginStatus] = useState(false)

    const InputEvent = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(data);

        axios
            .post("/userlogin", data)
            .then((response) => {
                if (response.status === 200) {
                    console.log("login " + loginStatus + " " + data.useremail);
                    setLoginStatus(true)
                    props.loginStatus(loginStatus, data.useremail)
                }
                console.log(response.status);
            })
            .catch(err => {
                console.log(err);
            })
        // window.location.reload();
    }

    return (
        <div className="container mt-4 bg-dark p-4 text-white">
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="useremail">Email address</label>
                    <input type="email" name="useremail" id="useremail" class="form-control" autoComplete="off" value={data.useremail} onChange={InputEvent} />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" name="password" id="password" class="form-control" autoComplete="off" value={data.password} onChange={InputEvent} />
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button
                    type="submit"
                    class="btn btn-primary btn-block mb-4"
                    onClick={formSubmit}>
                    <NavLink style={{ "textDecoration": "none", "color": "#fff" }} to={loginStatus === true ? "/" : "/login"}>
                        Sign in
                    </NavLink>
                </button>


                <div class="text-center">
                    <p>Not a member? <NavLink to="/register">Register</NavLink></p>
                </div>
            </form>
        </div>
    )
}

export default Login;