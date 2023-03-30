import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return React.createElement(
        "div",
        { id: "main", className: "container" },
        "Hello World"
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
