import React, { useState } from "react";
import ProductForm from "./ProductForm";
import Search from "./Search";
import ProductList from "./ProductList";

function Products() {
    const [products, setProducts] = useState([]);
    const addProductHandler = (newProduct) => {
        setProducts((prevState) => {
            return [
                ...prevState,
                { id: Math.random().toString(), ...newProduct },
            ];
        });
    };
    return (
        <div className="App">
            <ProductForm onAddProduct={addProductHandler} />
            <section>
                <Search />
                <ProductList products={products} onRemoveItem={() => {}} />
            </section>
        </div>
    );
}

export default Products;
