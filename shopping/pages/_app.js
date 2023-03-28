import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <div className="bg-gray-100 text-black">
                <Component {...pageProps} />
            </div>
        </>
    );
}
