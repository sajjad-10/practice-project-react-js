import { useState } from "react";
import axios from "../../axios-orders";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/Ui/Modal/Modal";
import Order from "../../components/Order/Order";

const prices = {
    product1: 29,
    product2: 39,
    product3: 49,
    product4: 59,
};

const Shopping = () => {
    const [products, setProducts] = useState({
        product1: 0,
        product2: 0,
        product3: 0,
        product4: 0,
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [purchased, setPurchased] = useState(false);

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

    const purchasedHandler = () => {
        setPurchased((purchased) => !purchased);
    };

    const modalCloseHandler = () => {
        setPurchased(false);
    };

    const purchaseContinueHandler = () => {
        const order = {
            products: products,
            price: totalPrice,
            customer: {
                name: "Sajjad",
                email: "test@gmail.com",
            },
        };
        axios
            .post("/orders.json", order)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Wrapper>
            <Modal show={purchased} modalClose={modalCloseHandler}>
                <Order
                    products={products}
                    continue={purchaseContinueHandler}
                    cancel={modalCloseHandler}
                    total={totalPrice}
                />
            </Modal>
            <Controls
                productAdd={addProductHandler}
                productRemove={removeProductHandler}
                price={totalPrice}
                order={purchasedHandler}
            />
        </Wrapper>
    );
};

export default Shopping;
