import { useState, useEffect } from "react";
import axios from "../../axios-orders";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/Ui/Modal/Modal";
import Order from "../../components/Order/Order";
import Loader from "../../components/Ui/Loader/Loader";

const prices = {
    product1: 29,
    product2: 39,
    product3: 49,
    product4: 59,
};

const Shopping = () => {
    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [purchased, setPurchased] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("/products.json").then((response) => {
            setProducts(response.data);
        });
    }, []);

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
        setLoading(true);
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
                setLoading(false);
                setPurchased(false);
            })
            .catch((error) => {
                setLoading(false);
                setPurchased(false);
            });
    };
    let order = null;

    if (loading) {
        order = <Loader></Loader>;
    }

    let controls = <Loader />;
    if (products) {
        controls = (
            <Controls
                productAdd={addProductHandler}
                productRemove={removeProductHandler}
                price={totalPrice}
                order={purchasedHandler}
            />
        );
        order = (
            <Order
                products={products}
                continue={purchaseContinueHandler}
                cancel={modalCloseHandler}
                total={totalPrice}
            />
        );
    }

    return (
        <Wrapper>
            <Modal show={purchased} modalClose={modalCloseHandler}>
                {order}
            </Modal>
            {controls}
        </Wrapper>
    );
};

export default Shopping;
