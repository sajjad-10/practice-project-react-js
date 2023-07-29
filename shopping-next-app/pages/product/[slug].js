import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";
import Layout from "@/components/Layout";
import productItems from "@/data/products.json";
import Image from "next/image";

const ProductPage = () => {
    const { state, dispatch } = useContext(CartContext);
    const { query } = useRouter();
    const { slug } = query;

    const product = productItems.find((pItem) => pItem.slug === slug);
    if (!product) {
        return <div>Product not found.</div>;
    }
    const addToCartHandler = () => {
        const existingItem = state.cart.cartItems.find(
            (item) => item.slug === product.slug
        );
        
        const qty = existingItem ? existingItem.qty + 1 : 1;

        if (product.count < qty) {
            alert("Product is out.");
            return;
        }
        dispatch({ type: "ADD_TO_CART", payload: { ...product, qty } });
    };
    return (
        <>
            <Layout title={product.title}>
                <div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
                    <div className="md:cols-span-2">
                        <Image
                            className="rounded-xl"
                            src={product.image}
                            width={340}
                            height={340}
                        />
                    </div>
                    <div className="text-lg">
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.cat}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="mb-2 flex justify-between">
                            <div>Price:</div>
                            <div>{product.price}</div>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <div>Status:</div>
                            <div>
                                {product.count > 0
                                    ? "Available"
                                    : "Unavailable"}
                            </div>
                        </div>
                        <button
                            onClick={addToCartHandler}
                            className=" w-full rounded-xl bg-gray-700 text-white px-4 py-2"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProductPage;
