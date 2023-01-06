import React, { useState } from "react";
import axios from "../Axios/axios";

const NewRequest = (props) => {


    const [reqData, setReqData] = useState({
        pickDate: "",
        topwear: "",
        bottomwear: "",
        clothtype: "",
        other: "",
        contact: "",
        desc: ""
    })
    const [reqStatus, setReqStatus] = useState(false);

    console.log(props.loginStatus + " " + props.useremail);

    const InputEvent = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setReqData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const sendRequest = (e) => {
        e.preventDefault();
        console.log(reqData);

        axios
            .post("/requestSend", reqData)
            .then((response) => {
                if (response.status === 200) {
                    setReqStatus(true)
                    console.log("your request for laundry has been submitted")
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (


        <div className="w-100 p-4" style={{ "background-image": "url(https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}>

            <div class="alert alert-dark" role="alert">
                Hii, {props.loginStatus === true ? (<span style={{ "fontWeight": "bold" }}> {props.useremail} </span>) : (<span style={{ "fontWeight": "bold" }}> Guys </span>)} !! you can request here for Laundry
            </div>

            <div class="row">
                <div class="col-lg-7 mx-auto">
                    <div class="card mt-2 mx-auto p-4 text-white bg-dark opacity-75">
                        <div class="card-body">

                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6 p-2">
                                                <div class="form-group">
                                                    <label for="date"> Pick up/Drop Date</label>
                                                    <input id="date"
                                                        type="date"
                                                        value={reqData.pickDate}
                                                        onChange={InputEvent}
                                                        name="pickDate"
                                                        class="form-control"
                                                    />

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group p-2">
                                                    <label for="topwear">Topwear(Tshirt, Top, Shirt)</label>
                                                    <input id="topwear"
                                                        type="text"
                                                        value={reqData.topwear}
                                                        onChange={InputEvent}
                                                        name="topwear"
                                                        class="form-control"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <label for="bottomWear">BottomWear(Lower, Jeans, Leggins)</label>
                                                <input id="bottomWear"
                                                    type="text"
                                                    value={reqData.bottomwear}
                                                    onChange={InputEvent}
                                                    name="bottomwear"
                                                    class="form-control"
                                                    required="required" />

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 p-2">
                                                <div class="form-group">
                                                    <label for="clothtype"> Woolen Cloth </label>
                                                    <input id="clothtype"
                                                        type="text"
                                                        value={reqData.clothtype}
                                                        onChange={InputEvent}
                                                        name="clothtype"
                                                        class="form-control"
                                                        required="required" />

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group p-2">
                                                    <label for="othertype"> Other </label>
                                                    <input id="other"
                                                        type="text"
                                                        value={reqData.other}
                                                        onChange={InputEvent}
                                                        name="other"
                                                        class="form-control"
                                                        placeholder="Other"
                                                        required="required"
                                                        data-error="Lastname is required." />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="form-group">
                                                <label for="contact"> Contact Person</label>
                                                <input id="contact"
                                                    type="number"
                                                    value={reqData.contact}
                                                    onChange={InputEvent}
                                                    name="contact"
                                                    class="form-control"
                                                    required="required"
                                                    data-error="Firstname is required." />

                                            </div>
                                        </div>
                                        <div>
                                            <div class="form-group">
                                                <label for="description">Description</label>
                                                <input
                                                    id="desc"
                                                    type="text"
                                                    value={reqData.desc}
                                                    onChange={InputEvent}
                                                    name="desc"
                                                    class="form-control"
                                                    placeholder="Description(if any)"
                                                    required="required" />
                                            </div>
                                        </div>
                                        <div class="row m-2">


                                            <button type="submit"
                                                class="btn btn-success btn-send  pt-2 btn-block"
                                                onClick={sendRequest}>
                                                    Send Request
                                            </button>


                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewRequest;