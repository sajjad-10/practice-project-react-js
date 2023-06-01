import { useEffect, useState } from "react";
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
const Shopping = (props) => {
    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [purchased, setPurchased] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
            .get("/products.json")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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

    const purchasedHandler = () => {
        setPurchased(true);
    };

    const modalCloseHandler = () => {
        console.log("clocke");
        setPurchased(false);
    };

    const purchaseContinuedHandler = () => {
        setLoading(true);
        const order = {
            products: products,
            price: totalPrice,
            customer: { name: "Sajjad", email: "test@test.com" },
        };
        axios
            .post("/orders.json", { order })
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
        order = <Loader />;
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
                continue={purchaseContinuedHandler}
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
