import React from "react";
import Product from "./components/Product/Product";

const App = () => {
    return (
        <div id="main" className="container">
            <h2>Hello React</h2>
            <Product title="Book 1" props="20.99" />
            <Product title="Book 2" props="30.99" />
            <Product title="Book 3" props="40.99" />
        </div>
    );
};

export default App;
