import React from "react";
import "./NavItems.css";
import NavItem from "../NavItem/NavItem";

export default function NavItems() {
    return (
        <ul className="nav-items">
            <NavItem link="/">Shopping</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    );
}
