import React from "react";

import ProductForm from "./ProductForm";
import Search from "./Search";

function Products() {
    return (
        <div className="App">
            <ProductForm />

            <section>
                <Search />
            </section>
        </div>
    );
}

export default Products;
