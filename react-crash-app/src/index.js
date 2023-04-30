import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
    "div",
    { id: "main", className: "container" },
    "Hello React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
