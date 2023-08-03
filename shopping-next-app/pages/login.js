import Link from "next/link";
import Layout from "@/components/Layout";

const LoginPage = () => {
    return (
        <>
            <Layout title="Login">
                <form className="mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-xl">Login</h2>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="w-full rounded-xl p-2 outline-0"
                            id="email"
                            placeholder="Email"
                            autoFocus
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full rounded-xl p-2 outline-0"
                            id="password"
                            placeholder="Password"
                            autoFocus
                        />
                    </div>
                    <div className="mb-4">
                        <button className="rounded-xl bg-gray-700 text-white px-4 py-2 w-28">
                            Login
                        </button>
                    </div>
                    <div className="mb-4">
                        <Link href="register">Register</Link>
                    </div>
                </form>
            </Layout>
        </>
    );
};

export default LoginPage;
