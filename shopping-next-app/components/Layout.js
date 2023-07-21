import Head from "next/head";
const Layout = ({children, title}) => {
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
};

export default Layout;
