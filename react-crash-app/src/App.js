import React, { useState } from "react";
import Product from "./components/Product/Product";

const App = () => {
    const data = [
        { title: "Book 1", price: 20.99 },
        { title: "Book 2", price: 30.99 },
        { title: "Book 3", price: 40.99, discount: 20 },
    ];
    const [products, setProducts] = useState(data);

    const changePriceHandler = () => {
        console.log("Clicked!");
    };

    return (
        <div id="main" className="container">
            <h2>Hello React</h2>
            {products.map((item) => (
                <Product title={item.title} props={item.price}>
                    {item.discount}%
                </Product>
            ))}
            <button onClick={changePriceHandler}>Change Price</button>
        </div>
    );
};

export default App;
