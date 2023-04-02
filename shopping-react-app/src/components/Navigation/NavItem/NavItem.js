import React from "react";
import "./NavItem.css";

export default function NavItem(props) {
    return (
        <li className="nav-item">
            <a href={props.link}>{props.children}</a>
        </li>
    );
}
