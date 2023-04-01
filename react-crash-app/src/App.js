import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
// import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
    const initialList = [
        { id: 1, title: "Book 1", price: 99 },
        { id: 2, title: "Book 2", price: 88 },
    ];
    const [productState, setProductState] = useState(initialList);
    const [showProduct, setShowProduct] = useState(false);
    const [showMain, setShowMain] = useState(true);

    const changeTitleHandler = (event, id) => {
        const productIndex = productState.findIndex((item) => {
            return item.id === id;
        });

        const product = productState[productIndex];
        product.title = event.target.value;

        const products = [...productState];
        products[productIndex] = product;
        setProductState(products);
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
                <ProductList
                    products={productState}
                    click={handelProductDelete}
                    change={changeTitleHandler}
                />
            </div>
        );
    }
    return (
        <div id="main" className="center">
            <button
                onClick={() => {
                    setShowMain((showMain) => !showMain);
                }}
            >
                Remove Main
            </button>
            {showMain ? (
                <><Main products={productState} click={toggleProductHandler} />{products}</>
            ) : (
                ""
            )}
            
        </div>
    );
};

export default App;
