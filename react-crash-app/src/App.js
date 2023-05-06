import React, { useState } from "react";
import Product from "./components/Product/Product";
import "./App.css";

const App = () => {
    const data = [
        { id: 1, title: "Book 1", price: 20.99 },
        { id: 2, title: "Book 2", price: 30.99 },
        { id: 3, title: "Book 3", price: 40.99, discount: 20 },
    ];
    const [products, setProducts] = useState(data);
    const [showProducts, setShowProducts] = useState(false);

    const toggleProductHandler = () => {
        setShowProducts(!showProducts);
    };
    const changeTitleHandler = (event) => {
        const data = [
            { id: 1, title: event.target.value, price: 30.99, price: 55.55 },
            { id: 2, title: "Book 2", price: 55.55 },
            { id: 3, title: "Book 3", price: 55.55, discount: 20 },
        ];
        setProducts(data);
    };
    const deleteProductHandler = (productTarget) => {
        const oldProducts = [...products];
        oldProducts.splice(productTarget, 1);
        setProducts(oldProducts);
    };
    let productJSX = null;
    if (showProducts) {
        productJSX = (
            <div>
                {products.map((item, index) => (
                    <Product
                        click={() => deleteProductHandler(item)}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        change={changeTitleHandler}
                    >
                        {item.discount}%
                    </Product>
                ))}
            </div>
        );
    }
    const btn = {
        backgroundColor: "#7b1fa2",
        color: "#fff",
        font: "inherit",
        border: "none",
        outline: "none",
        borderRadius: "3px",
        padding: "0.6rem",
        margin: "0.6rem auto",
    };

    return (
        <div id="main" className="center">
            <h2>Book Store</h2>
            <button style={btn} onClick={toggleProductHandler}>
                Show/Hide Products
            </button>
            {productJSX}
        </div>
    );
};

export default App;
