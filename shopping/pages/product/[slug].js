import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/Layout";

import productItems from "../../data/products.json";

export default function ProductPage() {
    const { query } = useRouter();
    const { slug } = query;

    const product = productItems.find((pItem) => pItem.slug === slug);

    if (!product) {
        return <div>Product not found.</div>;
    }
    return (
        <>
            <Layout title={product.title}>
                <h2>{product.title}</h2>
                <div className="grid md:grid-cols-4 md:gdp-3 bg-white rounded-xl p-10">
                    <div className="m:cols-span-2">
                        <Image
                            className="ronder-xl"
                            width={340}
                            height={340}
                            src={product.image}
                        ></Image>
                    </div>
                    <div>
                        <div className="text-lg">
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
                            <div>{product.count > 0 ? "Available" : "Unavailable"}</div>
                        </div>
                        <button className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full">Add to cart</button>
                    </div>
                </div>
            </Layout>
        </>
    );
}
