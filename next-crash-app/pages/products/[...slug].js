import { useRouter } from "next/router";
const ProductsPage = () => {
    const router = useRouter()
    console.log(router.query);
    return (
        <div>
            <h2>Products Page</h2>
        </div>
    );
};

export default ProductsPage;
