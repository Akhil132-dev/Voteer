import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function Header({ setopen }) {
    const [navbar, setnavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80)
            setnavbar(true);
        else setnavbar(false);
    }
    window.addEventListener("scroll", changeBackground)

    return (
        <div className={`header ${navbar && "active"} `}> <div className="header__option">
            <Link className="Links"> Help</Link>{" "}
            <li> <Link className="Links">How to Vote?</Link></li>
            <Link className="Links">How does It works?</Link>{" "}

        </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ac/Election_Commission_of_India_Logo.png"
                className="App__logo"
                alt=""
            />

            <div className="header__button">
                <button className="buttons" onClick={() => setopen(true)}>Register</button>
            </div>
        </div>
    );
}

export default Header;
