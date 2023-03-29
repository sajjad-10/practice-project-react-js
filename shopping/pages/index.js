import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import Product from "../components/Product";

import productItems from "../data/products.json";

export default function Home() {
    return (
        <>
            <Layout title="Home page">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {productItems.map((pItem) => (
                        <Product item={pItem} key={pItem.slug} />
                    ))}
                </div>
            </Layout>
        </>
    );
}
