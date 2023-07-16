import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
    const titleInputRef = useRef();
    const priceInputRef = useRef();

    async function addProductHandler(event) {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const price = priceInputRef.current.value;

        const reqBody = { title, price };
        const response = await fetch("/api/product", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await response.json()
        console.log(responseData);
    }
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
                <div>Home Page</div>
                <form onSubmit={addProductHandler}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            ref={titleInputRef}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Price"
                            ref={priceInputRef}
                        />
                    </div>
                    <button>Add</button>
                </form>
            </main>
        </>
    );
}
