import React, { useState } from "react";
import Product from "./components/Product/Product";
import "./App.css";

const App = () => {
    const data = [
        { title: "Book 1", price: 20.99 },
        { title: "Book 2", price: 30.99 },
        { title: "Book 3", price: 40.99, discount: 20 },
    ];
    const [products, setProducts] = useState(data);

    const changePriceHandler = () => {
        const data = [
            { title: "Book 1", price: 30.99 },
            { title: "Book 2", price: 40.99 },
            { title: "Book 3", price: 50.99, discount: 20 },
        ];
        setProducts(data);
    };

    return (
        <div id="main" className="center">
            <h2>Book Store</h2>
            {products.map((item) => (
                <Product title={item.title} price={item.price}>
                    {item.discount}%
                </Product>
            ))}
            <button onClick={changePriceHandler}>Change Price</button>
        </div>
    );
};

export default App;
