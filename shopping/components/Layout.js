import Head from "next/head";
export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`${title} - Shopping`}</title>
            </Head>
            <div>
                <header>header</header>
                <main>{children}</main>
                <footer>footer</footer>
            </div>
        </>
    );
}
