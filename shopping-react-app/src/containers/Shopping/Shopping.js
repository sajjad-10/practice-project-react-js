import { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const prices = {
    products1: 29,
    products2: 39,
    products3: 49,
    products4: 59,
};

const Shopping = () => {
    const [products, setProducts] = useState({
        product1: 0,
        product2: 0,
        product3: 0,
        product4: 0,
    });
    const [totalPrice, setTotalPrice] = useState(0);

    const addProductHandler = (type) => {
        /* *Calculate the number of product */
        const prevCount = products[type];
        const updatedCount = prevCount + 1;
        const updatedProducts = { ...products };
        updatedProducts[type] = updatedCount;

        /* *Calculate product price */
        const priceAdd = prices[type];
        const prevPrice = totalPrice;
        const newPrice = prevPrice + priceAdd;

        setTotalPrice(newPrice);
        setProducts(updatedProducts);
        console.log("add");
    };

    const removeProductHandler = (type) => {
        /* *Calculate the number of product */
        const prevCount = products[type];
        const updatedCount = prevCount - 1;
        const updatedProducts = { ...products };
        updatedProducts[type] = updatedCount;

        /* *Calculate product price */
        const priceSub = prices[type];
        const prevPrice = totalPrice;
        const newPrice = prevPrice - priceSub;

        setTotalPrice(newPrice);
        setProducts(updatedProducts);
        console.log("remove");
    };

    return (
        <Wrapper>
            <Controls productAdd={addProductHandler}productRemove={removeProductHandler} />
        </Wrapper>
    );
};

export default Shopping;
