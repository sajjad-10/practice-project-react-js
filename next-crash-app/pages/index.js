import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
    const { products } = props;
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <span className="mr-20">nav :</span>
                    <ul>
                        <li>
                            <Link href="/blog/posts">Blog</Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <hr />
                <hr />
                <div className="container">
                    <span className="mr-20">Products :</span>

                    <ul>
                        {products.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "products.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return {
        props: { products: data.products },
    };
}
