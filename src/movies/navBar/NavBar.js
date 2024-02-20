import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };
    const goForward = () => {
        navigate(1)
    }
    return (
        <div className="row pt-3 d-flex align-items-center justify-content-end">

            <button className="btn btn-outline-primary  col-2 mx-2"><NavLink to='/'>  Home </NavLink></button>
            <button className="col-2 btn btn-outline-primary  mx-2" onClick={goBack}>Back</button>
            <button className="col-2 btn btn-outline-primary  mx-2" onClick={goForward}>Forward</button>
        </div>
    )
}
