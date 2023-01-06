import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand p-3" >Laundry Management System</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav p-3">
                    <li class="nav-item active">
                        <NavLink style={{"textDecoration": "none"}} to="/"><a class="nav-link"> Dashboard</a></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{"textDecoration": "none"}} to="/newRequest"><a class="nav-link">Laundry Request</a></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{"textDecoration": "none"}}><a class="nav-link" href="#">Request Status</a></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{"textDecoration": "none"}} to="/login"><button type="button" class="btn btn-outline-light">{props.loginStatus===true ? "LogOut" : "LogIn"}</button>
</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;
