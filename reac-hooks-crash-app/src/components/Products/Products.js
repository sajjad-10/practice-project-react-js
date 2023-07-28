import React, { useCallback, useReducer } from "react";
import ProductForm from "./ProductForm";
import Search from "./Search";
import ProductList from "./ProductList";

const productReducer = (state, action) => {
    switch (action.type) {
        case "SET":
            return action.products;
        case "ADD":
            return [...state, action.product];
        default:
            throw new Error("Error");
    }
};

function Products() {
    // const [products, setProducts] = useState([]);

    const [products, dispatch] = useReducer(productReducer, []);

    const searchProductsHandler = useCallback((items) => {
        // setProducts(items);
        dispatch({ type: "SET", products: items });
    }, []);

    const addProductHandler = (newProduct) => {
        fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products.json`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            response.json().then((responseData) => {
                // setProducts((prevState) => {
                //     return [
                //         ...prevState,
                //         { id: responseData.name, ...newProduct },
                //     ];
                // });
                dispatch({
                    type: "ADD",
                    product: { id: responseData.name, ...newProduct },
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
