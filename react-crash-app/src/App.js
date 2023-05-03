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

    const changePriceHandler = (newTitle) => {
        const data = [
            { title: newTitle, price: 30.99 },
            { title: "Book 2", price: 40.99 },
            { title: "Book 3", price: 50.99, discount: 20 },
        ];
        setProducts(data);
    };
    const changeTitleHandler = (event) => {
        const data = [
            { title: event.target.value, price: 30.99 },
            { title: "Book 2", price: 40.99 },
            { title: "Book 3", price: 50.99, discount: 20 },
        ];
        setProducts(data);
    };
    const btn = {
        backgroundColor: '#7b1fa2',
        color: '#fff',
        font: 'inherit',
        border: 'none',
        outline: 'none',
        borderRadius: '3px',
        padding: '0.6rem',
        margin: '0.6rem auto',
    }

    return (
        <div id="main" className="center">
            <h2>Book Store</h2>
            {products.map((item) => (
                <Product
                    title={item.title}
                    price={item.price}
                    click={() => changePriceHandler("New Title")}
                    change={changeTitleHandler}
                >
                    {item.discount}%
                </Product>
            ))}
            <button style={btn} onClick={changePriceHandler}>Change Price</button>
        </div>
    );
};

export default App;
