import fs from "fs";
import path from "path";

const ProductPage = (props) => {
    return (
        <>
            <div>
                <ul>
                    {props.productItems.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ProductPage;

export function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "products.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return {
        props: { productItems: data },
    };
}
