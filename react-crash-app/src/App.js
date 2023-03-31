import React, { useState } from "react";
import './App.css'
import Product from "./components/Product/Product";

const App = () => {
    const [productState, setProductState] = useState({
        product: [
            { title: "Book 1", price: 99 },
            { title: "Book 2", price: 88 },
        ],
    });

    const changePriceHandler = () => {
        setProductState({
            product: [
                { title: "Book 1", price: 199 },
                { title: "Book 2", price: 188 },
            ],
        });
    };
    return (
        <div id="main" className="center">
            <Product
                title={productState.product[0].title}
                price={productState.product[0].price}
            >
                Discount: 20%
            </Product>
            <Product
                title={productState.product[1].title}
                price={productState.product[1].price}
                click={changePriceHandler}
            />
            <button onClick={changePriceHandler}>Change Price</button>
        </div>
    );
};

export default App;
