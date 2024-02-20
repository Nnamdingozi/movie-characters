import React from "react";
import { useNavigate } from "react-router";
import NavBar from "../navBar/NavBar";
import FullName from "../fullName/FullName";
import { useEffect, useState } from "react";


export default function CharacterCard({ data }) {

    const navigate = useNavigate();

    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 340) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };




    const card = data?.map(character => {
        return (

            <div className="col-4 my-5 d-flex flex-column text-center  align-items-center rounded" style={{ height: 500 }} key={character.id} onClick={() => navigate(`/character/${character.id}`)}>
                <h2> {character.fullName}</h2>
                <div className="h-75 max-vh-75 w-50 border border-dark rounded">
                    <img src={character.imageUrl} alt={character.image} className="img-fluid rounded m-100 h-100"></img>
                </div>

                <div className="container bg-light text-dark">
                    <p>First Name: {character.firstName}</p>
                    <p>Last Name: {character.lastName}</p>
                    <p>Full Name: {character.fullName}</p>
                    <p>Title: {character.title}</p>
                    <p>Family: {character.family}</p>
                </div>
            </div>

        )

    })
    return (
        <div className="container-fluid row">
            <NavBar />
            <h1 className="text-success text-center my-5 font-monospace">Game Of Thrones Movie Characters</h1>
            <FullName data={data} />
            <div className='container-fluid d-flex flex-wrap justify-content-around align-items-between'>
                {card}
            </div>
            <button className="btn btn-success" onClick={bottomToTop}>Back To Top</button>
        </div>

    )

}