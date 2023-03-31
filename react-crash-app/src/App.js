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
    const btnStyles = {
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
            <Product
                title={productState.product[0].title}
                price={productState.product[0].price}
                change={(e) => changeTitleHandler(e)}
            >
                Discount: 20%
            </Product>
            <Product
                title={productState.product[1].title}
                price={productState.product[1].price}
                click={() =>
                    changePriceHandler("title change 1", "title change 2")
                }
            />
            <button style={btnStyles} onClick={changePriceHandler}>Change Price</button>
        </div>
    );
};

export default App;
