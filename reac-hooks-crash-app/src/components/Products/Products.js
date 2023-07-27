import React, { useState, useCallback } from "react";
import ProductForm from "./ProductForm";
import Search from "./Search";
import ProductList from "./ProductList";

function Products() {
    const [products, setProducts] = useState([]);

    const searchProductsHandler = useCallback((items) => {
        setProducts(items);
    }, []);

    const addProductHandler = (newProduct) => {
        fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products.json`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            response.json().then((responseData) => {
                setProducts((prevState) => {
                    return [
                        ...prevState,
                        { id: responseData.name, ...newProduct },
                    ];
                });
            });
        });
    };
    return (
        <div className="App">
            <ProductForm onAddProduct={addProductHandler} />
            <section>
                <Search onLoadProducts={searchProductsHandler} />
                <ProductList products={products} onRemoveItem={() => {}} />
            </section>
        </div>
    );
}

export default Products;
