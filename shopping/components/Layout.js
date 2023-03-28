import Head from "next/head";
import Link from "next/Link";
export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`${title} - Shopping`}</title>
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className="flex h-14 px-8 justify-between items-center border-b-4">
                        <Link href="/">
                            <span className="text-lg font-bold">Shopping</span>
                        </Link>
                        <div>
                        <Link href="/cart" className="p-2">Cart</Link>
                        <Link href="/login" className="p-2">login</Link>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
                <footer>footer</footer>
            </div>
        </>
    );
}
