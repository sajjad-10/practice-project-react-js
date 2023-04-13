import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loading ...</p>;
    }
    return (
        <div>
            <h2>{loadedProduct.title}</h2>
            <p>{loadedProduct.price}</p>
        </div>
    );
};

export async function getStaticProps(context) {
    const { params } = context;
    const productsId = params.pid;

    const filePath = path.join(process.cwd(), "data", "products.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const product = data.products.find((item) => {
        return item.id === productsId;
    });
    return {
        props: { loadedProduct: product },
    };
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { pid: "p1" } },
            { params: { pid: "p2" } },
            // { params: { pid: "p3" } },
        ],
        fallback: true,
    };
}

export default ProductDetailPage;
