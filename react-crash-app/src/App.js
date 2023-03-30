import React from "react";
import Product from "./components/Product/Product";

const App = () => {
    return (
        <div id="main" className="container">
            <Product title="Book 1" price="30">
                Discount: 20%
            </Product>
        </div>
    );
};

export default App;
