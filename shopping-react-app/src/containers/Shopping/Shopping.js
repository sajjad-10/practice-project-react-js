import { useState } from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const prices = {
    product1: 29,
    product2: 39,
    product3: 49,
    product4: 59,
};
const Shopping = (props) => {
    const [products, setProducts] = useState({
        product1: 0,
        product2: 0,
        product3: 0,
        product4: 0,
    });
    const [totalPrice, setTotalPrice] = useState(0);

    const addProductHandler = (type) => {
        const prevCount = products[type];
        const updatedCount = prevCount + 1;
        const updatedProducts = { ...products };
        updatedProducts[type] = updatedCount;
        setProducts(updatedProducts);

        const priceAdd = prices[type];
        const prevPrice = totalPrice;
        const newPrice = priceAdd + prevPrice;
        setTotalPrice(newPrice);
        console.log("ADD");
    };

    const removeProductHandler = (type) => {
        const prevCount = products[type];
        const updatedCount = prevCount - 1;
        const updatedProducts = { ...products };
        updatedProducts[type] = updatedCount;
        setProducts(updatedProducts);

        const priceSub = prices[type];
        const prevPrice = totalPrice;
        const newPrice = priceSub - prevPrice;
        setTotalPrice(newPrice);
        console.log("Remove");
    };

    return (
        <Wrapper>
            <Controls
                productAdd={addProductHandler}
                productRemove={removeProductHandler}
                price={totalPrice}
            />
        </Wrapper>
    );
};

export default Shopping;
