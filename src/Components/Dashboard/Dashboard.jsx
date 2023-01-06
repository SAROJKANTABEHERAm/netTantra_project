import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {

    const [newRequest, setNewRequest] = useState(0);
    const [accept, setAccept] = useState(0);
    const [inprogress, setInprogress] = useState(0);
    const [finish, setFinish] = useState(1);

    return (
        <>
            <div class="alert alert-primary m-2" role="alert">
                Dashboard/overview
            </div>

            <div class="d-flex justify-content-center mt-4">
                <div class="card m-2" style={{ "width": "18rem", "background-color": " #ffa64d", "color": "#fff" }}>
                    <div class="card-body">
                        <h5 class="card-title p-4">{newRequest} New Request</h5>
                        <hr />
                        <NavLink to="/newRequest"><a class="btn btn-primary w-100 bg-transparent">View Details <i class="fa-sharp fa-solid fa-arrow-right"></i></a></NavLink>
                    </div>
                </div>
                <div class="card m-2" style={{ "width": "18rem", "background-color": "#bf00ff", "color": "#fff" }}>
                    <div class="card-body">
                        <h5 class="card-title p-4">{accept} Accept</h5>
                        <hr />
                        <a href="#" class="btn btn-primary w-100 bg-transparent">View Details <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="card m-2" style={{ "width": "18rem", "background-color": "#999966", "color": "#fff" }}>
                    <div class="card-body">
                        <h5 class="card-title p-4">{inprogress} Inprocess!</h5>
                        <hr />
                        <a href="#" class="btn btn-primary w-100 bg-transparent">View Details <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="card m-2" style={{ "width": "18rem", "background-color": "#ff794d", "color": "#fff" }}>
                    <div class="card-body">
                        <h5 class="card-title p-4">{finish} Finish</h5>
                        <hr />
                        <a href="#" class="btn btn-primary w-100 bg-transparent">View Details <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <p class="h1 text-center p-4"> Laundry Price(Per Unit) </p>

            <table class="table container table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Top Wear Laundry Price</th>
                        <td> 12 </td>
                    </tr>
                    <tr>
                        <th scope="row">Bottom Wear Laundry Price</th>
                        <td> 22 </td>
                    </tr>
                    <tr>
                        <th scope="row">Woolen Cloth Laundry Price</th>
                        <td> 12 </td>
                    </tr>
                    <tr>
                        <th scope="row"> Other Price </th>
                        <td> Other price depends upon cloths veriety(other than above three category) </td>
                    </tr>
                </tbody>
            </table>


        </>
    )
}

export default Dashboard