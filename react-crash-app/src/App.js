import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import Main from "./components/Main/Main";
import Wrapper from "./components/hoc/Wrapper";
import Container from "./components/hoc/Container";
import AuthContext from "./context/auth-context";

const App = () => {
    const data = [
        { id: 1, title: "Book 1", price: 20.99 },
        { id: 2, title: "Book 2", price: 30.99 },
        { id: 3, title: "Book 3", price: 40.99, discount: 20 },
    ];
    const [products, setProducts] = useState(data);
    const [showProducts, setShowProducts] = useState(false);
    const [showMain, setShowMain] = useState(true);
    const [auth, setAuth] = useState(false);
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
    const loginHandler = () => {
        setAuth(true);
    };
    let productJSX = null;
    if (showProducts) {
        productJSX = (
            <div>
                <ProductList
                    products={products}
                    click={deleteProductHandler}
                    change={changeTitleHandler}
                    isAuth={auth}
                />
            </div>
        );
    }

    return (
        <Container>
            <button
                onClick={() => {
                    setShowMain(false);
                }}
            >
                Remove Main
            </button>
            <AuthContext.Provider value={{ auth: auth, login: loginHandler }}>
                {showMain ? (
                    <>
                        <Main
                            products={products}
                            click={toggleProductHandler}
                            login={loginHandler}
                        />
                        {productJSX}
                    </>
                ) : null}
            </AuthContext.Provider>
        </Container>
    );
};

export default Wrapper(App, "center");
