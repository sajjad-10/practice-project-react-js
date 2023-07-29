import Layout from "@/components/Layout";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext);
    const {
        cart: { cartItems },
    } = state;
    return (
        <>
            <Layout title="Shopping Cart">
                <h1 className="mb-4 text-xl">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <div>Cart is empty.</div>
                ) : (
                    <div>Cart</div>
                )}
            </Layout>
        </>
    );
};

export default CartPage;
