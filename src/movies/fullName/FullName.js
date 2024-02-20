import React from "react";
import { useNavigate } from "react-router-dom";




export default function FullName({ data }) {

    const navigate = useNavigate();
    const items = data?.map(item =>

        <button className="btn btn-outline-dark col-md-2 mx-2 my-2 fst-italic" onClick={() => navigate(`/character/${item.id}`)}> {item.fullName} </button>

    );


    return (
        <div className="container-fluid pt-5 row justify-content-center">{items}</div>
    )
} 