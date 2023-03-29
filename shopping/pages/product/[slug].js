import { useRouter } from "next/router";

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
            </Layout>
        </>
    );
}
