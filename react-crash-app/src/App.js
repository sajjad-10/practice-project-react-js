import React, { useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";

const App = () => {
    const initialList = [
        { title: "Book 1", price: 99 },
        { title: "Book 2", price: 88 },
    ];
    const [productState, setProductState] = useState(initialList);
    const [showProduct, setShowProduct] = useState(false);

    const changeTitleHandler = (event) => {
        setProductState({
            product: [
                { title: event.target.value, price: 99 },
                { title: "Book 2", price: 88 },
            ],
        });
    };
    const toggleProductHandler = () => {
        setShowProduct((productState) => !productState);
    };
    const handelProductDelete = (productIndex) => {
        const products = [...productState];
        products.splice(productIndex, 1);
        setProductState(products);
    };
    let products = null;
    if (showProduct) {
        products = (
            <div>
                {productState.map((item, index) => {
                    return (
                        <Product
                            title={item.title}
                            price={item.price}
                            change={(e) => changeTitleHandler(e)}
                            click={() => handelProductDelete(index)}
                        />
                    );
                })}
            </div>
        );
    }
    const btnStyles = {
        backgroundColor: "#7b1fa2",
        color: "#fff",
        font: "inherit",
        border: "none",
        outline: "none",
        borderRadius: "3px",
        padding: "0.6rem",
        margin: "0.6rem auto",
        marginLeft: "0.6rem",
    };
    return (
        <div id="main" className="center">
            <button style={btnStyles} onClick={toggleProductHandler}>
                Show/Hide Products
            </button>
            {products}
        </div>
    );
};

export default App;
