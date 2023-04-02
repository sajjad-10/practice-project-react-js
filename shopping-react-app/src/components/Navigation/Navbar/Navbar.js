import React from "react";
import "./Navbar.css";
import NavItems from "../NavItems/NavItems";
export default function Navbar(props) {
    return (
        <header className="navbar">
            <nav>
                <NavItems />
            </nav>
        </header>
    );
}
