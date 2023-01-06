import React, { useState } from "react";
import axios from "../Axios/axios";
import { NavLink } from "react-router-dom";

const Register = () => {

    const [regData, setRegData] = useState({
        useremail: "",
        password: "",
        re_password: ""
    })
    const [regStatus, setRegStatus] = useState(false)

    const InputEvent = (event) => {

        setRegData({ ...regData, [event.target.name]: event.target.value })
    }

    const registerData = (e) => {
        e.preventDefault();

        if (regData.password === regData.re_password) {
            // console.log(regData);
            axios
                .post("/register", regData)
                .then((response) => {
                    if (response.status === 200) {
                        setRegStatus(true)
                        console.log("Data send Succesfully" + response);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            alert("Enter the same password ")
        }
    }

    return (
        <section class=" p-4" style={{ "background-color": "#eee" }}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style={{ "border-radius": "25px" }}>
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form class="mx-1 mx-md-4">
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="email">Your Email</label>
                                                    <input type="email"
                                                        id="useremail"
                                                        name="useremail"
                                                        value={regData.useremail}
                                                        onChange={InputEvent}
                                                        // autoComplete="off"
                                                        class="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="password">Password</label>
                                                    <input type="password"
                                                        id="password"
                                                        name="password"
                                                        value={regData.password}
                                                        onChange={InputEvent}
                                                        autoComplete="off"
                                                        class="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <label class="form-label" for="re_password">Repeat your password</label>
                                                    <input type="password"
                                                        id="re_password"
                                                        name="re_password"
                                                        value={regData.re_password}
                                                        onChange={InputEvent}
                                                        autoComplete="off"
                                                        class="form-control" />
                                                </div>
                                            </div>
                                            {/* <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"> */}
                                            <button type="submit"
                                                class="btn btn-primary btn-lg"
                                                onClick={registerData}>
                                                <NavLink style={{ "textDecoration": "none", "color": "#fff" }} to={regStatus === true ? "/login" : "/register"}>
                                                    Register
                                                </NavLink>
                                            </button>
                                            {/* </div> */}

                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            class="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register