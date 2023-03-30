import React, { useState } from "react";
import Product from "./components/Product/Product";

const App = () => {
    const [productState, setProductState] = useState({
        product: [
            { title: "Book 1", price: 99 },
            { title: "Book 2", price: 88 },
        ],
    });
    return (
        <div id="main" className="container">
            <Product
                title={productState.product[0].title}
                price={productState.product[0].price}
            >
                Discount: 20%
            </Product>
            <Product
                title={productState.product[1].title}
                price={productState.product[1].price}
            />
        </div>
    );
};

export default App;
