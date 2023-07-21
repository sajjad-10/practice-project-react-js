import Layout from "@/components/Layout";
import Product from "@/components/Product";

import productItems from "@/data/products.json";

export default function Home() {
    return (
        <>
            <Layout title="Home">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {productItems.map((item, index) => (
                        <Product key={index} item={item} />
                    ))}
                </div>
            </Layout>
        </>
    );
}
