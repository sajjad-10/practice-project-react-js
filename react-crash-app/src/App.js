import React, { useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";

const App = () => {
    const [productState, setProductState] = useState({
        product: [
            { title: "Book 1", price: 99 },
            { title: "Book 2", price: 88 },
        ],
    });
    const [showProduct, setShowProduct] = useState(false);

    const changePriceHandler = (newTitle1, newTitle2) => {
        setProductState({
            product: [
                { title: newTitle1, price: 199 },
                { title: newTitle2, price: 188 },
            ],
        });
    };
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
    let products = null;
    if (showProduct) {
        products = (
            <div>
                {productState.product.map((item) => {
                    return (
                        <Product
                            title={item.title}
                            price={item.price}
                            click={() =>
                                changePriceHandler(
                                    "title change 1",
                                    "title change 2"
                                )
                            }
                            change={(e) => changeTitleHandler(e)}
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
            <button style={btnStyles} onClick={changePriceHandler}>
                Change Price
            </button>
            <button style={btnStyles} onClick={toggleProductHandler}>
                Show/Hide Products
            </button>
            {products}
        </div>
    );
};

export default App;
