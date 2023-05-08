import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import Main from "./components/Main/Main";

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
    const changeTitleHandler = (event, id) => {
        const productIndex = products.findIndex((item) => {
            return item.id === id;
        });

        const product = { ...products[productIndex] };
        product.title = event.target.value;

        const productsCopy = [...products];
        productsCopy[productIndex] = product;
        setProducts(productsCopy);
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
                <ProductList
                    products={products}
                    click={deleteProductHandler}
                    change={changeTitleHandler}
                />
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
            <Main products={products} click={toggleProductHandler} />
            {productJSX}
        </div>
    );
};

export default App;
